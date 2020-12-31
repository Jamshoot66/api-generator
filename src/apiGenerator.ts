import { sanitize, getTail } from "./helpers";

type Options = {
  withTailingSlash?: boolean;
};

const defaultOptions = {
  withTailingSlash: false,
};

type Params = {
  middleUrlName?: string;
};

type ToPrimitive = () => string;

type SingleNode = string;
type NestedNode = {
  [key: string]: NestedNode | ToPrimitive | string;
};

type Node = NestedNode | SingleNode;

const generateApi = (
  baseUrl: string,
  apiTree: Node,
  options: Options = defaultOptions,
  params: Params = {}
) => {
  const { middleUrlName: parentMiddleUrlName = "" } = params;

  const fullApi = Object.keys(apiTree).reduce(
    (acc: NestedNode, key: string) => {
      const nestedNode = apiTree as NestedNode;
      if (typeof nestedNode[key] === "object") {
        const middleUrlName = `${parentMiddleUrlName}/${key}`;
        const nodeName = `${baseUrl}/${middleUrlName}`;

        acc[key] = {
          ...generateApi(baseUrl, nestedNode[key] as Node, options, {
            middleUrlName,
          }),
          [Symbol.toPrimitive]: () => sanitize(nodeName),
        };
      } else {
        const singleNode = nestedNode[key] as SingleNode;
        const urlRaw = `${baseUrl}/${parentMiddleUrlName}/${singleNode}`;
        acc[key] =
          sanitize(urlRaw) + getTail(options?.withTailingSlash || false);
      }

      return acc;
    },
    {}
  );

  return fullApi;
};

export default generateApi;
