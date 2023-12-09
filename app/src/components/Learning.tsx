import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5476",
  //   timeout: 1000,
});

export const getMovies = () => {
  return axiosInstance.get("/movies");
};

interface IMovieAdd {
  title: string;
  year: number;
}

export const addMovie = (payload: IMovieAdd) => {
  return axiosInstance.post("/movies", payload);
};

export const updateMovie = (payload: IMovieAdd, movieId: number) => {
  return axiosInstance.put(`/movies/${movieId}`, payload);
};

export const deleteMovie = (movieId: string) => {
  return axiosInstance.delete(`/movies/${movieId}`);
};

export const del = (id: number) => {
  return axiosInstance.delete(`/movies/${id}`);
};

// const handleSave = () => {
//   axios
//     .put(`http://localhost:5476/movies/${id}`, todo)
//     .then((response) => {
//       console.log("Todo updated:", response.data);
//       window.location.href = "/";
//     })
//     .catch((error) => {
//       console.error("Error updating :", error);
//     });
// };

// YourComponent.tsx

// const [buttonDisabled, setButtonDisabled] = useState(false);

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         setButtonDisabled(true);

//         const response = await fetch(
//             "http://localhost:5000/....",
//             {
//                 method: "POST",
//                 body: JSON.stringify(state),
//             },
//         );
//         setButtonDisabled(false);

//         const responseJson = await response.text();

//     };

// // Button
// <button disabled={buttonDisabled} type="submit">Submit form</button>

// function Example() {
//   const [data, dataSet] = useState<any>(null)

//   useEffect(() => {
//     async function fetchMyAPI() {
//       let response = await fetch('api/data')
//       response = await response.json()
//       dataSet(response)
//     }

//     fetchMyAPI()
//   }, [])

//   return <div>{JSON.stringify(data)}</div>
// }
// import "./styles.css";

// import { useState } from "react";
// export default function App() {
//   const [show, setShow] = useState(true);
//   return (
//     <div className="App">
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide" : "Show"} component
//       </button>
//       {show ? <Box /> : null}
//     </div>
//   );
// }

// function Box() {
//   return <div className="box"></div>;
// }
{
  /* <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
 <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="2s" 
         from="0 50 50"
         to="360 50 50" 
         repeatCount="indefinite" />
  </path>
 <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="1s" 
         from="0 50 50"
         to="-360 50 50" 
         repeatCount="indefinite" />
  </path>
 <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="2s" 
         from="0 50 50"
         to="360 50 50" 
         repeatCount="indefinite" />
  </path>
</svg> */
}
{
  /* <dialog>
<article>
  <p>API request success</p>
  <footer>
     <a href="/" role="button" className="secondary"> 
  ok
</a> 
    <button onClick={() => navigate("/")}>ok</button>
    <a href="/" role="button" className="secondary">
  ok
</a> 
    <button>cancel </button>
  </footer>
</article>
</dialog>
<button
className="contrast"
data-target="modal-example"
onclick="toggleModal(event)'
onClick={() => "toggleModal(event)"}
>
Launch demo modal
</button>
<button onClick={() => navigate("/")}>ok</button> */
}

/// modal

/*
 * Modal
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2023 - Licensed under MIT
 */

// Config
// const isOpenClass = "modal-is-open";
// const openingClass = "modal-is-opening";
// const closingClass = "modal-is-closing";
// const animationDuration = 400; // ms
// let visibleModal = null;

// Toggle modal
// const toggleModal = (event) => {
//   event.preventDefault();
//   const modal = document.getElementById(event.currentTarget.getAttribute("data-target"));
//   typeof modal != "undefined" && modal != null && isModalOpen(modal)
//     ? closeModal(modal)
//     : openModal(modal);
// };

// Is modal open
// const isModalOpen = (modal) => {
//   return modal.hasAttribute("open") && modal.getAttribute("open") != "false" ? true : false;
// };

// Open modal
// const openModal = (modal) => {
//   if (isScrollbarVisible()) {
//     document.documentElement.style.setProperty("--scrollbar-width", `${getScrollbarWidth()}px`);
//   }
//   document.documentElement.classList.add(isOpenClass, openingClass);
//   setTimeout(() => {
//     visibleModal = modal;
//     document.documentElement.classList.remove(openingClass);
//   }, animationDuration);
//   modal.setAttribute("open", true);
// };

// Close modal
// const closeModal = (modal) => {
//   visibleModal = null;
//   document.documentElement.classList.add(closingClass);
//   setTimeout(() => {
//     document.documentElement.classList.remove(closingClass, isOpenClass);
//     document.documentElement.style.removeProperty("--scrollbar-width");
//     modal.removeAttribute("open");
//   }, animationDuration);
// };

// Close with a click outside
// document.addEventListener("click", (event) => {
//   if (visibleModal != null) {
//     const modalContent = visibleModal.querySelector("article");
//     const isClickInside = modalContent.contains(event.target);
//     !isClickInside && closeModal(visibleModal);
//   }
// });

// Close with Esc key
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape" && visibleModal != null) {
//     closeModal(visibleModal);
//   }
// });

// Get scrollbar width
// const getScrollbarWidth = () => {
//   // Creating invisible container
//   const outer = document.createElement("div");
//   outer.style.visibility = "hidden";
//   outer.style.overflow = "scroll"; // forcing scrollbar to appear
//   outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
//   document.body.appendChild(outer);

