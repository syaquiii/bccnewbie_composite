export interface Tnavlist {
  id: number;
  title: string;
  path: string;

  children?: Tnavlist[];
}
