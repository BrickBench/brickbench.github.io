const fs = require('fs');
const path = require('path');

const ssDir = path.join(__dirname, '..', 'public/images/screenshots');
const filenames = fs.readdirSync(ssDir);
const dataObject = {screenshotFilenames: filenames};

const ssDataFile = path.join(__dirname, '..', 'src/pages/screenshots/data.json');
fs.writeFile(ssDataFile, JSON.stringify(dataObject), (err) => {
  if (err) return console.log('Error writting to', ssDataFile, ':', err);
  console.log('Write to', ssDataFile, 'was successful');
});
