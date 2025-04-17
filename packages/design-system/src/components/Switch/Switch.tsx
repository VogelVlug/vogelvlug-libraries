import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const switchVariants = cva(
  "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-default shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input",
  {
    variants: {
      variant: {
        primary:
          "data-[state=checked]:bg-fill-main data-[state=checked]:border-primary",
        accent:
          "data-[state=checked]:bg-fill-accent data-[state=checked]:border-accent",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface SwitchProps
  extends SwitchPrimitives.SwitchProps,
    VariantProps<typeof switchVariants> {
  className?: string;
}

const Switch = ({ className, variant, ...props }: SwitchProps) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ variant }), className)}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
);

export { Switch };
