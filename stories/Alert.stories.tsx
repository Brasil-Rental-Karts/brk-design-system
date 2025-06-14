import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from '../src/components/alert'
import { Terminal } from 'lucide-react'
import { Button } from '../src/components/button'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info', 'accent'],
    },
    size: {
      control: 'select', 
      options: ['sm', 'default', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Informação</AlertTitle>
      <AlertDescription>
        Este é um alerta padrão para informações importantes.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertTitle>Erro!</AlertTitle>
      <AlertDescription>
        Algo deu errado. Por favor, tente novamente.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert variant="success">
      <AlertTitle>Sucesso!</AlertTitle>
      <AlertDescription>
        Operação realizada com sucesso.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTitle>Atenção!</AlertTitle>
      <AlertDescription>
        Esta ação não pode ser desfeita. Tem certeza que deseja continuar?
      </AlertDescription>
    </Alert>
  ),
}

export const Info: Story = {
  render: () => (
    <Alert variant="info">
      <AlertTitle>Informação</AlertTitle>
      <AlertDescription>
        Nova versão disponível. Atualize para ter acesso às últimas funcionalidades.
      </AlertDescription>
    </Alert>
  ),
}

export const Accent: Story = {
  render: () => (
    <Alert variant="accent">
      <AlertTitle>Novidade!</AlertTitle>
      <AlertDescription>
        Confira as novas funcionalidades que acabaram de ser lançadas.
      </AlertDescription>
    </Alert>
  ),
}

export const WithCustomIcon: Story = {
  render: () => (
    <Alert variant="info" icon={<Terminal className="w-5 h-5" />}>
      <AlertTitle>Terminal</AlertTitle>
      <AlertDescription>
        Execute o comando no terminal para continuar.
      </AlertDescription>
    </Alert>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Alert 
      variant="info"
      action={
        <div className="flex gap-2">
          <Button size="sm" variant="default">
            Atualizar Agora
          </Button>
          <Button size="sm" variant="outline">
            Mais Tarde
          </Button>
        </div>
      }
    >
      <AlertTitle>Atualização Disponível</AlertTitle>
      <AlertDescription>
        Uma nova versão está disponível. Recomendamos atualizar para ter acesso às melhorias de segurança e performance.
      </AlertDescription>
    </Alert>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert size="sm" variant="info">
        <AlertTitle>Pequeno</AlertTitle>
        <AlertDescription>Alert em tamanho pequeno.</AlertDescription>
      </Alert>
      
      <Alert size="default" variant="warning">
        <AlertTitle>Padrão</AlertTitle>
        <AlertDescription>Alert em tamanho padrão.</AlertDescription>
      </Alert>
      
      <Alert size="lg" variant="success">
        <AlertTitle>Grande</AlertTitle>
        <AlertDescription>Alert em tamanho grande.</AlertDescription>
      </Alert>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default">
        <AlertTitle>Padrão</AlertTitle>
        <AlertDescription>Alert padrão para informações gerais.</AlertDescription>
      </Alert>
      
      <Alert variant="info">
        <AlertTitle>Informação</AlertTitle>
        <AlertDescription>Alert informativo com detalhes importantes.</AlertDescription>
      </Alert>
      
      <Alert variant="success">
        <AlertTitle>Sucesso</AlertTitle>
        <AlertDescription>Operação concluída com sucesso!</AlertDescription>
      </Alert>
      
      <Alert variant="warning">
        <AlertTitle>Atenção</AlertTitle>
        <AlertDescription>Cuidado com esta ação, ela pode ter consequências.</AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>Ocorreu um erro inesperado. Tente novamente.</AlertDescription>
      </Alert>
      
      <Alert variant="accent">
        <AlertTitle>Destaque</AlertTitle>
        <AlertDescription>Informação especial que merece atenção.</AlertDescription>
      </Alert>
    </div>
  ),
}

export const OnlyDescription: Story = {
  render: () => (
    <Alert variant="success">
      <AlertDescription>
        Configurações salvas automaticamente.
      </AlertDescription>
    </Alert>
  ),
}
