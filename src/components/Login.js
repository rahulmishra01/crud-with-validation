import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HanldleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);

    axios
      .post("http://localhost:3002/data", data)
      .then((data) => {
        console.log(data.data.massage);
        if (data.data.massage === "Login Successfully") {
          navigate("/home");
        }
      })
      .catch((error) => {
        alert("error");
      });
  };

  return (
    <div>
      <form onSubmit={HanldleSubmit}>
        <h1>From Login...</h1>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter name here..."
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password here..."
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
