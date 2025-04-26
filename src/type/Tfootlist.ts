import type { LucideIcon } from "lucide-react";
export interface Tfootlist {
  id: number;
  title: string;
  icon: LucideIcon;
  children?: Tfootlist[];
}
