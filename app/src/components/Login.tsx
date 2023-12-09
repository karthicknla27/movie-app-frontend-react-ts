import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

interface LoginFormState {
  user_name: string;
  user_password: string;
}

const Login: React.FC = () => {
  //   const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<LoginFormState>({
    user_name: "",
    user_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4001/login",
        formData
      );
      console.log(formData);
      console.log(response);
      localStorage.setItem("token", response.data.token);
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div>
          <label htmlFor="username">user Name:</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            onChange={handleChange}
            value={formData.user_name}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="user_password"
            id="pass"
            onChange={handleChange}
            value={formData.user_password}
          />
        </div>

        <button>Login</button>
      </form>
      <span className="eror-msg">{error}</span>
    </div>
  );
};

export default Login;
