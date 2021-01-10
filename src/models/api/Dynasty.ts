import { Person } from "../Person";

export default interface Dynasty {
  _id: string;
  name: string;
  members: Person[];
}
