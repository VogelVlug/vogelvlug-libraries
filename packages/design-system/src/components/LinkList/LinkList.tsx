"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible/Collapsible";
import { NavLink } from "../NavLink/NavLink";
import { Route } from "../NavLink/types";
import { SheetClose } from "../Sheet/Sheet";

export interface LinkListProps {
  routes: Route[];
  useSheetClose?: boolean;
}

// Component to render a route item with optional sheet close
const RouteItem: React.FC<{
  route: Route;
  useSheetClose?: boolean;
  isSubroute?: boolean;
}> = ({ route, useSheetClose = false, isSubroute = false }) => {
  const content = <NavLink route={route} variant={isSubroute ? "withDescription" : "default"} />;

  if (!useSheetClose) return <div>{content}</div>;

  return (
    <SheetClose asChild>
      <div>{content}</div>
    </SheetClose>
  );
};

export const LinkList: React.FC<LinkListProps> = ({
  routes,
  useSheetClose = false,
}) => {
  return (
    <nav className="flex flex-col gap-2">
      {routes.map((route) => {
        // Handle routes with subroutes
        if (route.subroutes && route.subroutes.length > 0) {
          // Always render as collapsible when subroutes exist
          return (
            <Collapsible key={route.path || route.title}>
              <CollapsibleTrigger className="inline-flex gap-4 text-sm font-bold">
                <span>
                  {route.icon ? <route.icon className="h-5 w-5" /> : null}
                </span>
                <span>{route.title}</span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2 pt-2">
                  {route.subroutes.map((subroute) => (
                    <RouteItem
                      key={subroute.path || subroute.title}
                      route={subroute}
                      useSheetClose={useSheetClose}
                      isSubroute
                    />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        }

        // Handle regular routes
        return (
          <RouteItem
            key={route.path || route.title}
            route={route}
            useSheetClose={useSheetClose}
          />
        );
      })}
    </nav>
  );
};
