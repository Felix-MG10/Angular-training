import { Priorite } from "../enumeration/priorite";

export interface Interface {
  id: number
  titre: string;
  etat: boolean;
  date: Date;
  priorite: Priorite;
  description: string;
  tags: any[];
}
