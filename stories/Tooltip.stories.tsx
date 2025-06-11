import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '../src/components/tooltip'
import { Button } from '../src/components/button'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Passe o mouse aqui</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Esta é uma dica de ferramenta!</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="outline">
          ?
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Clique para obter ajuda</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Delayed: Story = {
  render: () => (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <Button>Tooltip com delay de 1s</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Este tooltip aparece após 1 segundo</p>
      </TooltipContent>
    </Tooltip>
  ),
}
