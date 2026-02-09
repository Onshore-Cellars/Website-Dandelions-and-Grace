# How to Add Your Blog Images from Google Drive

Since I cannot directly access Google Drive, here's the **fastest way** to get your images into the website:

## Quick 3-Step Process

### Step 1: Download from Google Drive
1. Go to your [Google Drive folder](https://drive.google.com/drive/folders/19LIQam_Y8UCEY5P2iQXr3SzIA3jEGEh5?usp=sharing)
2. Select all image folders/files
3. Right-click → Download
4. Extract the ZIP file to your computer

### Step 2: Organize Images

Create this folder structure:
```
public/images/blog/
├── summer-wedding-provencal-bastide.jpg       (featured image)
├── summer-wedding-provencal-bastide-1.jpg     (gallery image 1)
├── summer-wedding-provencal-bastide-2.jpg     (gallery image 2)
├── timeless-wedding-south-france.jpg
├── timeless-wedding-south-france-1.jpg
├── chateau-de-tourreau.jpg
├── chateau-de-tourreau-1.jpg
... etc.
```

**Naming Convention:**
- Featured image: `{blog-post-slug}.jpg`
- Gallery images: `{blog-post-slug}-1.jpg`, `{blog-post-slug}-2.jpg`, etc.

### Step 3: Use the Helper Script

```bash
# Navigate to project
cd /workspaces/Website-Dandelions-and-Grace

# Make the script executable
chmod +x scripts/organize-images.sh

# Run with your downloaded images folder
bash scripts/organize-images.sh ~/Downloads/your-images-folder
```

## Blog Post Slugs Reference

Copy these exact names for your image files:

| Blog Post Title | Image Filename Prefix |
|----------------|----------------------|
| Capturing the magic of a summer wedding in a Provencal bastide | `summer-wedding-provencal-bastide` |
| A timeless Wedding in the south of France | `timeless-wedding-south-france` |
| Intimate wedding in stunning Chateau de Tourreau | `chateau-de-tourreau` |
| Romantic elopement in a beautiful Provençal chapel | `provencal-chapel-elopement` |
| Beautiful wild flower wedding in Provence Farm | `wildflower-provence-farm` |
| All things bright and beautiful | `bright-elopement` |
| Autumnal Wedding at Chateau Robernier | `autumnal-chateau-robernier` |
| Chic bastide wedding near Aix en Provence | `aix-bastide-wedding` |
| Stunning chateau wedding in Provence | `provence-chateau-wedding` |
| Intimate elopement above the perfume fields of Grasse | `grasse-perfume-fields-elopement` |
| Relaxed Provence wedding in the beautiful Luberon | `luberon-provence-wedding` |
| A Spectacular Monaco Elopement | `monaco-elopement` |
| Top Tips to keep your flowers in tip top condition | `yacht-flower-care-tips` |
| Alex and Lucy's bold and bright Festival wedding | `festival-wedding` |
| Romantic Summer wedding in Grasse | `romantic-grasse-wedding` |

## Example

If you have photos from the Mougins wedding:
```
timeless-wedding-south-france.jpg          ← Main/featured image
timeless-wedding-south-france-1.jpg        ← Gallery photo 1
timeless-wedding-south-france-2.jpg        ← Gallery photo 2
timeless-wedding-south-france-3.jpg        ← Gallery photo 3
... up to 12 images
```

## Image Specifications

- **Format**: JPG or WebP preferred
- **Featured Image Size**: 1200 x 1500px (4:5 ratio)
- **Gallery Images**: Same ratio 
- **File Size**: Keep under 500KB each (for fast loading)
- **Quality**: 85% JPEG quality is perfect

## Alternative: Manual Upload

If the script doesn't work, simply:

1. Create the folder: `public/images/blog/`
2. Drag and drop your images there
3. Rename them to match the slugs above
4. Restart dev server: `npm run dev`

## Need Help?

If you're unsure which images go with which blog post, you can either:
1. Match by date (blog posts have dates in the journal page)
2. Match by venue name (Chateau Tourreau, Mougins, Monaco, etc.)
3. Ask me and I'll help map them!

Once images are added, your journal will automatically display them beautifully! 🌸
