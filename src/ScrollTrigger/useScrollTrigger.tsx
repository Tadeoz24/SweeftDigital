import { useState, useEffect } from "react";
import axios from "axios";

// interfaces
import { DataProps } from "../dashboard/Users/Users";

function useScrollTrigger(
  url: string,
  data: DataProps[],
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  isLoading: boolean,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
) {
  //
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData([...data, ...res.data.list]);
        setHasMore(res.data.pagination.nextPage !== null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, hasMore]);

  const handleScroll = () => {
    if (isLoading || !hasMore) return;
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsLoading(true);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return [data, isLoading];
}

export default useScrollTrigger;
