
import axios from "axios";
import { Movie1,Items } from "../types";
import  { AxiosResponse } from "axios";

const API_BASE_URL = "http://localhost:4000"; 

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const getMovies = async (): Promise<Items[]> => {
    const response: AxiosResponse<Items[]> = await apiService.get("/items");
    return response.data;
  };

export const createMovie = async (movie: Movie1 ): Promise<Movie1> => {
    const response: AxiosResponse<Movie1> = await apiService.post("/movies", movie);
    return response.data;
  };

  export const updateMovie = async (id: string, movieData: Movie1) => {
      const response = await axios.put(`${API_BASE_URL}/movies/${id}`, movieData);
      return response.data;
    }
export const deleteMovie = async (id: number): Promise<void> => {
  await apiService.delete(`/movies/${id}`);
};
export const getMovieById = async (id: string) => {
      const response = await axios.get(`${API_BASE_URL}/movies/${id}`);
      return response.data;
    }
 