import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

const wrapperVariants = cva("outline outline-8 rounded-full p-3", {
  variants: {
    variant: {
      main: "outline-main-100 bg-main-200",
      accent: "outline-accent-100 bg-accent-200",
    },
  },
});

const iconVariants = cva("", {
  variants: {
    variant: {
      main: "text-color-main",
      accent: "text-color-accent",
    },
  },
});

interface CircularIconProps extends VariantProps<typeof wrapperVariants> {
  variant?: "main" | "accent";
  Icon: LucideIcon;
}

export const CircularIcon: React.FC<CircularIconProps> = ({
  Icon,
  variant = "accent",
}) => {
  const variantClass = wrapperVariants({ variant });

  return (
    <div className={cn(variantClass)}>
      <Icon className={iconVariants({ variant })} />
    </div>
  );
};
