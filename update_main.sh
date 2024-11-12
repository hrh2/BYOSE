#!/bin/bash

# Fetch the latest changes from upstream
git fetch upstream

# Check out the main branch
git checkout main

# Merge the latest changes from upstream/main into main
git merge upstream/main

# Push the updates to the origin
git push origin main
