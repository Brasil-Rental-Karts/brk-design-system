import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { 
  X, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  AlertTriangle, 
  Zap 
} from "lucide-react";

import { cn } from "../utils/cn";
import { Button } from "./button";

const alertVariants = cva(
  "relative w-full rounded-2xl border-2 text-sm transition-all duration-200 animate-in fade-in-0 slide-in-from-top-1",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        destructive:
          "bg-red-50 text-red-900 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-800/50",
        success:
          "bg-green-50 text-green-900 border-green-200 dark:bg-green-950/30 dark:text-green-300 dark:border-green-800/50",
        warning:
          "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800/50",
        info:
          "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800/50",
        accent:
          "bg-primary/10 text-foreground border-primary/20 dark:bg-primary/20",
      },
      size: {
        sm: "px-3 py-2",
        default: "px-4 py-3", 
        lg: "px-6 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconVariants = cva(
  "flex-shrink-0",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        destructive: "text-red-500 dark:text-red-400",
        success: "text-green-500 dark:text-green-400",
        warning: "text-amber-500 dark:text-amber-400", 
        info: "text-blue-500 dark:text-blue-400",
        accent: "text-primary",
      },
      size: {
        sm: "w-4 h-4",
        default: "w-5 h-5",
        lg: "w-6 h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  onClose?: () => void;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  dismissible?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { 
      className, 
      variant, 
      size, 
      onClose, 
      action, 
      icon, 
      dismissible,
      children, 
      ...props 
    },
    ref
  ) => {
    const getDefaultIcon = () => {
      switch (variant) {
        case "destructive":
          return <AlertCircle className={cn(iconVariants({ variant, size }))} />;
        case "success":
          return <CheckCircle className={cn(iconVariants({ variant, size }))} />;
        case "warning":
          return <AlertTriangle className={cn(iconVariants({ variant, size }))} />;
        case "info":
          return <Info className={cn(iconVariants({ variant, size }))} />;
        case "accent":
          return <Zap className={cn(iconVariants({ variant, size }))} />;
        default:
          return <AlertCircle className={cn(iconVariants({ variant, size }))} />;
      }
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, size }), className)}
        {...props}
      >
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="mt-0.5">
            {icon || getDefaultIcon()}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {children}
            {action && (
              <div className="mt-3 flex flex-col sm:flex-row gap-2">
                {action}
              </div>
            )}
          </div>

          {/* Close button */}
          {(dismissible || onClose) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className={cn(
                "h-8 w-8 p-0 rounded-md opacity-70 hover:opacity-100 transition-opacity",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                "dark:hover:bg-background/20"
              )}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar alerta</span>
            </Button>
          )}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-semibold leading-none tracking-tight mb-1",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm leading-relaxed opacity-90 [&_p]:leading-relaxed",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
