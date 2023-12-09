import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "./apiService";

const Login1: React.FC = () => {
  //   const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.get("/get-account");
      console.log(response);
    } catch (error: any) {
      console.log(error);
      setError(error);
    } finally {
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
      <span className="eror-msg">{error}</span>
    </div>
  );
};

export default Login1;
