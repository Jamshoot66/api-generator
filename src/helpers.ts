// eslint-disable-next-line import/prefer-default-export
export const sanitize = (url: string) => {
  const protocolRegex = new RegExp(/^(https?:\/+)/);
  const protocol = url.match(protocolRegex)?.[0] || "";
  const protocollessUrl = url.replace(protocolRegex, "");
  const sanitized = protocollessUrl.replace(/\/+/g, "/");
  return protocol + sanitized;
};
