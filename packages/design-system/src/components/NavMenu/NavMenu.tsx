"use client";

import * as NavMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown, LucideIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { useDesignSystem } from "../../provider/DesignSystemProvider";

interface SubRoute {
  href: string;
  title: string;
  description: string;
  Icon?: LucideIcon;
}

export const NavMenu: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NavMenuPrimitive.Root className="relative z-10 list-none">
      <NavMenuPrimitive.List className="flex max-w-max flex-1 list-none items-center justify-center gap-6 text-sm">
        {children}
      </NavMenuPrimitive.List>

      <div className="absolute top-full flex justify-center">
        <NavMenuPrimitive.Viewport className="origin-top-center border-default bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-4 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavMenuPrimitive.Root>
  );
};

interface NavMenuItemProps extends PropsWithChildren {
  href?: string;
  title: string;
}

export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  href,
  title,
  children,
}) => {
  if (!children) {
    return (
      <NavMenuPrimitive.Item>
        <NavMenuLink href={href} title={title} />
      </NavMenuPrimitive.Item>
    );
  }

  return (
    <NavMenuPrimitive.Item>
      <NavMenuPrimitive.Trigger className="flex items-center gap-1 font-semibold">
        {title} <ChevronDown className="size-4" />
      </NavMenuPrimitive.Trigger>
      <NavMenuPrimitive.Content className="bg-default data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full md:absolute md:w-auto">
        <NavMenuPrimitive.List className="flex flex-col gap-2 p-2">
          {children}
        </NavMenuPrimitive.List>
      </NavMenuPrimitive.Content>
    </NavMenuPrimitive.Item>
  );
};

interface NavMenuLinkProps {
  href?: string;
  title: string;
}

const NavMenuLink: React.FC<NavMenuLinkProps> = ({ href, title }) => {
  const { LinkElement } = useDesignSystem();

  return (
    <NavMenuPrimitive.Link asChild>
      <LinkElement className="text-sm font-semibold" href={href}>
        {title}
      </LinkElement>
    </NavMenuPrimitive.Link>
  );
};

export const NavSubMenuItem: React.FC<SubRoute> = ({
  href,
  title,
  description,
  Icon,
}) => {
  const { LinkElement } = useDesignSystem();

  return (
    <NavMenuPrimitive.Item className="w-[320px]">
      <NavMenuPrimitive.Link asChild>
        <LinkElement
          href={href}
          className="hover:bg-subtle flex items-center gap-4 rounded p-3"
        >
          {Icon ? <Icon className="text-color-accent h-6 w-6" /> : null}
          <span className="flex flex-col">
            <span className="text-sm font-semibold">{title}</span>
            <span className="text-subtitle text-xs">{description}</span>
          </span>
        </LinkElement>
      </NavMenuPrimitive.Link>
    </NavMenuPrimitive.Item>
  );
};
