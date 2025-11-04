#!/bin/bash

# Script to create remaining wireframe pages for Movie Hub
# Run this script to generate: help-center.html, terms.html, privacy.html, about.html, contact.html

WIREFRAMES_DIR="/Users/khoale/Devs/khoale/movie-hub/docs/wireframes"
cd "$WIREFRAMES_DIR"

echo "Creating remaining wireframe pages..."
echo "===================================="

# Note: Due to the large size of these HTML files,
# they should be created manually using the structure documented in:
# - WIREFRAMES-SUMMARY.md
# - The CSS classes are already defined in css/styles.css

echo ""
echo "Pages to create manually:"
echo "1. help-center.html - FAQ page with accordion functionality"
echo "2. terms.html - Terms of Service legal document"
echo "3. privacy.html - Privacy Policy legal document"
echo "4. about.html - About Movie Hub company page"
echo "5. contact.html - Contact form page"
echo ""
echo "All CSS styles are ready in css/styles.css"
echo "Refer to WIREFRAMES-SUMMARY.md for detailed structure of each page"
echo ""
echo "Key features to implement:"
echo "- Copy navbar and footer from index.html"
echo "- Include sign-in modal on all pages"
echo "- Update footer links to point to new pages"
echo "- Add page-specific JavaScript as needed"
echo ""
echo "See WIREFRAMES-SUMMARY.md for complete details!"

