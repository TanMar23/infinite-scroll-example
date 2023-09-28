import { useInfiniteQuery } from "react-query";
import { listCharacters } from "../services/charactersService";
import { IAPIResponse } from "../interfaces/IAPIResponse";
import { useMemo } from "react";

export const useCharacter = () => {
    const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery({
        queryKey: ["characters"],
        staleTime: Infinity,
        queryFn: ({ pageParam = 1 }) => listCharacters(pageParam),
        getNextPageParam: (lastPage: IAPIResponse) => {
          const previousPage = lastPage.info.prev
            ? +lastPage.info.prev.split("=")[1]
            : 0;
          const currentPage = previousPage + 1;
    
          if (currentPage === lastPage.info.pages) return false;
          return currentPage + 1;
        },
      });
    
      const characters = useMemo(
        () =>
          data?.pages.reduce((prev, page) => {
            return {
              info: page.info,
              results: [...prev.results, ...page.results],
            };
          }),
        [data]
      );    

    return {
        error, fetchNextPage, status, hasNextPage,
        characters
    }
}