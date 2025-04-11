import { PageRoute } from "./types";

function matchPathSegments(routePath: string, currentPath: string): boolean {
  const routeParts = routePath.split("/").filter(Boolean);
  const currentParts = currentPath.split("/").filter(Boolean);

  if (routeParts.length !== currentParts.length) return false;

  return routeParts.every((routePart, index) => {
    // If it's a parameter (starts with :), it matches anything
    if (routePart.startsWith(":")) return true;
    return routePart === currentParts[index];
  });
}

export function findRouteByPath(
  route: PageRoute,
  path: string,
): PageRoute | null {
  // Check if the current route matches
  if (matchPathSegments(route.createPath(), path)) {
    return route;
  }

  // Check subroutes if they exist
  const subroutes = (route as any).subroutes;
  if (subroutes) {
    for (const key of Object.keys(subroutes)) {
      // @ts-ignore
      const subroute = route[key];
      const match = findRouteByPath(subroute, path);
      if (match) return match;
    }
  }

  return null;
}
