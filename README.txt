╔════════════════════════════════════════════════════════════════════════════════╗
║                     SUBTITLEEDIT WEBSITE - README                              ║
║                   Professional Multi-Page Website                              ║
╚════════════════════════════════════════════════════════════════════════════════╝

📁 PROJECT STRUCTURE
════════════════════════════════════════════════════════════════════════════════
subtitleedit3/
│
├── index.html          ➜ Home page with hero section, features, and keywords
├── about.html          ➜ About page with mission, vision, and values
├── contact.html        ➜ Contact page with Google Form integration
├── download.html       ➜ Download page with platform information
├── style.css           ➜ Complete styling with responsive design
├── script.js           ➜ JavaScript for interactivity and animations
└── README.txt          ➜ This file (setup and customization guide)

════════════════════════════════════════════════════════════════════════════════

🚀 HOW TO RUN THE WEBSITE LOCALLY
════════════════════════════════════════════════════════════════════════════════

METHOD 1: Direct Browser Opening
─────────────────────────────────
1. Navigate to the project folder: D:\subtitleedit3
2. Double-click on "index.html" to open it in your default browser
3. Use the navigation menu to browse between pages

METHOD 2: Using a Local Web Server (Recommended)
─────────────────────────────────────────────────
For a better development experience, use a local server:

OPTION A - Python (if installed):
  • Open command prompt in the project folder
  • Run: python -m http.server 8000
  • Open browser and visit: http://localhost:8000

OPTION B - Node.js with Live Server (if installed):
  • Install: npm install -g live-server
  • Run: live-server
  • Browser will open automatically

OPTION C - VS Code Live Server Extension:
  • Open folder in VS Code
  • Install "Live Server" extension
  • Right-click index.html → "Open with Live Server"

════════════════════════════════════════════════════════════════════════════════

🔧 CUSTOMIZATION GUIDE
════════════════════════════════════════════════════════════════════════════════

1️⃣ CHANGING COLORS
─────────────────────
Open: style.css
Find: :root { ... } (lines 13-25)

Current color palette:
• --primary-color: #196CF2         (Main blue color)
• --secondary-color: #26272C       (Dark gray/black)
• --bg-light: #F2F5FD              (Light background)
• --bg-white: #FFFFFF              (White background)
• --text-dark: #26272C             (Dark text)
• --text-light: #5A5A5F            (Light text)

To change colors:
  1. Replace the hex color codes with your desired colors
  2. Save the file
  3. Refresh your browser

Example:
  --primary-color: #FF6B6B;  /* Changes to red */

─────────────────────────────────────────────────────────────────────────────────

2️⃣ UPDATING THE GOOGLE FORM LINK
──────────────────────────────────
Open: contact.html
Find: Line 138 (approximately)
Look for: <a href="https://docs.google.com/forms/d/e/..."

Current link:
https://docs.google.com/forms/d/e/1FAIpQLSdaGjbXbEM5pCdc8aF65I6QwjO4ccjLwC-N4YqygHo5MaUpMA/viewform?usp=header

To replace:
  1. Create your Google Form
  2. Click "Send" → Copy the form link
  3. Replace the entire URL in the href attribute
  4. Save and test

─────────────────────────────────────────────────────────────────────────────────

3️⃣ CHANGING THE GITHUB REPOSITORY LINK
────────────────────────────────────────
Current GitHub link:
https://github.com/isabellagreen968/SubtitleEdit

To change:
  1. Search for "isabellagreen968/SubtitleEdit" in all HTML files
  2. Replace with your GitHub username/repository
  3. This link appears in:
     • Navigation bar (all pages)
     • Footer (all pages)
     • Download page resources

Find & Replace (All Files):
  FROM: https://github.com/isabellagreen968/SubtitleEdit
  TO: https://github.com/YOUR-USERNAME/YOUR-REPO

─────────────────────────────────────────────────────────────────────────────────

4️⃣ UPDATING THE DOWNLOAD LINK
───────────────────────────────
Current download link:
https://subtitleedit.net/download/

To change:
  1. Open: download.html
  2. Find: Line 132 and 261 (approximately)
  3. Look for: href="https://subtitleedit.net/download/"
  4. Replace with your download URL
  5. Also check download.html navigation button

Search in all files for:
"https://subtitleedit.net/download/"

