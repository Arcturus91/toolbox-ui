import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { DataTable } from "../components";

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
  return (
    <div>
      <DataTable filesData={filesData} />
    </div>
  );
};

export default HomePage;
