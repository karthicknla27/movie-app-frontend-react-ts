import React, { useState } from "react";
import { Movie1 } from "../types";
import Loading from "./loader/Loading";

interface MovieFormProps {
  onSubmit: (movie: Movie1) => void;
  initialMovie?: Movie1;
}

const MovieForm: React.FC<MovieFormProps> = ({ onSubmit, initialMovie }) => {
  const [movie, setMovie] = useState<Movie1>(
    initialMovie || { title: "", year: 0 }
  );
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie({ ...movie, title: e.target.value });
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie({ ...movie, year: Number(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setButtonDisabled(true);
    setShow(show);
    setIsLoading(true);
    onSubmit(movie);
    console.log(movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="edit-form">
        <input
          type="text"
          value={movie.title}
          onChange={handleTitleChange}
          placeholder="Title"
          required
        />
        <input
          type="number"
          value={movie.year}
          onChange={handleYearChange}
          placeholder="Year"
          required
        />
        <div>
          {!isLoading ? (
            <>
              <button type="submit" disabled={buttonDisabled}>
                {initialMovie ? "Update" : "Add movie"}
              </button>
            </>
          ) : (
            <>
              <Loading></Loading>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default MovieForm;
