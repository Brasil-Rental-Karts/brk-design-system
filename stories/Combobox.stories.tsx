import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Combobox } from '../src/components/combobox'

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "wordpress", label: "WordPress" },
  { value: "express.js", label: "Express.js" },
  { value: "nest.js", label: "Nest.js" },
]

const countries = [
  { value: "br", label: "Brasil" },
  { value: "us", label: "Estados Unidos" },
  { value: "ca", label: "Canadá" },
  { value: "uk", label: "Reino Unido" },
  { value: "de", label: "Alemanha" },
  { value: "fr", label: "França" },
  { value: "es", label: "Espanha" },
  { value: "it", label: "Itália" },
  { value: "jp", label: "Japão" },
  { value: "au", label: "Austrália" },
]

export const Default: Story = {
  args: {} as any,
  render: () => {
    const [value, setValue] = useState("")
    
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Selecione um framework..."
        searchPlaceholder="Buscar framework..."
        className="w-[200px]"
      />
    )
  },
}

export const Countries: Story = {
  args: {} as any,
  render: () => {
    const [value, setValue] = useState("")
    
    return (
      <Combobox
        options={countries}
        value={value}
        onValueChange={setValue}
        placeholder="Selecione um país..."
        searchPlaceholder="Buscar país..."
        emptyText="Nenhum país encontrado."
        className="w-[200px]"
      />
    )
  },
}

export const Disabled: Story = {
  args: {} as any,
  render: () => (
    <Combobox
      options={frameworks}
      placeholder="Combobox desabilitado"
      disabled
      className="w-[200px]"
    />
  ),
}

export const Preselected: Story = {
  args: {} as any,
  render: () => {
    const [value, setValue] = useState("next.js")
    
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Selecione um framework..."
        searchPlaceholder="Buscar framework..."
        className="w-[200px]"
      />
    )
  },
}