// Creating inner element and placing it in the container
// const inner = document.createElement("div");
// outer.appendChild(inner);

// Calculating difference between container's full width and the child width
// const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

// Removing temporary elements from the DOM
// outer.parentNode.removeChild(outer);

// return scrollbarWidth;
// };

// Is scrollbar visible
// const isScrollbarVisible = () => {
//   return document.body.scrollHeight > screen.height;
// };
// const index1 = movie.findIndex((movie) => movie.id === id);
// const deletedMovie = movie.map((mv) => {
//   if (id === mv.id) {
//     setIsLoad(true);
//     console.log(id);
//   }
// });
// function del() {}
// // setRefresh(true);
// // setIsLoad(true);
// const index1 = movie.findIndex((movie) => movie.id === id);
// const index1 = movie.findIndex((movie) => {
//   if (movie.id === id) {
//   }
//   setRefresh(true);
// });

// console.log(index);
// setIsLoad(true);
// setIsLoad(true);

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Movie } from "../types";
// import Layout from "./Layout";
// import { deleteMovie, getMovies } from "./apiService";
// import Modal from "./Modal";
// import Loading from "./loader/Loading";
// const MovieList: React.FC = () => {
//   const navigate = useNavigate();
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [dialog, setDialog] = useState(false);
//   const [refresh, setRefresh] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [loadingMovieId, setLoadingMovieId] = useState<number | null>(null);
//   useEffect(() => {
//     async function getMoviesFromAPI() {
//       setIsLoading(true);
//       try {
//         const response = await getMovies();
//         setMovies(response);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getMoviesFromAPI();
//   }, [refresh]);
//   const handleDelete = async (id: number) => {
//     setLoadingMovieId(id);
//     try {
//       await deleteMovie(id);
//       console.log("movie deleted:", id);
//       setDialog(true);
//     } catch (error: any) {
//       console.error("Error deleting movie:", error.message);
//     } finally {
//       setLoadingMovieId(null);
//       setRefresh(false);
//     }
//   };
//   return (
//     <Layout title="movies">
//       <h1>Movies</h1>
//       <button onClick={() => navigate("/add")} className="home-add-btn">
//         <i className="fa fa-plus kkk"> </i>
//       </button>
//       <button disabled={isLoading} onClick={() => setRefresh((prev) => !prev)}>
//         refresh list
//       </button>
//       {isLoading ? (
//         <>
//           <Loading></Loading>
//         </>
//       ) : (
//         <>
//           <div className="grid">
//             {movies.map((movie) => (
//               <div key={movie.id}>
//                 <article>
//                   <h2>movie- {movie.title}</h2>
//                   <h3> Year: {movie.year}</h3>
//                   <div className="btn-wrap">
//                     <button className="edit-btn">
//                       <Link to={`/edit/${movie.id}`}>
//                         <i className="fa fa-edit"> </i>
//                       </Link>
//                     </button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(movie.id)}
//                     >
//                       {loadingMovieId === movie.id ? (
//                         <Loading></Loading>
//                       ) : (
//                         <i className="fa fa-trash-o"></i>
//                       )}
//                     </button>
//                   </div>
//                 </article>
//               </div>
//             ))}
//           </div>
//           <Modal dialog={dialog} setDialog={setDialog} />
//         </>
//       )}
//     </Layout>
//   );
// };
// export default MovieList;

// modal

// import React, { useRef, useEffect, useState } from 'react';
// import './Modal.css';

// const Modal = ({ isOpen, hasCloseBtn = true, onClose, children }) => {
//   const [isModalOpen, setModalOpen] = useState(isOpen);
//   const modalRef = useRef(null);

//   const handleCloseModal = () => {
//     if (onClose) {
//       onClose();
//     }
//     setModalOpen(false);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Escape') {
//       handleCloseModal();
//     }
//   };

//   useEffect(() => {
//     setModalOpen(isOpen);
//   }, [isOpen]);

//   useEffect(() => {
//     const modalElement = modalRef.current;

//     if (modalElement) {
//       if (isModalOpen) {
//         modalElement.showModal();
//       } else {
//         modalElement.close();
//       }
//     }
//   }, [isModalOpen]);

//   return (
//     <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
//       {hasCloseBtn && (
//         <button className="modal-close-btn" onClick={handleCloseModal}>
//           Close
//         </button>
//       )}
//       {children}
//     </dialog>
//   );
// };

// export default Modal;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// interface ModalProps {
//   dialog: boolean;
//   setDialog: (value: boolean) => void;
//   open?: (value: boolean) => void;
// }

// const Modal: React.FC<ModalProps> = ({ dialog, setDialog }) => {
//   const navigate = useNavigate();
//   function handlecancel() {
//     setDialog(false);
//     navigate("/");
//   }
//   return (
//     <div>
//       <dialog open={dialog}>
//         <article>
//           <p>API request success</p>
//           <footer>
//             <button onClick={handlecancel}>ok </button>
//           </footer>
//         </article>
//       </dialog>
//     </div>
//   );
// };

// export default Modal;

/////// NAVIGATE ALSO REDIRECT

{
  /* <button onClick={() => navigate(`/edit/${movie.id}`)} >
<i className="fa fa-edit"> </i>
</button> */
}
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const KK: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Confirm Password does not match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            {...register("fullname")}
            className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            {...register("username")}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default KK;
