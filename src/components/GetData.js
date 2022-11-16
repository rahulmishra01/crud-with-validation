import axios from "axios";
import Edit from "./Edit";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const GetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const responce = await axios
      .get("http://localhost:3002/data")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        alert("error");
      });
  };
  const DeleteHanlder = async (id) => {
    const resp = await axios
      .delete(`http://localhost:3002/data/${id}`)
      .then((res) => {
        alert("deleted");
      })
      .catch((error) => {
        alert(error.massage);
      });
    fetchdata();
  };

  return (
    <div>
      <Table striped bordered hover border="2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, i) => (
            <tr key={i}>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.password}</td>
              <td>
                <button onClick={<Edit />}>Edit</button>
                <button onClick={() => DeleteHanlder(items.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GetData;
