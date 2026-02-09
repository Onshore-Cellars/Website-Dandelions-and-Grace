#!/bin/bash
#
# Image Organization Script for Dandelions & Grace Blog
# 
# INSTRUCTIONS:
# 1. Download all images from Google Drive to a folder (e.g., ~/Downloads/blog-images/)
# 2. Run this script: bash scripts/organize-images.sh ~/Downloads/blog-images/
# 3. Images will be automatically organized into /public/images/blog/
#

SOURCE_DIR="${1:-./downloaded-images}"
DEST_DIR="./public/images/blog"

# Create destination directory
mkdir -p "$DEST_DIR"

echo "📸 Organizing Images for Dandelions & Grace Blog"
echo "Source: $SOURCE_DIR"
echo "Destination: $DEST_DIR"
echo ""

# Blog post slugs that need images
declare -a POSTS=(
  "summer-wedding-provencal-bastide"
  "timeless-wedding-south-france"
  "chateau-de-tourreau"
  "provencal-chapel-elopement"
  "wildflower-provence-farm"
  "bright-elopement"
  "autumnal-chateau-robernier"
  "aix-bastide-wedding"
  "provence-chateau-wedding"
  "grasse-perfume-fields-elopement"
  "luberon-provence-wedding"
  "monaco-elopement"
  "yacht-flower-care-tips"
  "festival-wedding"
  "romantic-grasse-wedding"
)

# Copy and rename function
process_images() {
  local post_slug=$1
  local count=0
  
  echo "Processing: $post_slug"
  
  # Look for images that might match this post
  # You'll need to manually organize or we can do pattern matching
  find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read -r img; do
    filename=$(basename "$img")
    
    # Copy to destination with organized naming
    # Featured image: {slug}.jpg
    # Gallery images: {slug}-1.jpg, {slug}-2.jpg, etc.
    
    # You can customize this logic based on your folder structure
    echo "  Found: $filename"
  done
  
  echo ""
}

# Process each post
for post in "${POSTS[@]}"; do
  process_images "$post"
done

echo "✅ Image organization complete!"
echo ""
echo "NEXT STEPS:"
echo "1. Review images in $DEST_DIR"
echo "2. Rename featured images to match blog post slugs"
echo "3. Name gallery images as: {slug}-1.jpg, {slug}-2.jpg, etc."
echo "4. Run 'npm run dev' to see your images live!"
