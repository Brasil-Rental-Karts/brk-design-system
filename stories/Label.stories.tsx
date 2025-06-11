import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Label } from '../src/components/label'
import { Input } from '../src/components/input'
import { Checkbox } from '../src/components/checkbox'
import { Textarea } from '../src/components/textarea'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Digite seu email" />
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="name" className="flex items-center gap-1">
        Nome completo
        <span className="text-red-500">*</span>
      </Label>
      <Input id="name" placeholder="Seu nome completo" />
    </div>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="message">Mensagem</Label>
      <Textarea 
        id="message" 
        placeholder="Digite sua mensagem aqui..."
        rows={4}
      />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label 
        htmlFor="terms" 
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Aceitar termos e condições
      </Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="disabled" className="opacity-50">
        Campo desabilitado
      </Label>
      <Input id="disabled" placeholder="Campo desabilitado" disabled />
    </div>
  ),
}
