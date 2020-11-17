import { Person } from "../../models/Person";

export const treeMock: Person[] = [
  {
    id: 1,
    name: "Beatrix Wildemeersch",
    relationship: 2
  },
  {
    id: 2,
    name: "Jan Boedt",
    relationship: 1
  },
  {
    id: 3,
    name: "Thomas Boedt",
    mother: 1,
    father: 2,
    relationship: 7
  },
  {
    id: 4,
    name: "Sarah Boedt",
    mother: 1,
    father: 2,
    relationship: 9
  },
  {
    id: 5,
    name: "Jan-Willem Boedt",
    mother: 1,
    father: 2,
  },
  {
    id: 6,
    name: "Arne Boedt",
    mother: 7,
    father: 3,
    relationship: 12
  },
  {
    id: 7,
    name: "Ann Bullinck",
    relationship: 3
  },
  {
    id: 8,
    name: "Jolien Boedt",
    mother: 7,
    father: 3
  },
  {
    id: 9,
    name: "Dave Louwagie",
    relationship: 4
  },
  {
    id: 10,
    name: "Lander Louwagie",
    mother: 4,
    father: 9
  },
  {
    id: 11,
    name: "Lotte Louwagie",
    mother: 4,
    father: 9
  },
  {
    id: 12,
    name: "Hedvika Rackova",
    relationship: 6
  },
  {
    id: 13,
    name: "John",
    mother: 12,
    father: 6
  },
  {
    id: 15,
    name: "Karen",
    mother: 12,
    father: 6
  },
  {
    id: 16,
    name: "John II",
    mother: 12,
    father: 6
  }
];