import React, { useState } from "react";
import axios from "axios";
import { useModal } from "./Checkmodal";
import Modal1 from "./Checkmodal";

import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
interface SignUpFormState {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  user_password: string;
  phone_no: number | "";
}
// type UserSubmitForm = {
//   first_name: string;
//   last_name: string;
//   user_name: string;
//   email: string;
//   user_password: string;
//   phone_no: number;
// };
const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { isOpen, toggle } = useModal();

  const [formData, setFormData] = useState<SignUpFormState>({
    first_name: "",
    last_name: "",
    user_name: "",
    email: "",
    user_password: "",
    phone_no: "",
  });

  // const validationSchema = Yup.object().shape({
  //   first_name: Yup.string().required("Fullname is required"),
  //   last_name: Yup.string()
  //     .required("Username is required")
  //     .min(6, "Username must be at least 6 characters")
  //     .max(20, "Username must not exceed 20 characters"),
  //     user_name: Yup.string()
  //     .required("Username is required")
  //     .min(6, "Username must be at least 6 characters")
  //     .max(20, "Username must not exceed 20 characters"),
  //   email: Yup.string().required("Email is required").email("Email is invalid"),
  //   user_password: Yup.string()
  //     .required("Password is required")
  //     .min(6, "Password must be at least 6 characters")
  //     .max(40, "Password must not exceed 40 characters"),
  //     phone_no: Yup.number()
  //     .required("phone_no is required")
  // });

  //  const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<UserSubmitForm>({
  //   resolver: yupResolver(validationSchema),
  // });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4001/signup",
        formData
      );
      console.log(formData);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      toggle();
    }
  };
  function handlecancel() {
    toggle();
    navigate("/Login");
  }
  function handleError() {
    toggle();
    navigate("/");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <h3 className="signup">signup here...</h3>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            name="first_name"
            id="fname"
            onChange={handleChange}
            value={formData.first_name}
            required
            maxLength={20}
          />
        </div>

        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="last_name"
            id="lname"
            onChange={handleChange}
            value={formData.last_name}
            required
            maxLength={20}
          />
        </div>
        <div>
          <label htmlFor="username">user Name:</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            onChange={handleChange}
            value={formData.user_name}
            required
            maxLength={20}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
            maxLength={40}
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
            required
            maxLength={15}
          />
        </div>
        <div>
          <label htmlFor="phone_number">phone number:</label>
          <input
            type="number"
            name="phone_no"
            id="phone_no"
            onChange={handleChange}
            value={formData.phone_no}
            required
            maxLength={15}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <Modal1 isOpen={isOpen} toggle={toggle}>
        {error ? (
          <>
            <p className="error-msg"> {error}</p>
            <footer>
              <button onClick={handleError}>ok </button>
            </footer>
          </>
        ) : (
          <>
            <p> movie deleted successfully</p>
            <footer>
              <button onClick={handlecancel}>ok </button>
            </footer>
          </>
        )}
      </Modal1>
    </div>
  );
};

export default Signup;
