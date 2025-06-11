import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ListItem } from '../src/components/list-item'
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenuPrimitive.Root>
      <NavigationMenuPrimitive.List>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Content>
            <ul className="w-[400px] p-4">
              <ListItem href="#" title="Introdução">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
            </ul>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  ),
}

export const MultipleItems: Story = {
  render: () => (
    <NavigationMenuPrimitive.Root>
      <NavigationMenuPrimitive.List>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Content>
            <ul className="w-[400px] p-4 space-y-2">
              <ListItem href="#" title="Início">
                Página inicial da aplicação
              </ListItem>
              <ListItem href="#" title="Sobre">
                Conheça mais sobre nossa empresa
              </ListItem>
              <ListItem href="#" title="Serviços">
                Descubra nossos serviços disponíveis
              </ListItem>
              <ListItem href="#" title="Contato">
                Entre em contato conosco
              </ListItem>
            </ul>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  ),
}

export const SimpleLink: Story = {
  render: () => (
    <NavigationMenuPrimitive.Root>
      <NavigationMenuPrimitive.List>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Content>
            <ul className="w-[300px] p-4">
              <ListItem href="https://nextjs.org" title="Next.js">
                Framework React para produção com SSR e SSG.
              </ListItem>
            </ul>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  ),
}

export const Debug: Story = {
  render: () => (
    <div className="border border-red-200 bg-red-50 p-4 rounded">
      <p className="mb-4 text-sm text-red-600">Debug: Testando visibilidade</p>
      
      <div className="mb-4 p-2 bg-yellow-100 border border-yellow-300 rounded">
        <p className="text-xs">Elemento simples para testar:</p>
        <div className="text-blue-600 font-bold">Se você vê isso, o container funciona</div>
      </div>

      <NavigationMenuPrimitive.Root className="border border-blue-200 bg-blue-50 p-2">
        <NavigationMenuPrimitive.List>
          <NavigationMenuPrimitive.Item>
            <NavigationMenuPrimitive.Content className="border border-green-200 bg-green-50 p-2">
              <p className="text-xs text-green-600 mb-2">NavigationMenu Context ativo</p>
              <ul className="border border-purple-200 bg-purple-50 p-2">
                <ListItem 
                  href="#" 
                  title="Título de Teste"
                  className="border border-orange-200 bg-orange-50"
                >
                  Conteúdo de teste do ListItem
                </ListItem>
              </ul>
            </NavigationMenuPrimitive.Content>
          </NavigationMenuPrimitive.Item>
        </NavigationMenuPrimitive.List>
      </NavigationMenuPrimitive.Root>
    </div>
  ),
}
