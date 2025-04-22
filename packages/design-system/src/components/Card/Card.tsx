import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { StaticImageData } from "../types";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "../../provider/DesignSystemProvider";

const cardVariants = cva(
  "bg-card text-card-foreground border-default flex flex-col gap-6 border shadow-sm [--card-radius:0.5rem] rounded-[var(--card-radius)] transition-all duration-200",
  {
    variants: {
      variant: {
        default: "py-6",
        withImage: "pb-6",
      },
      hoverVariant: {
        elevate: "hover:shadow-xl hover:shadow-base-black/15 hover:scale-[1.02]",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hoverVariant: "none",
    },
  },
);

const cardHeaderVariants = cva(
  "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
  {
    variants: {
      variant: {
        default: "px-6",
        withImage: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, hoverVariant, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, hoverVariant }), className)}
      {...props}
    />
  );
}

interface CardHeaderProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardHeaderVariants> {}

function CardHeader({ className, variant, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(cardHeaderVariants({ variant }), className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

interface CardImageProps extends React.ComponentProps<"div"> {
  src: string | StaticImageData;
  alt: string;
  imageClassName?: string;
}

function CardImage({
  className,
  src,
  alt,
  imageClassName,
  ...props
}: CardImageProps) {
  const { ImageElement } = useDesignSystem();

  return (
    <div
      data-slot="card-image"
      className={cn(
        "relative h-48 w-full overflow-hidden rounded-t-[var(--card-radius)]",
        className,
      )}
      {...props}
    >
      <ImageElement
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", imageClassName)}
      />
    </div>
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
};
