"use client";

import { NavMenu, NavMenuItem, NavSubMenuItem } from "../../NavMenu/NavMenu";
import { HeaderProps } from "../types";
import { UserMenu } from "./UserMenu";

export const DesktopNav: React.FC<HeaderProps> = ({
  mainRoutes,
  userRoutes,
  loginRoute,
  signupRoute,
  user,
  languageSwitcher,
}) => {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      {mainRoutes && (
        <NavMenu>
        {mainRoutes?.map((route) =>
          route.subroutes && route.subroutes.length > 0 ? (
            <NavMenuItem key={route.path || route.title} title={route.title}>
              {route.subroutes?.map((subroute) => (
                <NavSubMenuItem
                  key={subroute.path || subroute.title}
                  href={subroute.path || "#"}
                  title={subroute.title}
                  Icon={subroute.icon}
                  description={subroute.description ?? ""}
                />
              ))}
            </NavMenuItem>
          ) : (
            <NavMenuItem
              key={route.path || route.title}
              title={route.title}
              href={route.path || "#"}
            />
            ),
          )}
        </NavMenu>
      )}
      {languageSwitcher}
      {userRoutes && (
        <UserMenu
          user={user}
          userRoutes={userRoutes}
          loginRoute={loginRoute}
          signupRoute={signupRoute}
        />
      )}
    </div>
  );
}; 