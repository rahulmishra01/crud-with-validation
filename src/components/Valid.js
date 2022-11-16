import axios from "axios";
import React, { useState } from "react";
import GetData from "./GetData";

const Valid = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    setError(validate(data));
    setSubmit(true);

    const newData = data;
    const responce = await axios
      .post("http://localhost:3002/data", newData)
      .then(() => {
        alert("Successfull");
      })
      .catch(() => {
        alert("somthing went wrong");
      });
    console.log(responce.data);
    setData({
      name: "",
      email: "",
      password: "",
    });
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "please enter name here...";
    }
    if (!values.email) {
      errors.email = "please enter email here...";
    } else if (!regex.test(values.email)) {
      errors.email = "please enter valid email here...";
    }
    if (!values.password) {
      errors.password = "please enter password here...";
    } else if (values.password.length < 6) {
      errors.password = "please enter only 6 digit here...";
    } else if (values.password.length > 15) {
      errors.password = "please enter only 15 digit here...";
    }
    return errors;
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Hello world..</h1>
        {Object.keys(error).length === 0 && submit ? (
          <div>Signed Succesfully...</div>
        ) : (
          <p></p>
        )}
        <input
          type="text"
          value={data.name}
          onChange={eventHandler}
          name="name"
          placeholder="enter name here..."
        />
        <p>{error.name}</p>
        <br />
        <br />
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={eventHandler}
          placeholder="enter email here..."
        />
        <p>{error.email}</p>
        <br />
        <br />
        <input
          type="password"
          value={data.password}
          onChange={eventHandler}
          name="password"
          placeholder="enter password here..."
        />
        <p>{error.password}</p>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <GetData />
    </div>
  );
};

export default Valid;
