"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useRouter, useSearchParams } from "next/navigation";

export default function CoursesPagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const go = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Pagination className="mt-10">
      <PaginationContent>

        <PaginationItem>
          <PaginationPrevious
            onClick={() => go(Math.max(currentPage - 1, 1))}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => go(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            onClick={() => go(Math.min(currentPage + 1, totalPages))}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}