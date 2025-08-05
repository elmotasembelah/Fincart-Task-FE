export interface PaginationMeta {
  page: number;
  pageSize: number;
  hasNextPage: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationMeta;
}
