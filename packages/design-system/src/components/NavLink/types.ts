import { LucideIcon } from "lucide-react";

export type Route = {
  title: string;
  icon?: LucideIcon;
  description?: string;
  subroutes?: Route[];
  path?: string;
  callback?: () => void;
}