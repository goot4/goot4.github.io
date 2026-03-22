#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SOURCE_DIR="$HOME/Documents/MyWorld/4-Archive/blog"
DEST_DIR="$REPO_ROOT/_posts"

rsync -av --delete \
  --exclude=.DS_Store \
  "$SOURCE_DIR/" \
  "$DEST_DIR/"
