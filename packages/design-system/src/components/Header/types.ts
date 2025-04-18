import { Route } from "../NavLink/types";

export interface User {
  name: string;
  avatarUrl?: string;
}

export interface HeaderProps {
  mainRoutes?: Route[];
  user?: User;
  languageSwitcher?: React.ReactNode;
  hideMenuOnPage?: boolean;
  userRoutes?: Route[];
  loginRoute?: Route;
  signupRoute?: Route;
}