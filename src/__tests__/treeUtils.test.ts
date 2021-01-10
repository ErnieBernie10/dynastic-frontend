import { treeMock } from "../pages/Tree/TreeMock";
import { toNestedTree } from "../utils/treeUtils";

describe("Given an array of people", () => {
  test("toNestedTree converts to a nested object of people", () => {
    const people = [...treeMock];
    const nested = toNestedTree(people);
    // @ts-ignore
    expect(nested.find((p) => p.id === 1).children.length).toBe(3);
  });
});
