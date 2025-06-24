import * as React from "react";
import { cn } from "../utils/cn";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  icon,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Conteúdo à esquerda */}
        <div className="flex-1 min-w-0">
          <h1 className="font-heading truncate text-2xl md:text-4xl mb-2 flex gap-3 items-center">
            {icon}
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Ações à direita */}
        {actions && (
          <div className="flex flex-wrap gap-2 md:flex-nowrap md:items-center">
            {actions}
          </div>
        )}
      </div>
  );
} 