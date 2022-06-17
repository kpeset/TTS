import React, { useEffect, useState } from "react";
import axios from "axios";
import GetMail from "../Components/GetMail";

function Success() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/success", {
        withCredentials: true,
      })
      .then(function () {
        setIsLoading(!isLoading);
      })
      .catch(function (error) {
        window.location = "/";
      });
  }, []);

  const mailList = () => {
    return (
      <div>
        <GetMail />
      </div>
    );
  };

  return (
    <div>{isLoading ? `Vous n'avez pas accès à cette page !` : mailList()}</div>
  );
}

export default Success;
