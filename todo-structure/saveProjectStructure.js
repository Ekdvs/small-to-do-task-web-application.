const fs = require('fs');
const path = require('path');

// Function to recursively get folder structure
function getFolderStructure(dir, prefix = '') {
  let result = '';
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      result += `${prefix}${item}/\n`;
      result += getFolderStructure(fullPath, prefix + '  ');
    } else {
      result += `${prefix}${item}\n`;
    }
  }
  return result;
}

// Change this to your actual project folder
const projectPath = path.join(__dirname, '..'); // one folder up from script
const structure = getFolderStructure(projectPath);

// Write the structure to a file
const outputPath = path.join(__dirname, 'ProjectStructure.txt');
fs.writeFileSync(outputPath, structure);

console.log(`✅ Project structure saved to ${outputPath}`);
