#!/usr/bin/env bash
# Builds the whole Netlify site into dist/:
#   holding/        -> dist/          (aimpetus.ai root)
#   betaN/ (Astro)  -> dist/betaN/    (only betas that have a package.json)
# Run from anywhere: bash scripts/build-all.sh
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$ROOT/dist"

rm -rf "$DIST"
mkdir -p "$DIST"

# 1. Holding page (plain HTML/CSS, no build step)
if [ -f "$ROOT/holding/index.html" ]; then
  echo "==> Copying holding/ to dist/"
  cp -R "$ROOT/holding/." "$DIST/"
else
  echo "==> holding/index.html not found yet – dist/ root will be empty"
fi

# 2. Betas (each is a self-contained Astro project with base '/betaN/')
for n in 1 2 3; do
  dir="$ROOT/beta$n"
  if [ ! -f "$dir/package.json" ]; then
    echo "==> Skipping beta$n (no package.json yet)"
    continue
  fi

  echo "==> Building beta$n"
  (
    cd "$dir"
    if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; else npm install --no-audit --no-fund; fi
    rm -rf dist
    npm run build
  )

  if [ ! -d "$dir/dist" ]; then
    echo "!! beta$n build produced no dist/ folder" >&2
    exit 1
  fi
  mkdir -p "$DIST/beta$n"
  cp -R "$dir/dist/." "$DIST/beta$n/"
done

# Strip repo/OS clutter from the publish folder
find "$DIST" \( -name '.gitkeep' -o -name '.DS_Store' \) -delete

echo "==> Done. Contents of dist/:"
ls -1 "$DIST"
