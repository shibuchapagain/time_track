export interface QueryInterface {
  pageSize: number;
  offset?: number;
  currentPage?: number;
}

export type QueryObjectType = {
  limit: number;
  offset: number;
  where: any;
  order: any;
};
