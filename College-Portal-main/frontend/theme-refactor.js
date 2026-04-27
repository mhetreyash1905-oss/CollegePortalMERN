const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // 1. Replace primary gradients with solid primary color
  { regex: /bg-gradient-to-[a-z]+\s+from-primary-[0-9]+\s+(via-[a-z0-9\-]+\s+)?to-[a-z0-9\-]+/g, replacement: 'bg-primary-600' },
  // 2. Replace red/pink gradients (logout buttons)
  { regex: /bg-gradient-to-[a-z]+\s+from-red-[0-9]+\s+to-pink-[0-9]+/g, replacement: 'bg-red-500' },
  { regex: /hover:from-red-[0-9]+\s+hover:to-pink-[0-9]+/g, replacement: 'hover:bg-red-600' },
  // 3. Replace any other generic gradients with primary
  { regex: /bg-gradient-to-[a-z]+\s+from-[a-z0-9\-]+\s+(via-[a-z0-9\-]+\s+)?to-[a-z0-9\-]+/g, replacement: 'bg-primary-600' },
  // 4. Remove hover gradients
  { regex: /hover:from-[a-z0-9\-]+\s+hover:to-[a-z0-9\-]+/g, replacement: 'hover:bg-primary-700' },
  // 5. Replace text-white in LandingPage that might be invisible
  // LandingPage is special. Instead of doing a global text-white replacement which breaks buttons, 
  // we will handle invisible text specifically where known. But wait, we can fix "text-white" inside headings globally?
  // Let's replace `text-white` with `text-gray-900 dark:text-white` specifically on <h1..6>, <p>, <span>
  // Wait, no, regexing HTML tags is tricky in JSX. Let's do a safe targeted fix.
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated gradients in ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Refactoring gradients complete.');
