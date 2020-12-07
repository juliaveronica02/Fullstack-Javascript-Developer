import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3080/users/show").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const showData = data.map((data,id) => {
    return (
      <tr key={id}>
        <td>{data.id}</td>
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td>{data.password}</td>
        <td>{data.role}</td>
      </tr>
    );
  });

  return (
      <table
        className="table table-hover justify-content-center"
        style={{ width: "70%" }}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">phone</th>
            <th scope="col">Password</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>{showData}</tbody>
      </table>
  );
};

export default Home;