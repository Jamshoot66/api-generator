export const baseUrl: string = "https://test.ru";

export const apiTree = {
  first: "first",
  second: "second",
  nested: {
    "nested-first": "nested-first",
    "nested-second": "nested-second",
    "nested-third": {
      last: "/last",
    },
  },
};

export const expectedApi = {
  first: `${baseUrl}/${apiTree.first}`,
  second: `${baseUrl}/${apiTree.second}`,
  nested: `${baseUrl}/nested`,
  nestedNestedFirst: `${baseUrl}/nested/${apiTree.nested["nested-first"]}`,
  nestedNestedThirdLast: `${baseUrl}/nested/nested-third${apiTree.nested["nested-third"].last}`,
};
