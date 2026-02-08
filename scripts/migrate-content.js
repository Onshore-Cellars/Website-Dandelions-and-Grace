#!/usr/bin/env node

/**
 * Content Migration Script for Dandelions & Grace
 * 
 * This script crawls the existing website at https://www.dandelionsandgrace.fr/
 * and extracts content for migration to the new Next.js site.
 * 
 * Usage: node scripts/migrate-content.js
 * 
 * Output: content-migration.json with structured data ready for CMS import
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.dandelionsandgrace.fr';
const OUTPUT_FILE = path.join(__dirname, '../content-migration.json');

// Pages to crawl
const PAGES_TO_CRAWL = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/contact',
];

/**
 * Fetch HTML content from a URL
 */
function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

/**
 * Extract text content from HTML (simple parser)
 * In production, use a proper HTML parser like cheerio
 */
function extractContent(html) {
  // Remove script and style tags
  let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  // Extract title
  const titleMatch = text.match(/<title[^>]*>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Extract meta description
  const descMatch = text.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const description = descMatch ? descMatch[1] : '';
  
  // Extract headings
  const h1Matches = text.match(/<h1[^>]*>(.*?)<\/h1>/gi) || [];
  const h1s = h1Matches.map(h => h.replace(/<[^>]*>/g, '').trim());
  
  const h2Matches = text.match(/<h2[^>]*>(.*?)<\/h2>/gi) || [];
  const h2s = h2Matches.map(h => h.replace(/<[^>]*>/g, '').trim());
  
  // Extract paragraphs
  const pMatches = text.match(/<p[^>]*>(.*?)<\/p>/gi) || [];
  const paragraphs = pMatches
    .map(p => p.replace(/<[^>]*>/g, '').trim())
    .filter(p => p.length > 20); // Only substantial paragraphs
  
  // Extract image URLs
  const imgMatches = text.match(/<img[^>]+src=["']([^"']+)["']/gi) || [];
  const images = imgMatches.map(img => {
    const srcMatch = img.match(/src=["']([^"']+)["']/);
    return srcMatch ? srcMatch[1] : null;
  }).filter(Boolean);
  
  return {
    title,
    description,
    headings: {
      h1: h1s,
      h2: h2s,
    },
    paragraphs,
    images: images.map(img => 
      img.startsWith('http') ? img : `${BASE_URL}${img}`
    ),
  };
}

/**
 * Create URL mapping for redirects
 */
function createUrlMap(oldUrl, newUrl) {
  return {
    source: oldUrl,
    destination: newUrl,
    permanent: true,
  };
}

/**
 * Main migration function
 */
async function migrate() {
  console.log('🚀 Starting content migration from', BASE_URL);
  console.log('');
  
  const migrationData = {
    sourceUrl: BASE_URL,
    migratedAt: new Date().toISOString(),
    pages: [],
    redirects: [],
  };
  
  for (const page of PAGES_TO_CRAWL) {
    console.log(`📄 Crawling: ${page}`);
    
    try {
      const url = `${BASE_URL}${page}`;
      const html = await fetchPage(url);
      const content = extractContent(html);
      
      migrationData.pages.push({
        oldUrl: page,
        newUrl: page, // Assuming same structure; adjust as needed
        ...content,
      });
      
      // Create redirect mapping
      migrationData.redirects.push(createUrlMap(page, page));
      
      console.log(`✅ Extracted: ${content.title || 'Untitled'}`);
      console.log(`   - Headings: ${content.headings.h1.length + content.headings.h2.length}`);
      console.log(`   - Paragraphs: ${content.paragraphs.length}`);
      console.log(`   - Images: ${content.images.length}`);
      console.log('');
      
      // Be respectful - delay between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`❌ Error crawling ${page}:`, error.message);
    }
  }
  
  // Write output file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(migrationData, null, 2));
  
  console.log('');
  console.log('✅ Migration complete!');
  console.log(`📁 Output saved to: ${OUTPUT_FILE}`);
  console.log('');
  console.log('Next steps:');
  console.log('1. Review the migration data');
  console.log('2. Import content to Sanity CMS or create MDX files');
  console.log('3. Update redirects in next.config.ts');
  console.log('4. Download and optimize images');
  console.log('');
}

// Run migration
if (require.main === module) {
  migrate().catch(console.error);
}

module.exports = { migrate, extractContent };
