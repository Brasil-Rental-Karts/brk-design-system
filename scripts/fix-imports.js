const fs = require('fs');
const path = require('path');

const componentsDir = './src/components/';
const components = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remover "use client" directives
  content = content.replace(/^"use client";\s*\n/gm, '');
  
  // Corrigir imports de @/components/ui para paths relativos
  content = content.replace(/from "@\/components\/ui\/([^"]+)"/g, 'from "./$1"');
  content = content.replace(/import { ([^}]+) } from "@\/components\/ui\/([^"]+)"/g, 'import { $1 } from "./$2"');
  
  // Corrigir imports de @/lib/utils
  content = content.replace(/from "@\/lib\/utils"/g, 'from "../utils/cn"');
  content = content.replace(/import { cn } from "@\/lib\/utils"/g, 'import { cn } from "../utils/cn"');
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed imports in ${path.basename(filePath)}`);
}

// Corrigir todos os componentes
components.forEach(componentFile => {
  const fullPath = path.join(componentsDir, componentFile);
  fixImports(fullPath);
});

console.log('\n🎉 All imports fixed!'); 