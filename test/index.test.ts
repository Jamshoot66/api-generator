import apiGenerator from "../src/index";
import { baseUrl, apiTree, expectedApi } from "./mock";

describe("Testing api generator", () => {
  it("you shouldn't contain single nodes", () => {
    const api = apiGenerator(baseUrl, apiTree);
    expect(api.first).toBe(expectedApi.first);
  });
  
  it("you shouldn't contain nested node name as url", () => {
    const api = apiGenerator(baseUrl, apiTree);
    expect(`${api.nested}`).toBe(expectedApi.nested);
  });
});
