"use client";

import { ArrowRight, User } from "lucide-react";
import { useDesignSystem } from "../../../provider/DesignSystemProvider";
import { Button } from "../../Button/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../DropdownMenu/DropdownMenu";
import { LinkList } from "../../LinkList/LinkList";
import { NavLink } from "../../NavLink/NavLink";
import { AuthRoutes, User as UserType } from "../types";
import { Route } from "../../NavLink/types";
export interface UserMenuProps {
  user: UserType | null;
  userRoutes: Route[];
  authRoutes: AuthRoutes;
  isMobile?: boolean;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  user,
  userRoutes,
  authRoutes,
  isMobile,
}) => {
  const { LinkElement } = useDesignSystem();

  if (!user)
    return (
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <Button variant="outline" className="w-full" asChild>
          <LinkElement href={authRoutes.login.path}>
            {authRoutes.login.title}
          </LinkElement>
        </Button>
        <Button className="w-full" asChild>
          <LinkElement href={authRoutes.signup.path}>
            {authRoutes.signup.title}
            <ArrowRight className="h-4 w-4" />
          </LinkElement>
        </Button>
      </div>
    );

  if (isMobile) {
    return <LinkList routes={userRoutes} useSheetClose={true} />;
  }

  return (
    <>
      <div className="hidden h-full items-center md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full">
            {user.avatarUrl ? (
              <img
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
                src={user.avatarUrl}
                alt={user.name ?? "User avatar"}
              />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                <span className="h-5 w-5">
                  <User className="h-5 w-5" />
                </span>
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-1 p-2" align="end">
            {userRoutes.map((route) => (
              <DropdownMenuItem
                key={route.path || route.title}
                className="cursor-pointer rounded-sm px-4 py-2 hover:bg-subtle"
                asChild
              >
                <NavLink route={route} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
