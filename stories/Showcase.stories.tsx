import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../src/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/card'
import { Input } from '../src/components/input'
import { Label } from '../src/components/label'
import { Badge } from '../src/components/badge'
import { Alert, AlertDescription, AlertTitle } from '../src/components/alert'
import { Avatar, AvatarFallback, AvatarImage } from '../src/components/avatar'
import { Separator } from '../src/components/separator'
import { Skeleton } from '../src/components/skeleton'
import { Switch } from '../src/components/switch'
import { Terminal, User } from 'lucide-react'

const meta = {
  title: 'Examples/Showcase',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ComponentShowcase: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">BRK Design System</h1>
        <p className="text-muted-foreground">Componentes React reutilizáveis para os projetos BRK</p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card com form */}
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Entre com suas credenciais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">Entrar</Button>
          </CardContent>
        </Card>

        {/* Card com avatares e badges */}
        <Card>
          <CardHeader>
            <CardTitle>Usuários</CardTitle>
            <CardDescription>Lista de usuários do sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Carlos Silva</p>
                <p className="text-xs text-muted-foreground">carlos@brk.com</p>
              </div>
              <Badge>Admin</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">Maria Santos</p>
                <p className="text-xs text-muted-foreground">maria@brk.com</p>
              </div>
              <Badge variant="secondary">User</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Card com configurações */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações</CardTitle>
            <CardDescription>Preferências do sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Notificações</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="darkmode">Modo Escuro</Label>
              <Switch id="darkmode" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="analytics">Analytics</Label>
              <Switch id="analytics" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Alertas */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Alertas</h3>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Sistema Atualizado!</AlertTitle>
          <AlertDescription>
            O BRK Design System foi atualizado com novos componentes.
          </AlertDescription>
        </Alert>
      </div>

      <Separator />

      {/* Botões */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Botões</h3>
        <div className="flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <Separator />

      {/* Loading states */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Loading States</h3>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    </div>
  ),
} 