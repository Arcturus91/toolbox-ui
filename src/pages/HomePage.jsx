import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { DataTable, NavBar } from "../components";
import { useSearchParams, useLocation } from "react-router-dom";

const HomePage = () => {
  const [filesData, setFilesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();

  const handlerInputChange = (event) => {
    let fileName = event.target.value;
    if (fileName) {
      setSearchParams({ fileName });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/files/data")
      .then((allFiles) => {
        setFilesData(allFiles.data);
      })
      .catch((error) => {
        console.log("all data ERROR", error);
      });
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/api/files/data${location.search}`;
    axios
      .get(url)
      .then((singleFile) => {
        setFilesData(singleFile.data);
      })
      .catch((error) => {
        console.log("single file ERROR", error);
      });
  };
  return (
    <div>
      <NavBar />

      <form onSubmit={submitForm}>
        <label>Search for your CSV file </label>
        <input
          value={searchParams.get("fileName") || ""}
          onChange={handlerInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <DataTable filesData={filesData} />
    </div>
  );
};

export default HomePage;
