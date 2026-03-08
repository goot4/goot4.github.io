#!/usr/bin/env bash

SOURCE_DIR="$HOME/Documents/MyWorld/4-Archive/blog"
DEST_DIR="$HOME/Documents/goot4.github.io/_posts"

rsync -av --delete \
  --exclude=.DS_Store \
  "$SOURCE_DIR/" \
  "$DEST_DIR/"
