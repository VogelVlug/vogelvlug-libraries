import { BuiltPageRoute, PageRoute } from "./types";

export const buildPageRoutes = (pageRoutes: PageRoute[]): BuiltPageRoute[] => {
  return pageRoutes.map((route) => {
    return {
      path: route.createPath(),
      title: route.title,
      icon: route.icon,
    };
  });
};
