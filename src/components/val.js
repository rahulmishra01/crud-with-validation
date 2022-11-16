import React, { useState } from "react";

const val = () => {
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
        [name]: [value],
      };
    });
  };

  const validation = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      error.name = "please enter the name../";
    }
    if (!values.email) {
      error.email = "please enter the email../";
    } else if (regex.test(values.email)) {
      error.email = "please enter valid email";
    }
    if (!values.password) {
      error.password = "please enter the password../";
    }
    if (values.password.length < 6) {
      error.password = "please enter the password 6 digit../";
    }
    if (!values.password > 16) {
      error.password = "please enter the password 16 digit../";
    }
    return error;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(validation(data));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={eventHandler}
        />
        <p>{error.name}</p>
        <br />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={eventHandler}
        />
        <p>{error.email}</p>
        <br />
        <br />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={data.password}
          onChange={eventHandler}
        />
        <p>{error.password}</p>
        <br />
        <br />
      </form>
    </div>
  );
};

export default val;
