git fetch -p && git pull
rm -rf node_modules/ package-lock.json
npm i
CANON_CONST_BASE='https://api.datamexico.org/tesseract/data' node --max_old_space_size=6000 `which npm` run build
pm2 kill
pm2 restart ecosystem.config.js --update-env
pm2 save
