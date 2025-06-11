import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Separator } from '../src/components/separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="space-y-1">
      <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
      <p className="text-sm text-muted-foreground">
        Uma biblioteca de componentes React de baixo nível e sem estilo.
      </p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Documentos</div>
        <Separator orientation="vertical" />
        <div>Código</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-xs space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Seção 1</h3>
        <p className="text-sm text-muted-foreground">Conteúdo da primeira seção</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold">Seção 2</h3>
        <p className="text-sm text-muted-foreground">Conteúdo da segunda seção</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold">Seção 3</h3>
        <p className="text-sm text-muted-foreground">Conteúdo da terceira seção</p>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-32 items-center space-x-4">
      <div className="text-center">
        <h4 className="text-sm font-medium">Coluna 1</h4>
        <p className="text-xs text-muted-foreground">Conteúdo</p>
      </div>
      <Separator orientation="vertical" />
      <div className="text-center">
        <h4 className="text-sm font-medium">Coluna 2</h4>
        <p className="text-xs text-muted-foreground">Conteúdo</p>
      </div>
      <Separator orientation="vertical" />
      <div className="text-center">
        <h4 className="text-sm font-medium">Coluna 3</h4>
        <p className="text-xs text-muted-foreground">Conteúdo</p>
      </div>
    </div>
  ),
}
