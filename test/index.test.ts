import apiGenerator from "../src/index";


describe("Testing api generator", () => {
  it("you shouldn't pass!", () => {
    const api = apiGenerator;
    expect(api).toBe('no-way');
  });
});
