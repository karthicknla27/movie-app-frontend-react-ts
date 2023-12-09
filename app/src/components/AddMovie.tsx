import React, { useState } from "react";
import Layout from "./Layout";
import MovieForm from "./MovieForm";
import { Movie1 } from "../types";
import { createMovie } from "./apiService";
import { useNavigate } from "react-router-dom";
import Modal1 from "./Checkmodal";
import { useModal } from "./Checkmodal";
const AddMovie: React.FC = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const { isOpen, toggle } = useModal();

  const handleMovieAdded = async (movie: Movie1) => {
    try {
      await createMovie(movie);
      console.log("Movie created:", movie);
      // setDialog(true);
      toggle();
    } catch (error: any) {
      console.error("Error creating movie:", error.response.data.message);
      setError(error.response.data.message);
      toggle();
    }
  };
  function handlecancel() {
    toggle();
    navigate("/");
  }
  return (
    <Layout title="movies/addmovies">
      <h2 className="add-title">Add movie</h2>
      <MovieForm onSubmit={handleMovieAdded} />
      <Modal1 isOpen={isOpen} toggle={toggle}>
        {error ? (
          <>
            <p> {error}</p>
          </>
        ) : (
          <>
            <p> movie added successfully</p>
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

export default AddMovie;
