import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import MovieForm from "./MovieForm";
import { Movie1 } from "../types";
import { updateMovie, getMovieById } from "./apiService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal1 from "./Checkmodal";
import { useModal } from "./Checkmodal";
const EditMovie: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [movieTitle, setMovieTitle] = useState("");
  const [initialMovie, setInitialMovie] = useState<Movie1 | null>(null);
  const [error, setError] = useState(null);
  const { isOpen, toggle } = useModal();

  useEffect(() => {
    async function getMovies() {
      try {
        if (id) {
          const response = await getMovieById(id);
          setMovieTitle(response.title);
          setInitialMovie(response);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [id]);

  const handleMovieUpdated = async (movie: Movie1) => {
    try {
      if (id) {
        await updateMovie(id, movie);
        console.log("Movie updated:", movie);
        // setDialog(true);
        toggle();
      }
    } catch (error: any) {
      console.error("Error updating movie:", error.response.data.message);
      setError(error.response.data.message);
      toggle();
    }
  };
  function handlecancel() {
    toggle();
    navigate("/");
  }
  return (
    <Layout title={`Edit/ ${movieTitle}`}>
      <h2 className="edit-title">Edit movie</h2>
      {initialMovie && (
        <MovieForm onSubmit={handleMovieUpdated} initialMovie={initialMovie} />
      )}
      <Modal1 isOpen={isOpen} toggle={toggle}>
        {error ? (
          <>
            <p> {error}</p>
          </>
        ) : (
          <>
            <p> movie update successfully</p>
          </>
        )}
        <footer>
          <button onClick={handlecancel}>ok </button>
        </footer>
      </Modal1>
      <button onClick={() => navigate("/")} className="home-add-btn">
        Back
      </button>
    </Layout>
  );
};

export default EditMovie;