─────────────────────────────────────────────────────────────────────────────────

5️⃣ MODIFYING KEYWORDS & SEO LINKS
───────────────────────────────────
Current keywords with links (index.html):

1. "subtitle edit pro" 
   → https://subtitleedit.net/

2. "subtitle edit whisper plugin"
   → https://subtitleedit.net/subtitle-edit-whisper/

3. "subtitle edit visual sync"
   → https://subtitleedit.net/synchronizing-subtitles-with-subtitle-edit/

To update:
  1. Open: index.html
  2. Search for the keyword text
  3. Update the <a href="..."> URL
  4. Modify the keyword text if needed
  5. Keep links natural within paragraphs

Example location: Lines 87-110 (feature cards section)

─────────────────────────────────────────────────────────────────────────────────

6️⃣ CHANGING SITE NAME & BRANDING
──────────────────────────────────
Current site name: "SubtitleEdit"

To rebrand:
  1. Search "SubtitleEdit" in all HTML files
  2. Replace with your brand name
  3. Update logo text in navigation (class="logo-text")
  4. Update all <title> tags in HTML files
  5. Update footer branding

Files to update:
  • index.html
  • about.html
  • contact.html
  • download.html

─────────────────────────────────────────────────────────────────────────────────

7️⃣ MODIFYING CONTENT & TEXT
─────────────────────────────
All text content can be edited directly in HTML files:

• Hero section: index.html (lines 48-68)
• Features: index.html (lines 74-130)
• About content: about.html (lines 48-115)
• Contact info: contact.html (lines 48-150)
• Download info: download.html (lines 48-200)

Simply open the file, find the text, and edit as needed.

─────────────────────────────────────────────────────────────────────────────────

8️⃣ CUSTOMIZING FOOTER
───────────────────────
Open any HTML file and scroll to the <footer> section (bottom of file)

You can modify:
  • Footer description
  • Quick links
  • Social links
  • Copyright text (line with "© 2024 SubtitleEdit")
  • "Designed & Developed by" text

To add more social links:
  1. Copy an existing social-link <a> tag
  2. Update the href URL
  3. Replace the SVG icon (use heroicons.com or fontawesome.com)

════════════════════════════════════════════════════════════════════════════════

📱 RESPONSIVE DESIGN
════════════════════════════════════════════════════════════════════════════════

The website is fully responsive and tested on:
  ✓ Desktop (1920px and above)
  ✓ Laptop (1200px - 1920px)
  ✓ Tablet (768px - 1200px)
  ✓ Mobile (320px - 768px)

Mobile navigation automatically switches to a hamburger menu on small screens.

Test responsiveness:
  • Chrome: F12 → Click device icon → Select device
  • Firefox: F12 → Responsive Design Mode
  • Edge: F12 → Toggle device emulation

════════════════════════════════════════════════════════════════════════════════

🎨 FONTS USED
════════════════════════════════════════════════════════════════════════════════

• Primary Font: Inter (body text)
• Heading Font: Poppins (titles and headings)

Fonts are loaded from Google Fonts (automatically included).

To change fonts:
  1. Visit: https://fonts.google.com
  2. Select your desired fonts
  3. Copy the <link> tag
  4. Replace the existing font link in all HTML files (in <head>)
  5. Update font-family in style.css

════════════════════════════════════════════════════════════════════════════════

⚙️ JAVASCRIPT FEATURES
════════════════════════════════════════════════════════════════════════════════

script.js includes:
  ✓ Mobile navigation toggle
  ✓ Smooth scrolling
  ✓ Header scroll effects
  ✓ Animated elements on scroll
  ✓ Counter animations for statistics
  ✓ Card tilt effects on hover
  ✓ Active page highlighting
  ✓ Lazy loading support

All features work automatically. No configuration needed!

════════════════════════════════════════════════════════════════════════════════

🔍 SEO OPTIMIZATION
════════════════════════════════════════════════════════════════════════════════

Each page includes:
  ✓ Meta description tags
  ✓ Semantic HTML5 elements
  ✓ Proper heading hierarchy
  ✓ Alt text support (for images)
  ✓ Fast loading times
  ✓ Mobile-friendly design
  ✓ Internal linking structure

To improve SEO:
  1. Update meta descriptions in each HTML file (<meta name="description">)
  2. Add more internal links between pages
  3. Add alt attributes to any images you upload
  4. Submit sitemap to Google Search Console

