export interface Tnavlist {
  id: number;
  title: string;
  path: string;
  icon: string;
  children?: Tnavlist[];
}
