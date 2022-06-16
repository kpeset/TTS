import React, { useEffect, useState } from "react";
import axios from "axios";

function Success() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/success", {
        withCredentials: true,
      })
      .then(function (response) {
        setIsLoading(!isLoading);
        console.log(isLoading);
      })
      .catch(function (error) {
        window.location = "/";
      });
  }, []);

  return (
    <div>
      {isLoading ? `Accès non autorisé !` : <h1>Hello !</h1>}
      {console.log(isLoading)}
    </div>
  );
}

export default Success;
