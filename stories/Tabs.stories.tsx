import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../src/components/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/card'
import { Button } from '../src/components/button'
import { Input } from '../src/components/input'
import { Label } from '../src/components/label'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Conta</CardTitle>
            <CardDescription>
              Faça alterações em sua conta aqui. Clique em salvar quando terminar.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Nome de usuário</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Senha</CardTitle>
            <CardDescription>
              Altere sua senha aqui. Após salvar, você será desconectado.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Senha atual</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Nova senha</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const Simple: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[300px]">
      <TabsList>
        <TabsTrigger value="tab1">Primeira</TabsTrigger>
        <TabsTrigger value="tab2">Segunda</TabsTrigger>
        <TabsTrigger value="tab3">Terceira</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <p>Conteúdo da primeira aba.</p>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <p>Conteúdo da segunda aba.</p>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <p>Conteúdo da terceira aba.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" orientation="vertical" className="w-[500px] flex">
      <TabsList className="flex flex-col h-fit">
        <TabsTrigger value="general" className="w-full justify-start">Geral</TabsTrigger>
        <TabsTrigger value="security" className="w-full justify-start">Segurança</TabsTrigger>
        <TabsTrigger value="notifications" className="w-full justify-start">Notificações</TabsTrigger>
        <TabsTrigger value="advanced" className="w-full justify-start">Avançado</TabsTrigger>
      </TabsList>
      <div className="flex-1 ml-4">
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Gerais</CardTitle>
              <CardDescription>Configurações básicas da aplicação</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Aqui você pode alterar as configurações gerais.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>Configurações de segurança e privacidade</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Gerencie suas configurações de segurança.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notificações</CardTitle>
              <CardDescription>Como você gostaria de ser notificado</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Configure suas preferências de notificação.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Avançadas</CardTitle>
              <CardDescription>Configurações para usuários experientes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Configurações avançadas do sistema.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
}
