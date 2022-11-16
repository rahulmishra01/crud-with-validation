import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data, "ksdfljdf");
    axios
      .post("http://localhost:4000/user/login", data)
      .then((data) => {
        console.log(data.data.message);
        if (data.data.message === "User login successfully!!") {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Card
        className="card"
        style={{ background: "url(http://www.getmdl.io/assets/demos/dog.png)" }}
      >
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
            <h1>Login</h1>
            <input
              className="Name"
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              className="Name"
              type="text"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="button" onClick={handleSubmit}>
              Login
            </Button>
            <a href="/signup" className="sign">
              Signup
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Login;