════════════════════════════════════════════════════════════════════════════════

📊 BROWSER COMPATIBILITY
════════════════════════════════════════════════════════════════════════════════

Tested and working on:
  ✓ Chrome 90+
  ✓ Firefox 88+
  ✓ Safari 14+
  ✓ Edge 90+
  ✓ Opera 76+

Note: Internet Explorer is NOT supported (uses modern CSS features)

════════════════════════════════════════════════════════════════════════════════

🐛 TROUBLESHOOTING
════════════════════════════════════════════════════════════════════════════════

PROBLEM: Styles not loading
SOLUTION: Check that style.css is in the same folder as HTML files

PROBLEM: JavaScript not working
SOLUTION: Check that script.js is in the same folder and browser console for errors

PROBLEM: Links not working
SOLUTION: Verify all file names are correct and in the same directory

PROBLEM: Mobile menu not opening
SOLUTION: Clear browser cache and reload the page

PROBLEM: Images not showing (if added)
SOLUTION: Check image paths are correct and files exist

════════════════════════════════════════════════════════════════════════════════

📝 QUICK REFERENCE - IMPORTANT FILES & LINES
════════════════════════════════════════════════════════════════════════════════

COLORS:
  • style.css → Lines 13-25 (:root section)

GOOGLE FORM:
  • contact.html → Line 138

GITHUB LINK:
  • All HTML files → Search for "github.com"

DOWNLOAD LINK:
  • download.html → Lines 132, 261

KEYWORDS & SEO:
  • index.html → Lines 87-110 (feature cards)

SITE NAME:
  • All HTML files → Search for "SubtitleEdit"

FOOTER:
  • All HTML files → Bottom section (footer element)

════════════════════════════════════════════════════════════════════════════════

💡 TIPS & BEST PRACTICES
════════════════════════════════════════════════════════════════════════════════

1. Always backup files before making changes
2. Test changes on mobile devices
3. Keep colors consistent with your brand
4. Optimize images before adding them (use TinyPNG.com)
5. Test all links before publishing
6. Use descriptive alt text for images
7. Keep meta descriptions under 160 characters
8. Regularly update content for SEO benefits

════════════════════════════════════════════════════════════════════════════════

🚀 DEPLOYMENT OPTIONS
════════════════════════════════════════════════════════════════════════════════

To publish your website online:

OPTION 1 - GitHub Pages (Free)
  1. Create a GitHub repository
  2. Upload all files
  3. Go to Settings → Pages
  4. Select main branch → Save
  5. Your site will be live at: username.github.io/repo-name

OPTION 2 - Netlify (Free)
  1. Visit netlify.com
  2. Drag and drop your project folder
  3. Site goes live instantly
  4. Custom domain available

OPTION 3 - Vercel (Free)
  1. Visit vercel.com
  2. Import from GitHub or upload files
  3. Automatic deployment
  4. Free SSL certificate

OPTION 4 - Traditional Hosting
  1. Purchase hosting (Hostinger, Bluehost, etc.)
  2. Upload files via FTP/cPanel
  3. Configure domain

════════════════════════════════════════════════════════════════════════════════

📧 NEED HELP?
════════════════════════════════════════════════════════════════════════════════

If you need further assistance:
  • Check browser console for errors (F12)
  • Verify all file paths are correct
  • Ensure all files are in the same directory
  • Test in different browsers

════════════════════════════════════════════════════════════════════════════════

✅ CHECKLIST BEFORE GOING LIVE
════════════════════════════════════════════════════════════════════════════════

□ Updated all placeholder text
□ Changed color scheme (if desired)
□ Updated Google Form link
□ Updated GitHub repository link
□ Updated download link
□ Tested all navigation links
□ Checked mobile responsiveness
□ Tested contact form button
□ Updated meta descriptions
□ Tested in multiple browsers
□ Optimized images (if added)
□ Updated footer copyright year
□ Spell-checked all content
□ Tested all external links

════════════════════════════════════════════════════════════════════════════════

🎉 ENJOY YOUR NEW WEBSITE!
════════════════════════════════════════════════════════════════════════════════

Your professional SubtitleEdit website is ready to use!

Version: 1.0
Created: 2024
License: Free to use and modify

════════════════════════════════════════════════════════════════════════════════
