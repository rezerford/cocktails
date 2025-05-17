import { mapObjectToCamelCase } from "../helpers";

export const paginationMapper = (dataWithPagination: any, listMapper: any) => {
  const { data, ...rest } = dataWithPagination;

  return {
    ...mapObjectToCamelCase(rest),
    data: listMapper(data),
  };
};
