import { LucideIcon } from "lucide-react";
import { createRoute } from "./createRoute";

export interface PageRoute<Params extends string[] = []> {
  createPath: (...params: Params) => string;
  buildRoute: (...params: Params) => BuiltPageRoute;
  title: string;
  description?: string;
  icon?: LucideIcon;
  hideMenuOnPage?: boolean;
}

export interface BuiltPageRoute
  extends Omit<PageRoute, "createPath" | "buildRoute"> {
  path: string;
  subroutes?: BuiltPageRoute[];
}

export type SubRoutes = { [key: string]: RawPageRoute<any, any> };

export interface RawPageRoute<
  Params extends string[] = [],
  SubRoutesMap extends SubRoutes = Record<string, never>,
> extends Omit<PageRoute<Params>, "createPath" | "buildRoute"> {
  params?: Params;
  subroutes?: SubRoutesMap;
}

type CombinedParams<ParentParams extends string[], Params extends string[]> = [
  ...ParentParams,
  ...Params,
];

export type ProcessedSubRoutes<
  SubRoutesMap extends SubRoutes,
  ParentParams extends string[] = [],
> = {
  [Key in keyof SubRoutesMap]: ReturnType<
    typeof createRoute<
      CombinedParams<ParentParams, ExtractParams<SubRoutesMap[Key]>>,
      SubRoutesMap[Key]["subroutes"]
    >
  >;
};

type ExtractParams<Route> =
  Route extends RawPageRoute<infer Params, any> ? Params : never;
