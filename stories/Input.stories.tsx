import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../src/components/input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
}

export const WithValue: Story = {
  args: {
    placeholder: 'Digite algo...',
    defaultValue: 'Valor inicial',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Campo desabilitado',
    disabled: true,
  },
}
