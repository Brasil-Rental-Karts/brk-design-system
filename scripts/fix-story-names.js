const fs = require('fs');
const path = require('path');

const storiesDir = './stories/';
const storyFiles = fs.readdirSync(storiesDir).filter(file => file.endsWith('.stories.tsx'));

const kebabToPascal = (str) => {
  return str.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
};

storyFiles.forEach(storyFile => {
  const filePath = path.join(storiesDir, storyFile);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extrair nome do componente do nome do arquivo
  const componentName = storyFile.replace('.stories.tsx', '');
  
  // Se não contém hífen, pular
  if (!componentName.includes('-')) {
    return;
  }
  
  const pascalName = kebabToPascal(componentName);
  
  // Substituir imports problemáticos
  const kebabImportRegex = new RegExp(`import\\s*{\\s*${componentName.replace('-', '-')}\\s*}`, 'g');
  if (content.match(kebabImportRegex)) {
    content = content.replace(
      kebabImportRegex, 
      `import { ${pascalName} }`
    );
    
    // Corrigir todas as referências no arquivo
    content = content.replace(new RegExp(componentName.replace('-', '-'), 'g'), pascalName);
    content = content.replace(new RegExp(`Components/${componentName}`, 'g'), `Components/${pascalName}`);
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${storyFile}: ${componentName} → ${pascalName}`);
  }
});

console.log('\n🎉 Story names fixed!'); 