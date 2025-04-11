"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "../../Button/Button";
import { LinkList } from "../../LinkList/LinkList";
import { Sheet, SheetContent, SheetTrigger } from "../../Sheet/Sheet";
import { Typography } from "../../Typography/Typography";
import { HeaderProps } from "../types";
import { UserMenu } from "./UserMenu";

export const MobileNav = ({
  mainRoutes,
  userRoutes,
  authRoutes,
  user,
  languageSwitcher,
}: HeaderProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[320px] overflow-auto p-0 sm:w-[400px]"
      >
        <div className="border-b border-default p-6">
          <Typography variant="h4" text="Menu" />
        </div>
        <nav>
          {userRoutes && (
            <div className="border-b border-default p-6">
              <Typography variant="label" className="mb-4" text="Account" />
              <UserMenu
                user={user}
                userRoutes={userRoutes}
                authRoutes={authRoutes}
                isMobile
              />
            </div>
          )}
          <div className="border-b border-default p-6">
            <Typography variant="label" className="mb-4" text="Navigation" />
            <LinkList routes={mainRoutes} useSheetClose />
          </div>
          {languageSwitcher && (
            <div className="border-b border-default p-6">
              <Typography variant="label" className="mb-4" text="Language" />
              {languageSwitcher}
            </div>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
