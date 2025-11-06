#!/bin/bash

# Tailwind CSS v4 Migration Script for Movie Hub Wireframes
# This script updates all HTML files to use Tailwind CSS v4 CDN

WIREFRAMES_DIR="/Users/khoale/Devs/khoale/movie-hub/docs/wireframes"
TAILWIND_HEAD='<!-- Tailwind CSS v4 -->
    <script src="https://cdn.jsdelivr.net/npm/tailwindcss@4.1.16/dist/lib.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@4.1.16/index.min.css" rel="stylesheet">'

# Function to update a single file
update_file() {
    local file="$1"
    local filename=$(basename "$file")

    echo "Processing: $filename"

    # Backup original
    cp "$file" "${file}.backup"

    # 1. Replace CSS links with Tailwind
    # Remove old CSS links
    sed -i '' '/<link rel="stylesheet" href="css\/styles\.css">/d' "$file"
    sed -i '' '/<link rel="stylesheet" href="css\/auth\.css">/d' "$file"

    # Add Tailwind CSS after Google Fonts (before closing </head>)
    sed -i '' "/<\/head>/i\\
    $TAILWIND_HEAD
    " "$file"

    # 2. Update body tag
    sed -i '' 's/<body>/<body class="bg-[#141414] text-white overflow-x-hidden">/g' "$file"
    sed -i '' 's/<body class="auth-body">/<body class="bg-[#141414] text-white overflow-x-hidden">/g' "$file"

    # 3. Update navbar classes
    sed -i '' 's/class="navbar"/class="fixed top-0 left-0 right-0 h-[70px] bg-black\/95 backdrop-blur-md z-[1000] transition-all duration-300"/g' "$file"
    sed -i '' 's/class="nav-container"/class="max-w-[1920px] mx-auto h-full px-[50px] flex justify-between items-center"/g' "$file"
    sed -i '' 's/class="nav-left"/class="flex items-center gap-[40px]"/g' "$file"
    sed -i '' 's/class="nav-right"/class="flex items-center gap-4"/g' "$file"
    sed -i '' 's/class="logo"/class="flex items-center gap-3 font-bold text-2xl text-[#E50914]"/g' "$file"
    sed -i '' 's/class="logo-text"/class="tracking-[-0.5px]"/g' "$file"
    sed -i '' 's/class="nav-links"/class="flex gap-6 items-center"/g' "$file"

    # 4. Update icon buttons
    sed -i '' 's/class="icon-btn"/class="inline-flex items-center justify-center w-10 h-10 text-white hover:bg-white\/10 rounded transition-colors duration-200"/g' "$file"
    sed -i '' 's/class="icon-btn [^"]*"/class="inline-flex items-center justify-center w-10 h-10 text-white hover:bg-white\/10 rounded transition-colors duration-200"/g' "$file"

    # 5. Update footer classes
    sed -i '' 's/class="footer"/class="bg-[#1F1F1F] border-t border-gray-800"/g' "$file"
    sed -i '' 's/class="footer-container"/class="max-w-[1920px] mx-auto px-[50px] py-12"/g' "$file"

    # 6. Update form classes (for auth pages)
    sed -i '' 's/class="form-input"/class="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:border-[#E50914] focus:outline-none transition-colors"/g' "$file"
    sed -i '' 's/class="form-label"/class="block text-sm font-medium text-white mb-2"/g' "$file"
    sed -i '' 's/class="form-group"/class="mb-4"/g' "$file"

    # 7. Update button classes
    sed -i '' 's/class="btn btn-primary"/class="inline-flex items-center gap-3 bg-[#E50914] hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition-colors duration-200"/g' "$file"
    sed -i '' 's/class="btn btn-secondary"/class="inline-flex items-center gap-3 bg-white\/20 hover:bg-white\/30 text-white px-6 py-3 rounded font-semibold transition-colors duration-200 backdrop-blur-sm border border-white\/30"/g' "$file"
    sed -i '' 's/class="btn-auth btn-primary"/class="w-full bg-[#E50914] hover:bg-red-700 text-white font-semibold py-3 rounded transition-colors duration-200"/g' "$file"

    # 8. Update main/content area
    sed -i '' 's/class="content"/class="bg-[#141414]"/g' "$file"
    sed -i '' 's/class="auth-main"/class="min-h-screen bg-[#141414] flex items-center justify-center pt-[70px]"/g' "$file"

    echo "✓ $filename updated"
}

echo "=== Movie Hub Tailwind CSS v4 Migration ==="
echo "Converting wireframe HTML files..."
echo ""

# Process all HTML files
for file in "$WIREFRAMES_DIR"/*.html; do
    if [ -f "$file" ]; then
        update_file "$file"
    fi
done

echo ""
echo "=== Migration Summary ==="
echo "✓ All CSS links replaced with Tailwind v4"
echo "✓ Navbar styling converted"
echo "✓ Button classes updated"
echo "✓ Form element styling updated"
echo "✓ Layout classes converted"
echo ""
echo "Backups created with .backup extension"
echo "Manual review recommended for complex components"
echo ""
echo "TODO: Update remaining custom class conversions (movie-card, hero, modals, etc.)"
