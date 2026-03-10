#!/bin/bash
# MoodSketch deploy — targets the correct Vercel project (moodsketch-site)
# Requires VERCEL_TOKEN env var. Add to ~/.bashrc:
#   export VERCEL_TOKEN="your-token-here"
set -e
cd "$(dirname "$0")/.."

if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ VERCEL_TOKEN not set. Add it to ~/.bashrc"
  exit 1
fi

echo "🔨 Building..."
npx vercel build --prod --token "$VERCEL_TOKEN" --yes

echo "🚀 Deploying to moodsketch-site (production)..."
npx vercel deploy --prebuilt --prod --token "$VERCEL_TOKEN" --yes

echo "✅ Live at https://moodsketch.app"
