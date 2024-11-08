"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Button } from "../Button/Button";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

interface SheetOverlayProps extends SheetPrimitive.DialogOverlayProps {
  className?: string;
}

const SheetOverlay: React.FC<SheetOverlayProps> = ({ className, ...props }) => (
  <SheetPrimitive.Overlay
    className={cn(
      "bg-black/80 fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
);

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition border-default ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends SheetPrimitive.DialogContentProps,
    VariantProps<typeof sheetVariants> {
  className?: string;
  children: React.ReactNode;
}

const SheetContent: React.FC<SheetContentProps> = ({
  side = "right",
  className,
  children,
  ...props
}) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <Button className="absolute right-4 top-4" variant="outline" size="icon" asChild>
        <SheetPrimitive.Close>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </Button>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
);

interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SheetHeader: React.FC<SheetHeaderProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);

interface SheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SheetFooter: React.FC<SheetFooterProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);

interface SheetTitleProps extends SheetPrimitive.DialogTitleProps {
  className?: string;
}

const SheetTitle: React.FC<SheetTitleProps> = ({ className, ...props }) => (
  <SheetPrimitive.Title
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
);

interface SheetDescriptionProps extends SheetPrimitive.DialogDescriptionProps {
  className?: string;
}

const SheetDescription: React.FC<SheetDescriptionProps> = ({
  className,
  ...props
}) => (
  <SheetPrimitive.Description
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
