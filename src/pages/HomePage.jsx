import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { DataTable, NavBar } from "../components";

const HomePage = () => {
  const [filesData, setFilesData] = useState([]);
  useEffect(() => {
    console.log("true or false", Boolean(filesData.length));
    axios
      .get("http://localhost:8000/api/files/data")
      .then((axiosRes) => {
        console.log("axios res:", axiosRes.data);

        setFilesData(axiosRes.data);
      })
      .catch((error) => {
        console.log("LOGGING ERROR", error);
      });

    console.log("reloading");
  }, []);

  const [searchParam, setSearchParam] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    console.log(searchParam);
  };
  return (
    <div>
      <NavBar />
      <form onSubmit={submitForm}>
        <label>Search for your CSV file </label>
        <input
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <DataTable filesData={filesData} />
    </div>
  );
};

export default HomePage;
