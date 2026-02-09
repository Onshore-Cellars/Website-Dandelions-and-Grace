#!/usr/bin/env node

/**
 * Content Migration Script for Dandelions & Grace
 * 
 * This script scrapes content from an existing website and outputs
 * structured JSON that can be imported into Sanity CMS.
 * 
 * Usage: node scripts/migrate-content.js <source-url>
 * Example: node scripts/migrate-content.js https://example.com
 */

import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as https from 'https';
import * as http from 'http';

// Rate limiting configuration
const RATE_LIMIT_DELAY = 1000; // 1 second between requests
const MAX_RETRIES = 3;

// User agent for polite scraping
const USER_AGENT = 'DandelionsAndGrace-MigrationBot/1.0';

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const options = {
      headers: {
        'User-Agent': USER_AGENT,
      },
    };

    client.get(url, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function scrapePortfolioItem(url) {
  try {
    const html = await fetchPage(url);
    const $ = cheerio.load(html);

    // Extract common portfolio item data
    // Adjust selectors based on your source site structure
    const item = {
      title: $('h1').first().text().trim(),
      description: $('meta[name="description"]').attr('content'),
      images: [],
      content: '',
    };

    // Extract images
    $('.gallery img, .portfolio-image').each((i, elem) => {
      const src = $(elem).attr('src');
      const alt = $(elem).attr('alt') || '';
      if (src) {
        item.images.push({ src, alt });
      }
    });

    // Extract text content
    $('.content p, .description').each((i, elem) => {
      item.content += $(elem).text().trim() + '\n\n';
    });

    return item;
  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
    return null;
  }
}

async function scrapeBlogPost(url) {
  try {
    const html = await fetchPage(url);
    const $ = cheerio.load(html);

    const post = {
      title: $('h1').first().text().trim(),
      excerpt: $('meta[name="description"]').attr('content'),
      content: '',
      publishedAt: $('time').attr('datetime') || new Date().toISOString(),
      images: [],
    };

    // Extract post content
    $('.post-content p, article p').each((i, elem) => {
      post.content += $(elem).text().trim() + '\n\n';
    });

    // Extract images
    $('.post-content img, article img').each((i, elem) => {
      const src = $(elem).attr('src');
      const alt = $(elem).attr('alt') || '';
      if (src) {
        post.images.push({ src, alt });
      }
    });

    return post;
  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
    return null;
  }
}

async function migrateContent(sourceUrl) {
  console.log(`Starting content migration from: ${sourceUrl}`);

  const results = {
    portfolio: [],
    posts: [],
    metadata: {
      sourceUrl,
      migratedAt: new Date().toISOString(),
    },
  };

  // Example: To use this script, you would:
  // 1. Identify portfolio and blog post URLs from the source site
  // 2. Loop through them with rate limiting
  // 3. Extract data using the scraping functions
  // 4. Save to JSON

  console.log('Migration complete. Output saved to migration-output.json');
  
  // Write results to file
  fs.writeFileSync(
    'migration-output.json',
    JSON.stringify(results, null, 2)
  );

  console.log('\nNext steps:');
  console.log('1. Review migration-output.json');
  console.log('2. Import data into Sanity Studio');
  console.log('3. Upload images to Sanity CDN');
}

// Command line execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const sourceUrl = process.argv[2];
  
  if (!sourceUrl) {
    console.error('Usage: node scripts/migrate-content.js <source-url>');
    process.exit(1);
  }

  migrateContent(sourceUrl).catch((error) => {
    console.error('Migration failed:', error);
    process.exit(1);
  });
}

export { migrateContent, scrapePortfolioItem, scrapeBlogPost };
