import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from '../src/components/empty-state'

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <EmptyState
      title="Nenhum item encontrado"
      description="Não há itens para exibir no momento."
    />
  ),
}
