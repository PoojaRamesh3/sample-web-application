import axios from "axios";
import { useState, useEffect } from "react";

const Table = () => {
  interface FullName {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
  }

  const baseURL = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState<FullName[]>([]);

  const getData = () => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table className="table table-striped">
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
          {data.map((item: any, index: number) => {
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
