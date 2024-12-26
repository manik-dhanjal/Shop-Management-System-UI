export interface PaginationMetadata {
	totalRecords: number;
	currentPage: number;
	totalPages: number;
	nextPage: number | null;
	prevPage: number | null;
}

export interface Pagination<T> {
	docs: T[];
	pagination: PaginationMetadata;
}
