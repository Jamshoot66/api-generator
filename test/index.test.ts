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

  it("you shouldn't contain nested node nodes urls", () => {
    const api = apiGenerator(baseUrl, apiTree);
    expect(`${api.nested["nested-first"]}`).toBe(expectedApi.nestedNestedFirst);
  });

  it("you shouldn't contain deep nested nodes", () => {
    const api = apiGenerator(baseUrl, apiTree);
    expect(`${api.nested["nested-third"].last}`).toBe(
      expectedApi.nestedNestedThirdLast
    );
  });

  it("you shouldn't contain single nodes with tailing slash", () => {
    const api = apiGenerator(baseUrl, apiTree, { withTailingSlash: true });
    expect(api.first).toBe(expectedApi.firstWithTail);
  });

  it("you shouldn't contain deep nested nodes with tailing slash", () => {
    const api = apiGenerator(baseUrl, apiTree, { withTailingSlash: true });
    expect(`${api.nested["nested-third"].last}`).toBe(
      expectedApi.nestedNestedThirdLastWithTail
    );
  });
});
