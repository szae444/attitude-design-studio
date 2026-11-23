#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch (GitHub Pages preview).
set -euo pipefail
cd "$(dirname "$0")/.."
REMOTE=$(git remote get-url origin)
npm run build
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git push -qf "$REMOTE" gh-pages
rm -rf .git
echo "Deployed to gh-pages."
