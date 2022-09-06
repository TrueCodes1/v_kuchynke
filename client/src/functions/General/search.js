// global imports
import Fuse from "fuse.js";

export const search = (list, options, string) => {
  const fuse = new Fuse(list, options);

  return fuse.search(string);
};
