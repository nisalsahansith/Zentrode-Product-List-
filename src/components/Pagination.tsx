interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      <span className="text-sm">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;