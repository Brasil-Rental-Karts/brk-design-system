import type { Meta, StoryObj } from '@storybook/react'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '../src/components/dialog'
import { Button } from '../src/components/button'
import { Input } from '../src/components/input'
import { Label } from '../src/components/label'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Abrir Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>
            Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Salvar alterações</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Simple: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Confirmar Ação</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tem certeza?</DialogTitle>
          <DialogDescription>
            Esta ação não pode ser desfeita.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancelar</Button>
          <Button variant="destructive">Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
