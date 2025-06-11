const fs = require('fs');
const path = require('path');

const componentsDir = './src/components/';
const storiesDir = './stories/';
const components = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

// Garantir que o diretório stories existe
if (!fs.existsSync(storiesDir)) {
  fs.mkdirSync(storiesDir, { recursive: true });
}

// Template para stories simples
function createStoryTemplate(componentName, componentFile) {
  const componentNamePascal = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  
  return `import type { Meta, StoryObj } from '@storybook/react'
import { ${componentNamePascal} } from '../src/components/${componentFile.replace('.tsx', '')}'

const meta = {
  title: 'Components/${componentNamePascal}',
  component: ${componentNamePascal},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ${componentNamePascal}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
`;
}

// Templates específicos para componentes complexos
const specificTemplates = {
  'card': `import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../src/components/card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <p>Card footer</p>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>Simple card with just content.</p>
      </CardContent>
    </Card>
  ),
}
`,

  'input': `import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../src/components/input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
}

export const WithValue: Story = {
  args: {
    placeholder: 'Digite algo...',
    defaultValue: 'Valor inicial',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Campo desabilitado',
    disabled: true,
  },
}
`,

  'badge': `import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../src/components/badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}
`,

  'alert': `import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from '../src/components/alert'
import { AlertCircle, Terminal } from 'lucide-react'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Atenção!</AlertTitle>
      <AlertDescription>
        Este é um alerta padrão para informações importantes.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Erro!</AlertTitle>
      <AlertDescription>
        Algo deu errado. Por favor, tente novamente.
      </AlertDescription>
    </Alert>
  ),
}
`
};

// Gerar stories para cada componente
components.forEach(componentFile => {
  const componentName = componentFile.replace('.tsx', '').toLowerCase();
  const storyFile = `${componentName.charAt(0).toUpperCase() + componentName.slice(1)}.stories.tsx`;
  const storyPath = path.join(storiesDir, storyFile);
  
  // Pular se já existe (como Button)
  if (fs.existsSync(storyPath)) {
    console.log(`⏭️  Skipping ${storyFile} (already exists)`);
    return;
  }
  
  // Usar template específico se disponível, senão usar template genérico
  const content = specificTemplates[componentName] || createStoryTemplate(componentName, componentFile);
  
  fs.writeFileSync(storyPath, content);
  console.log(`✅ Created ${storyFile}`);
});

console.log('\n🎉 Stories generated successfully!'); 