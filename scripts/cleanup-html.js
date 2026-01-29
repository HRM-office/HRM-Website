// This script deletes all .html files in the project root directory
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
fs.readdirSync(rootDir).forEach(file => {
  if (file.endsWith('.html')) {
    fs.unlinkSync(path.join(rootDir, file));
    console.log(`Deleted: ${file}`);
  }
});
