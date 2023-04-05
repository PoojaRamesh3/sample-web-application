import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

const Table = () => {
  const [data, setData] = useState<any[]>([]);

  const getData = () => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: any) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
