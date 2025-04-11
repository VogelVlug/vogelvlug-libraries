import {
  PageRoute,
  ProcessedSubRoutes,
  RawPageRoute,
  SubRoutes,
} from "./types";

export const createRoute = <
  ParentParams extends string[] = [],
  SubRoutesMap extends SubRoutes = Record<string, never>
>(
  locale: string,
  route: RawPageRoute<ParentParams, SubRoutesMap>,
  basePath: string = "",
  accumulatedParams: ParentParams = [] as unknown as ParentParams
): PageRoute<ParentParams> & ProcessedSubRoutes<SubRoutesMap, ParentParams> => {
  const fullParams = [...accumulatedParams, ...(route.params ?? [])];
  let path = route.params
    ? `${basePath}${route.params.map((p) => `/:${p}`).join("")}`
    : basePath;

  if (path === "") {
    path = `/${locale}`;
  }

  const createPath = (...params: ParentParams) => {
    if (params.length < fullParams.length) {
      throw new Error("Missing required route parameters");
    }

    let pathWithParams = path;
    fullParams.forEach((_, index) => {
      pathWithParams = pathWithParams.replace(
        new RegExp(`/:${fullParams[index]}`),
        `/${params[index]}`,
      );
    });

    return pathWithParams;
  };

  const buildRoute = (...params: ParentParams) => {
    return {
      path: createPath(...params),
      title: route.title,
      icon: route.icon,
      description: route.description,
    }
  };

  const newRoute = {
    ...route,
    createPath,
    buildRoute,
  } as PageRoute<ParentParams> & ProcessedSubRoutes<SubRoutesMap, ParentParams>;

  if (route.subroutes) {
    Object.keys(route.subroutes).forEach((key) => {
      const subroute = route.subroutes![key];
      newRoute[key as keyof SubRoutesMap] = createRoute(
        locale,
        subroute,
        `${path}/${key}`,
        [...accumulatedParams, ...(route.params ?? [])] as any
      ) as any;
    });
  }

  return newRoute;
};