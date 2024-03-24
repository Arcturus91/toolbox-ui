import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/files/data")
      .then((axiosRes) => {
        console.log("axios res:", axiosRes);
      })
      .catch((error) => {
        console.log("LOGGING ERROR", error);
      });

    console.log("reloading");
  }, []);

  return (
    <div className="App">
      <h1>hi!</h1>
    </div>
  );
}

export default App;
