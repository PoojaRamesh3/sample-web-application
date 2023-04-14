import { useState } from "react";

const Table = (props: any) => {
  const [searchedVal, setSearchedVal] = useState("");

  return (
    <>
      <form className="d-flex mt-3 mb-3 float-end w-50">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchedVal(e.target.value)}
        />
        <button className="btn btn-outline-success" type="button">
          Search
        </button>
      </form>
      <table className="table table-dark table-striped border-info table-hover">
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
          {props.apiData
            .filter(
              (row: any) =>
                !searchedVal.length ||
                row.name
                  .toString()
                  .toLowerCase()
                  .includes(searchedVal.toString().toLowerCase())
            )
            .map((item: any, index: number) => {
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
