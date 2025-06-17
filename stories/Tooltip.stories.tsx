import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../src/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../src/components/tooltip"

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex min-h-[400px] items-center justify-center">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Posição do tooltip em relação ao trigger",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alinhamento do tooltip em relação ao trigger",
    },
    sideOffset: {
      control: "number",
      description: "Distância entre o tooltip e o trigger",
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent {...args}>
        <p>Tooltip padrão</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Top: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top</Button>
      </TooltipTrigger>
      <TooltipContent side="top" {...args}>
        <p>Tooltip no topo</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Bottom: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" {...args}>
        <p>Tooltip embaixo</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Left: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Left</Button>
      </TooltipTrigger>
      <TooltipContent side="left" {...args}>
        <p>Tooltip à esquerda</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Right: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Right</Button>
      </TooltipTrigger>
      <TooltipContent side="right" {...args}>
        <p>Tooltip à direita</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const AlignStart: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Start</Button>
      </TooltipTrigger>
      <TooltipContent side="top" align="start" {...args}>
        <p>Alinhado ao início</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const AlignCenter: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Center</Button>
      </TooltipTrigger>
      <TooltipContent side="top" align="center" {...args}>
        <p>Alinhado ao centro</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const AlignEnd: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">End</Button>
      </TooltipTrigger>
      <TooltipContent side="top" align="end" {...args}>
        <p>Alinhado ao fim</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithOffset: Story = {
  render: (args) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Offset Maior</Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={12} {...args}>
        <p>Offset maior (12px)</p>
      </TooltipContent>
    </Tooltip>
  ),
} 