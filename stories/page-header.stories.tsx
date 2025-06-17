import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader, Button } from "../src";
import { Home, Plus, Settings, Download } from "lucide-react";

const meta: Meta<typeof PageHeader> = {
  title: "Components/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: "Título da Página",
    subtitle: "Subtítulo opcional que fornece mais contexto sobre a página",
  },
};

export const WithIcon: Story = {
  args: {
    title: "Dashboard",
    subtitle: "Visão geral do seu painel de controle",
    icon: <Home className="w-8 h-8" />,
  },
};

export const WithActions: Story = {
  args: {
    title: "Usuários",
    subtitle: "Gerencie os usuários do sistema",
    icon: <Settings className="w-8 h-8" />,
    actions: (
      <>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Exportar
        </Button>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Novo Usuário
        </Button>
      </>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Configurações",
  },
}; 