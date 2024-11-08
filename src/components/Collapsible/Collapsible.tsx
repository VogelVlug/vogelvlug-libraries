"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Collapsible: React.FC<CollapsiblePrimitive.CollapsibleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <CollapsiblePrimitive.Root className={cn("group", className)} {...props}>
      {children}
    </CollapsiblePrimitive.Root>
  );
};

const CollapsibleTrigger: React.FC<
  CollapsiblePrimitive.CollapsibleTriggerProps
> = ({ children, className, ...props }) => {
  return (
    <CollapsiblePrimitive.Trigger
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
    </CollapsiblePrimitive.Trigger>
  );
};

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
