"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../Button/Button";
import { LinkList } from "../../LinkList/LinkList";
import { Route } from "../../NavLink/types";
import { Sheet, SheetContent, SheetTrigger } from "../../Sheet/Sheet";
import { Typography } from "../../Typography/Typography";
import { HeaderProps } from "../types";
import { UserMenu } from "./UserMenu";

export const MobileNav = ({
  mainRoutes,
  userRoutes,
  loginRoute,
  signupRoute,
  user,
  languageSwitcher,
  translations,
}: HeaderProps) => {
  const [open, setOpen] = useState(false);

  // Dirty little hack to close the sheet when a route is clicked
  // (But retain all callback functionality!)
  const closingMainRoutes = mainRoutes?.map((r) => ({
    ...r,
    callback: () => {
      setOpen(false);
      r.callback?.();
    },
  }));

  const closingUserRoutes = userRoutes?.map((r) => ({
    ...r,
    callback: () => {
      setOpen(false);
      r.callback?.();
    },
  }));

  const closingLoginRoute = {
    ...loginRoute,
    callback: () => {
      setOpen(false);
      loginRoute?.callback?.();
    },
  } as Route;

  const closingSignupRoute = {
    ...signupRoute,
    callback: () => {
      setOpen(false);
      signupRoute?.callback?.();
    },
  } as Route;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[320px] overflow-auto p-0 sm:w-[400px]"
      >
        <div className="border-default border-b p-6">
          <Typography variant="h4" text={translations?.menu ?? "Menu"} />
        </div>
        <nav>
          {userRoutes && (
            <div className="border-default border-b p-6">
              <Typography
                variant="label"
                className="mb-4"
                text={translations?.account ?? "Account"}
              />
              <UserMenu
                user={user}
                userRoutes={closingUserRoutes}
                loginRoute={closingLoginRoute}
                signupRoute={closingSignupRoute}
                isMobile
              />
            </div>
          )}
          <div className="border-default border-b p-6">
            <Typography
              variant="label"
              className="mb-4"
              text={translations?.navigation ?? "Navigation"}
            />
            {closingMainRoutes && <LinkList routes={closingMainRoutes} />}
          </div>
          {languageSwitcher && (
            <div className="border-default border-b p-6">
              <Typography
                variant="label"
                className="mb-4"
                text={translations?.language ?? "Language"}
              />
              <div>{languageSwitcher}</div>
            </div>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
