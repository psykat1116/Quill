import { parseAsString, useQueryState } from "nuqs";

export const useSearch = (key: string) => {
  return useQueryState(
    key,
    parseAsString.withDefault("").withOptions({
      clearOnDefault: true,
    })
  );
};
