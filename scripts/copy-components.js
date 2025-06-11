const fs = require('fs');
const path = require('path');

// Lista de componentes para copiar
const components = [
  'alert.tsx',
  'avatar.tsx', 
  'badge.tsx',
  'button.tsx',
  'calendar.tsx',
  'card.tsx',
  'checkbox.tsx',
  'combobox.tsx',
  'dialog.tsx',
  'dropdown-menu.tsx',
  'empty-state.tsx',
  'form.tsx',
  'input.tsx',
  'label.tsx',
  'list-item.tsx',
  'pagination.tsx',
  'popover.tsx',
  'select.tsx',
  'separator.tsx',
  'sheet.tsx',
  'skeleton.tsx',
  'switch.tsx',
  'table.tsx',
  'tabs.tsx',
  'textarea.tsx',
  'tooltip.tsx'
];

const sourcePath = '../../brk-frontend/src/components/ui/';
const destPath = './src/components/';

function copyAndTransformComponent(componentFile) {
  const sourceFile = path.join(__dirname, sourcePath, componentFile);
  const destFile = path.join(__dirname, destPath, componentFile.replace('.tsx', '.tsx'));
  
  if (!fs.existsSync(sourceFile)) {
    console.log(`❌ Component ${componentFile} not found`);
    return;
  }

  let content = fs.readFileSync(sourceFile, 'utf8');
  
  // Transformar imports
  content = content.replace(/from "@\/lib\/utils"/g, 'from "../utils/cn"');
  content = content.replace(/import { cn } from "@\/lib\/utils"/g, 'import { cn } from "../utils/cn"');
  
  fs.writeFileSync(destFile, content);
  console.log(`✅ Copied ${componentFile}`);
}

// Criar diretório se não existir
if (!fs.existsSync(path.join(__dirname, destPath))) {
  fs.mkdirSync(path.join(__dirname, destPath), { recursive: true });
}

// Copiar todos os componentes
components.forEach(copyAndTransformComponent);

console.log('\n🎉 All components copied successfully!'); 