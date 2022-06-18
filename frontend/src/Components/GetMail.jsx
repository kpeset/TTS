import React, { useEffect, useState } from "react";
import axios from "axios";

function GetMail({ data }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users/", {
        withCredentials: true,
      })
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="members-page">
      <div className="title-members-section">
        <h1>Liste des membres</h1>
      </div>

      <div className="members-content">
        {users.map((el, index) => (
          <div key={index}>
            <p>{el.email}</p>
          </div>
        ))}
        <button type="button" className="refresh" onClick={refreshPage}>
          Raffraichir
        </button>
      </div>
    </div>
  );
}

export default GetMail;
