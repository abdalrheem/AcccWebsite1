import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Genres {
  id: number;
  name: string;
  image_background : string;
}
interface GenresResponse {
  count: number;
  results: Genres[];
}

const useGames = () => {
  const [genress, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);
    apiClient
      .get<GenresResponse>("/genres", { signal: controler.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controler.abort();
  }, []);
  return { genress, error ,isLoading};
};
export default useGames;
