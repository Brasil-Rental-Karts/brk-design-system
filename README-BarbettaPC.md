# BRK Design System

Sistema de design privado para os projetos BRK (Brasil Rental Kart).

## 📦 Instalação

### 1. Configurar autenticação GitHub Packages

Crie um Personal Access Token no GitHub com permissão `read:packages`:
1. Vá em GitHub → Settings → Developer settings → Personal access tokens
2. Clique em "Generate new token"
3. Selecione `read:packages` e `write:packages`
4. Copie o token

### 2. Configurar .npmrc local

Crie um arquivo `.npmrc` na raiz do seu projeto:

```
@brk:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_GITHUB_TOKEN_AQUI
```

Ou configure a variável de ambiente:
```bash
export GITHUB_TOKEN=seu_token_aqui
```

### 3. Instalar o pacote

```bash
npm install @brk/design-system
```

## 🚀 Uso

### Importar estilos base

No seu arquivo CSS principal (normalmente `src/index.css` ou `src/main.css`):

```css
@import '@brk/design-system/dist/styles.css';
```

### Usar componentes

```tsx
import { Button, Card, CardContent, Input } from '@brk/design-system'

function App() {
  return (
    <Card>
      <CardContent>
        <h1>Olá, BRK Design System!</h1>
        <Input placeholder="Digite algo..." />
        <Button>Clique aqui</Button>
      </CardContent>
    </Card>
  )
}
```

## 📋 Componentes Disponíveis

- **Alert** - Alertas e notificações
- **Avatar** - Imagens de perfil
- **Badge** - Etiquetas e status
- **Button** - Botões com várias variações
- **Calendar** - Seletor de datas
- **Card** - Containers de conteúdo
- **Checkbox** - Caixas de seleção
- **Combobox** - Seleção com busca
- **Dialog** - Modais e diálogos
- **DropdownMenu** - Menus dropdown
- **Form** - Formulários e validação
- **Input** - Campos de texto
- **Label** - Rótulos
- **Pagination** - Paginação
- **Popover** - Popovers
- **Select** - Seletores
- **Separator** - Separadores
- **Sheet** - Painéis laterais
- **Skeleton** - Loading states
- **Switch** - Interruptores
- **Table** - Tabelas
- **Tabs** - Abas
- **Textarea** - Áreas de texto
- **Tooltip** - Dicas de ferramentas

## 🎨 Personalização

O design system usa CSS variables para temas. Você pode personalizar as cores editando as variáveis CSS:

```css
:root {
  --primary: 25 91% 54%;
  --secondary: 0 0% 96.1%;
  /* ... outras variáveis */
}
```

## 🔧 Desenvolvimento

### Configurar ambiente local

```bash
# Clonar o repositório
git clone https://github.com/sua-org/brk-design-system.git
cd brk-design-system

# Instalar dependências
npm install

# Executar Storybook para desenvolvimento
npm run storybook

# Build para produção
npm run build
```

### Publicar nova versão

```bash
# Atualizar versão
npm version patch # ou minor/major

# Build
npm run build

# Publicar
npm publish
```

## 📖 Storybook

Para visualizar todos os componentes e suas variações:

```bash
npm run storybook
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 License

Este projeto é privado e restrito aos projetos BRK.