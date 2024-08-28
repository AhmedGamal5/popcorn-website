import { useEffect, useState } from "react";
const KEY = "ed33cf33";
export function useMovies (query){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect( function () {
        const controller = new AbortController();
  
        async function fetchMovies() {
          setMovies([]);
          try {
            setIsLoading(true);
            setError("");
            const res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
              { signal: controller.signal }
            );
            //error
            if (!res.ok)
              throw new Error("there is an error in fetching the data");
            //success 200 status code
            const data = await res.json();
            if (data.Response === "True") {
              setMovies(data.Search);
              setError("");
            } else {
              setError("No movies found.");
            }
          } catch (err) {
            console.error(err.message);
            if (err.name !== "AbortError") {
              setError(err.message);
            }
          } finally {
            setIsLoading(false);
          }
        }
        if (!query.length) {
          setError("");
          setMovies([]);
          return;
        }
        // handleCloseMovie();
        fetchMovies();
        //cleanup function
        return function () {
          controller.abort();
        };
      },
      [query]
    );
    return { movies, isLoading, error };
}