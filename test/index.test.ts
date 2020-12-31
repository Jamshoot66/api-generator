import apiGenerator from "../src/index";
import { baseUrl, apiTree, expectedApi } from "./mock";

describe("Testing api generator", () => {
  it("you shouldn't contain single nodes", () => {
    const api = apiGenerator(baseUrl, apiTree);
    expect(api.first).toBe(expectedApi.first);
  });
});
