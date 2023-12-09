import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
const AddMovie = lazy(() => import("./components/AddMovie"));
const EditMovie = lazy(() => import("./components/EditMovie"));
const MovieList = lazy(() => import("./components/MovieList"));
const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));
const KK = lazy(() => import("./components/Learning"));
const Login1 = lazy(() => import("./components/Test"));

import Loading from "./components/loader/Loading";
function Load() {
  return <Loading></Loading>;
}

function App() {
  return (
    <Suspense fallback={<Load />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kk" element={<KK />} />
          <Route path="/test" element={<Login1 />} />

          <Route path="/movielist" element={<MovieList />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/edit/:id" element={<EditMovie />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
