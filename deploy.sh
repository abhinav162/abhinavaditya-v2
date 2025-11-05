#!/bin/bash

# Take latest pull
git pull origin main

# Check if there are any changes in packages.json or package-lock.json
if [ "$(git status --porcelain yarn.lock)" ]; then
  # If there are changes, install dependencies again
  npm install --legacy-peer-deps
fi

# Build the project
npm run build

# Check if tmux session exists, and create it if not.
if ! tmux has-session -t portfolio; then
    echo "Creating new tmux session"
    tmux new-session -d -s portfolio 'npm run serve'
else
    echo "Session already exists, serving new build"
    tmux kill-session -t portfolio
    tmux new-session -d -s portfolio 'npm run serve'
fi