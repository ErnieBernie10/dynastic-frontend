import { rest } from "msw";
import { baseUrl } from "../config";
import Dynasty from "../models/api/Dynasty";
import { Tree } from "../models/api/FlatTree";

const api = (url: string) => `${baseUrl}${url}`;

const dates = {
  createdAt: new Date().toISOString(),
  modifiedAt: new Date().toISOString(),
};

export const handlers = [
  rest.get(api("/dynasties"), (req, res, ctx) => {
    const response: Dynasty[] = [
      { id: "1", description: "Something", members: [], name: "von Habsburg" },
      { id: "2", description: "Something", members: [], name: "Valois" },
      { id: "3", description: "Something", members: [], name: "de Bourgogne" },
    ];
    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get(api("/dynasties/:id/flattree"), (req, res, ctx) => {
    const response: Tree = {
      members: [
        {
          id: "1",
          firstname: "Philip",
          lastname: "de Bourgogne",
          relationships: [{ partner: "2", children: ["3", "4"] }],
          alias: "the Bold",
          ...dates,
        },
        {
          id: "2",
          firstname: "Margaret",
          lastname: "de Dampierre",
          relationships: [{ partner: "1", children: ["3", "4"] }],
          ...dates,
        },
        {
          id: "3",
          firstname: "John",
          lastname: "de Bourgogne",
          relationships: [{ partner: "5", children: ["6"] }],
          ...dates,
        },
        {
          id: "4",
          firstname: "Charles",
          lastname: "de Bourgogne",
          ...dates,
        },
        {
          id: "5",
          firstname: "Margaret",
          lastname: "of Bavaria",
          relationships: [{ partner: "3", children: ["6"] }],
          ...dates,
        },
      ],
    };
    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get(api("/dynasties/:id"), (req, res, ctx) => {
    const response: Dynasty = {
      id: req.params.id as string,
      description: "Burgundian dynasty ruling in the 14th and 15th century",
      name: "de Bourgogne",
      members: [],
    };
    return res(ctx.status(200), ctx.json(response));
  }),
];
