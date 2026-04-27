const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
let totalReplacements = 0;

const replacements = [
  // Fix text-slate-200 (invisible in light mode) -> visible in both modes
  { regex: /text-slate-200/g, replacement: 'text-gray-900 dark:text-gray-200' },
  // Fix text-slate-100 -> visible in both modes
  { regex: /text-slate-100/g, replacement: 'text-gray-900 dark:text-gray-100' },
  // Fix text-slate-400 in labels/placeholders (these are ok as muted text but let's make them slightly darker in light mode)
  // Actually text-slate-400 is fine for muted text. Skip.
  
  // Fix remaining bg-gradient patterns that the first script missed
  { regex: /bg-gradient-to-br\s+from-primary-500\/20\s+to-accent-500\/20/g, replacement: 'bg-primary-100 dark:bg-primary-900/20' },
];

function processFile(fullPath) {
  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;
  
  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    const count = (originalContent.match(/text-slate-200|text-slate-100/g) || []).length;
    totalReplacements += count;
    console.log(`Fixed ${count} text visibility issues in ${path.relative(srcDir, fullPath)}`);
  }
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) && !fullPath.includes('node_modules')) {
      processFile(fullPath);
    }
  }
}

processDirectory(srcDir);
console.log(`\nDone! Fixed ${totalReplacements} total text visibility issues.`);
