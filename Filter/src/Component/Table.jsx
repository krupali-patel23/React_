import React, { useState } from "react";

export const Table = () => {
  const [info, setInfo] = useState({ fname: "", email: "", g1: "", psw: "" });
  const [array, setArray] = useState(
    JSON.parse(localStorage.getItem("Array")) || []
  );
  const [isEdit, setIsEdit] = useState(-1);

  const hendledelete = (idx) => {
    const deletdata = array.filter((item, index) => index !== idx);
    setArray(deletdata);
  };

  const HandleEdit = (iddx) => {
    setIsEdit(iddx);
    const record = array.find((item, index) => index === iddx);
    setInfo(record);
  };

  const searchdata = (val) => {
    if (val !== "") {
      let data = array.filter((i) => {
        if (
          i.fname.includes(val) ||
          i.email.includes(val) ||
          i.g1.includes(val) ||
          i.psw.includes(val)
        ) {
          return i;
        }
      });
      setArray(data);
    } else {
      setArray(JSON.parse(localStorage.getItem("Array")));
    }
  };

  const handleSort = (key) => {
    const sortedData = [...array].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setArray(sortedData);
  };
  
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => searchdata(e.target.value)}
        />

        <table className="table table-bordered">
          <thead>
          <tr>
              <th onClick={() => handleSort("fname")}>Full name</th>
              <th onClick={() => handleSort("email")}>Email</th>
              <th onClick={() => handleSort("g1")}>Gender</th>
              <th onClick={() => handleSort("psw")}>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item, index) => {
              return (
                <tr>
                  <td>{item.fname}</td>
                  <td>{item.email}</td>
                  <td>{item.g1}</td>
                  <td>{item.psw}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => hendledelete(index)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => HandleEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
