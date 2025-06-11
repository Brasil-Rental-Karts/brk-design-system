# 🔗 Integração com os Projetos BRK

Este guia explica como integrar o BRK Design System nos projetos `brk-frontend` e `brk-site`.

## 📋 Pré-requisitos

1. **GitHub Personal Access Token** com permissões `read:packages` e `write:packages`
2. **Repositório privado** configurado no GitHub
3. **Publicação inicial** do design system

## 🏗️ Setup Inicial do Design System

### 1. Primeiro Push e Configuração

```bash
# No diretório brk-design-system
git init
git add .
git commit -m "Initial design system setup"

# Criar repositório no GitHub (privado)
# Substitua pela URL real do seu repo
git remote add origin https://github.com/sua-org/brk-design-system.git
git push -u origin main
```

### 2. Publicar primeira versão

```bash
# Build inicial
npm install
npm run build

# Primeira tag/versão
git tag v1.0.0
git push origin v1.0.0

# Isso disparará o GitHub Action para publicar automaticamente
```

## 🎯 Integração no brk-frontend

### 1. Configurar .npmrc

Crie/edite o arquivo `.npmrc` na raiz do `brk-frontend`:

```
@brk:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 2. Instalar o design system

```bash
cd brk-frontend
npm install @brk/design-system
```

### 3. Atualizar imports nos componentes

**Antes (usando componentes locais):**
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
```

**Depois (usando design system):**
```tsx
import { Button, Card, CardContent, cn } from "@brk/design-system"
```

### 4. Atualizar CSS principal

No arquivo `src/index.css`, remova os estilos do shadcn/ui e importe do design system:

```css
/* Remover estas linhas: */
/* @tailwind base; */
/* @tailwind components; */
/* @tailwind utilities; */
/* ... todas as CSS variables ... */

/* Adicionar esta linha: */
@import '@brk/design-system/dist/styles.css';

/* Manter apenas estilos específicos do brk-frontend */
@import "@fontsource/rubik/400.css";
@import "@fontsource/rubik/500.css";
@import "@fontsource/rubik/600.css";
@import "@fontsource/rubik/700.css";
```

### 5. Remover componentes locais

Após migrar todos os imports, você pode remover:
- `src/components/ui/` (todos os componentes)
- `src/lib/utils.ts` (se só contém o `cn`)

### 6. Atualizar package.json

Remover dependências que agora vêm do design system:
```json
{
  "dependencies": {
    // Remover estas (já incluídas no design system):
    // "@radix-ui/react-*",
    // "class-variance-authority",
    // "clsx",
    // "tailwind-merge",
    
    // Adicionar:
    "@brk/design-system": "^1.0.0"
  }
}
```

## 🎯 Integração no brk-site

### Mesmo processo do brk-frontend

1. Configurar `.npmrc`
2. Instalar `@brk/design-system`
3. Atualizar imports
4. Atualizar CSS
5. Remover componentes locais
6. Limpar package.json

## 🔄 Workflow de Desenvolvimento

### Para mudanças no Design System:

1. **Fazer alterações** no `brk-design-system`
2. **Testar localmente** com Storybook:
   ```bash
   npm run storybook
   ```
3. **Fazer commit e tag**:
   ```bash
   git add .
   git commit -m "feat: add new component variant"
   npm version patch  # ou minor/major
   git push origin main
   git push --tags
   ```
4. **Aguardar publicação** automática via GitHub Actions
5. **Atualizar nos projetos**:
   ```bash
   # No brk-frontend e brk-site
   npm update @brk/design-system
   ```

### Para desenvolvimento com link local (opcional):

Se quiser testar mudanças antes de publicar:

```bash
# No brk-design-system
npm run build
npm link

# No brk-frontend ou brk-site
npm link @brk/design-system
```

## 🚨 Troubleshooting

### Erro de autenticação
- Verificar se GITHUB_TOKEN está configurado
- Verificar permissões do token
- Verificar se o .npmrc está correto

### Componente não encontrado
- Verificar se foi exportado no `src/index.ts`
- Verificar se foi adicionado no build

### Estilos não aplicados
- Verificar se CSS foi importado corretamente
- Verificar se Tailwind está configurado nos projetos

## 📚 Comandos Úteis

```bash
# Ver versões disponíveis
npm view @brk/design-system versions --json

# Instalar versão específica  
npm install @brk/design-system@1.2.0

# Verificar dependências
npm ls @brk/design-system
``` 