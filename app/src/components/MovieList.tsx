import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Items } from "../types";
import Layout from "./Layout";
import { deleteMovie, getMovies } from "./apiService";
import Loading from "./loader/Loading";
import { useModal } from "./Checkmodal";
import Modal1 from "./Checkmodal";
const MovieList: React.FC = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Items[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMovieId, setLoadingMovieId] = useState<number | null>(null);
  const { isOpen, toggle } = useModal();
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMoviesFromAPI() {
      setIsLoading(true);
      try {
        const response = await getMovies();

        setMovies(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesFromAPI();
  }, [refresh]);
  const handleDelete = async (id: number) => {
    setLoadingMovieId(id);

    try {
      await deleteMovie(id);
      console.log("movie deleted:", id);
      toggle();
    } catch (error: any) {
      console.error("Error deleting movie:", error.message);
      setError(error.response.data.message);
    } finally {
      setLoadingMovieId(null);
    }
  };
  function handlecancel() {
    setRefresh(true);
    toggle();
    navigate("/");
  }

  return (
    <Layout title="movies">
      <h1>movielist</h1>
      <button onClick={() => navigate("/add")} className="home-add-btn">
        <i className="fa fa-plus kkk"> </i>
      </button>
      {isLoading ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <>
          <button
            disabled={isLoading}
            onClick={() => setRefresh((prev) => !prev)}
          >
            refresh list
          </button>
          <div className="flex">
            {movies.map((movie) => (
              <div key={movie.id}>
                <div>
                  <h2>item_name- {movie.item_name}</h2>
                  <h3> item_content: {movie.item_conent}</h3>
                  <div className="btn-wrap">
                    <button className="edit-btn">
                      <Link to={`/edit/${movie.id}`}>
                        <i className="fa fa-edit"> </i>
                      </Link>
                    </button>

                    {loadingMovieId === movie.id ? (
                      <Loading></Loading>
                    ) : (
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(movie.id)}
                      >
                        <i className="fa fa-trash-o"></i>{" "}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Modal1 isOpen={isOpen} toggle={toggle}>
            {error ? (
              <>
                <p> {error}</p>
              </>
            ) : (
              <>
                <p> movie deleted successfully</p>
              </>
            )}
            <footer>
              <button onClick={handlecancel}>ok </button>
            </footer>
          </Modal1>
        </>
      )}
    </Layout>
  );
};
export default MovieList;
