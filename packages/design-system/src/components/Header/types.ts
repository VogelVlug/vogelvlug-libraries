import { Route } from "../NavLink/types";

export interface User {
  name?: string;
  avatarUrl?: string;
}

export interface AuthRoutes {
  login: Route;
  signup: Route;
}

export interface BaseHeaderProps {
  mainRoutes: Route[];
  user: User | null;
  languageSwitcher?: React.ReactNode;
  hideMenuOnPage?: boolean;
}

export interface WithUserRoutesProps extends BaseHeaderProps {
  userRoutes: Route[];
  authRoutes: AuthRoutes;
}

export interface WithoutUserRoutesProps extends BaseHeaderProps {
  userRoutes?: undefined;
  authRoutes?: undefined;
}

export type HeaderProps = WithUserRoutesProps | WithoutUserRoutesProps;