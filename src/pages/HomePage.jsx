import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { DataTable, ModalAlert, NavBar } from "../components";
import { useSearchParams, useLocation } from "react-router-dom";

const HomePage = () => {
  const [filesData, setFilesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        setShowAlert(true);
        setErrorMessage(error.message);
      });
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    setShowAlert(false);
    const url = `http://localhost:8000/api/files/data${location.search}`;
    axios
      .get(url)
      .then((singleFile) => {
        setFilesData(singleFile.data);
      })
      .catch((error) => {
        console.log(error);
        setShowAlert(true);
        setErrorMessage(error.response.data.message);
      });
  };
  return (
    <div>
      <NavBar />
      {showAlert && <ModalAlert errorMessage={errorMessage} />}
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
