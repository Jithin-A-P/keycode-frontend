export interface IPaginationProps {
  currentPage: number;
  fetchNext: () => void;
  fetchPrevious: () => void;
  hasNextPage?: boolean;
  isFetching?: boolean;
  itemsInPage: number;
  limit: number;
  totalItems?: number;
  totalPages?: number;
}
