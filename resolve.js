const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Match <<<<<<< HEAD, then non-greedy capture, then =======, then non-greedy match until >>>>>>> [hash]
    const headRegex = /<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n[\s\S]*?>>>>>>> [0-9a-f]+\r?\n?/g;

    if (headRegex.test(content)) {
        console.log('Resolving: ' + filePath);
        content = content.replace(headRegex, '$1');
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'build') continue;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (stat.isFile() && /\.(js|jsx|css|html)$/.test(file)) {
            processFile(fullPath);
        }
    }
}

walkDir(__dirname);
