#!/bin/bash

yarn generate && 
rsync -avv --delete --exclude .nojekyll .output/public/ docs &&  
git add docs && 
git commit -m "Déploiement dist du $(date)" && 
git push