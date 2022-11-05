#!/bin/bash

yarn generate && 
rsync -avv --delete --exclude .nojekyll --exclude CNAME .output/public/ docs &&  
git add . && 
git commit -m "Déploiement dist du $(date)" && 
git push