import { Person } from "../Person";

export default interface Dynasty {
  id: string;
  name: string;
  description: string;
  members: Person[];
}
