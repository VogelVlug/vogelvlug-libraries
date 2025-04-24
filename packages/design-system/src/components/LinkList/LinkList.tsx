"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible/Collapsible";
import { NavLink } from "../NavLink/NavLink";
import { Route } from "../NavLink/types";

export interface LinkListProps {
  routes: Route[];
}

export const LinkList: React.FC<LinkListProps> = ({ routes }) => {
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
                    <NavLink
                      key={subroute.path || subroute.title}
                      route={subroute}
                      variant="withDescription"
                    />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        }

        // Handle regular routes
        return (
          <NavLink
            key={route.path || route.title}
            route={route}
            variant={"default"}
          />
        );
      })}
    </nav>
  );
};
