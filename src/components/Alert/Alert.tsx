import { VariantProps, cva } from "class-variance-authority";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";

const alertVariants = cva("w-full rounded-sm p-4 text-sm flex gap-4", {
  variants: {
    variant: {
      default: "bg-neutral-200 text-foreground",
      success: "bg-success-100 text-success-600",
      warning: "bg-warning-100 text-warning-600",
      error: "bg-warning-100 text-warning-600",
      info: "bg-main-100 text-main-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const iconMap = {
  default: Info,
  info: Info,
  success: CheckCircle,
  warning: AlertCircle,
  error: XCircle,
};

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", title, children, ...props }, ref) => {
    const Icon = iconMap[variant || "default"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <Icon className="h-5 w-5" />
        <div className="flex flex-col gap-1">
          {title && <h5 className="font-bold leading-none">{title}</h5>}
          {children}
        </div>
      </div>
    );
  },
);

Alert.displayName = "Alert";

export { Alert, alertVariants };
