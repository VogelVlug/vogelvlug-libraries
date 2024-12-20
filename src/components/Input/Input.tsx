import * as React from "react";

import { cn } from "../../lib/utils";

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "prefix" | "suffix"> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, suffix, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background dark:focus-within:ring-neutral-600">
        {prefix && (
          <div className="pointer-events-none flex h-10 items-center pl-3 text-subtitle">
            {prefix}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "h-10 w-full bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground placeholder:opacity-60 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
        />
        {suffix && (
          <div className="pointer-events-none flex h-10 items-center pr-3 text-subtitle">
            {suffix}
          </div>
        )}
      </div>
    );
  },
);

export { Input };
