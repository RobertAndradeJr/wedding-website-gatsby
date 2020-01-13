// todo, turn this into a class
export const addHash = (string: string): string => `#${string}`;

export const addSlash = (string: string): string => `/${string}`;

export const addSlHash = (string: string): string => addSlash(addHash(string));

export const stringToLink = (string: string): string =>
  `${string.toLocaleLowerCase().replace(/\s/g, '')}`;

export const linkifyAll = (arr: string[]): string[] =>
  arr.map(label => stringToLink(label));

export const localLink = (string: string): string =>
  addSlHash(stringToLink(string));

export const externalLink = (string: string): string =>
  addSlash(stringToLink(string));
