#!/usr/bin/env bash
set -euo pipefail

# Assets are committed under public/. Validate them locally so publishing
# remains independent of the archived ChatGPT Sites version.

assets=(
  "chemistry-lab-animation.mp4"
  "chemistry-lab-illustration.jpg"
  "downloads/0550c8e7040e6d3b3c87c12f8466cf1e.pdf"
  "downloads/15f13d14f23b3ab6273a75ec22459d88.pdf"
  "downloads/220408.pdf"
  "downloads/32822be2b229de9e1934b2c4f5d321eb.pdf"
  "downloads/6d4a0ad2383b745cd3aaaf65b1f52467.pdf"
  "downloads/6dfb31d4e36a3141b63597e5901a1657-1.pdf"
  "downloads/BSES-1.pdf"
  "downloads/f82382233dfde0c2000b84f9c4043ef9.pdf"
  "downloads/kaken.nii_.ac_.jp_18K18218seika.pdf"
  "favicon.svg"
  "file.svg"
  "globe.svg"
  "lab-character-duo.png"
  "lab-character-fox.png"
  "lab-logo.png"
  "microbe-header-left.png"
  "microbe-header-right.png"
  "research-images/cellulosome-illustration.jpg"
  "research-images/ecoli-growth.gif"
  "research-images/fluorescence-channel-1.jpg"
  "research-images/fluorescence-channel-3.jpg"
  "research-images/fluorescence-overlay.jpg"
  "research-images/microbiome-research.jpg"
  "research-images/microscopy-cell.jpg"
  "research-images/microscopy-vesicle.jpg"
  "shunsuke-ichikawa.jpg"
  "window.svg"
)

missing_assets=0
for asset in "${assets[@]}"; do
  if [[ ! -s "public/$asset" ]]; then
    printf 'Missing or empty website asset: %s\n' "public/$asset" >&2
    missing_assets=1
  fi
done
exit "$missing_assets"
