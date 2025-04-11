import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { useDesignSystem } from "../../provider/DesignSystemProvider";
import { Route } from "./types";

interface NavLinkProps {
  route: Route;
  className?: string;
  hideIcon?: boolean;
  variant?: "default" | "withDescription";
}

const navLinkVariants = cva("", {
  variants: {
    variant: {
      default: "inline-flex gap-4 text-sm font-bold",
      withDescription:
        "hover:bg-subtle inline-flex min-w-[320px] items-center gap-4 rounded p-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const NavLinkContent: React.FC<NavLinkProps> = ({
  route,
  variant = "default",
  hideIcon = false,
}) => {
  if (variant === "default")
    return (
      <>
        {route.icon && !hideIcon ? (
          <span>
            <route.icon className="h-4 w-4" />
          </span>
        ) : null}
        <span>{route.title}</span>
      </>
    );

  if (variant === "withDescription")
    return (
      <>
        {route.icon && !hideIcon ? (
          <span className="h-6 w-6 text-color-accent">
            <route.icon className="h-6 w-6" />
          </span>
        ) : null}
        <span className="inline-flex flex-col">
          <span className="text-sm font-bold">{route.title}</span>
          <span className="text-xs text-subtitle">{route.description}</span>
        </span>
      </>
    );
};

export const NavLink: React.FC<NavLinkProps> = ({
  route,
  variant = "default",
  hideIcon = false,
  className,
}) => {
  const { LinkElement } = useDesignSystem();

  const Element = route.callback ? "button" : LinkElement;

  return (
    <Element
      className={cn(navLinkVariants({ variant }), className)}
      onClick={route.callback}
      href={route.path || "#"}
    >
      <NavLinkContent route={route} variant={variant} hideIcon={hideIcon} />
    </Element>
  );
};
