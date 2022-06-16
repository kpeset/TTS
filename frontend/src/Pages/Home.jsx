import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/app.css";


function Home() {
  const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
  });

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    //Ici je sauvegarde les states de mon formulaire d'inscription
    axios
      .post("http://localhost:4000/api/user/register/", {
        email: registerValue.email,
        password: registerValue.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChangeRegister = (event) => {
    setRegisterValue({
      ...registerValue,
      [event.target.name]: event.target.value,
    });
  };

useEffect(() => {
  console.log(registerValue);
},[registerValue]);

  const handleSubmitLogin = (e) => {
    //Ici je sauvegarde les states de mon formulaire d'inscription
    e.preventDefault()
    axios
      .post("http://localhost:4000/api/user/login/", {
        email: loginValue.email,
        password: loginValue.password,
      })
      .then(function (response) {
        window.location="/success"
      })
      .catch(function (error) {
        window.location = "/";
      });
  };

  const handleChangeLogin = (event) => {
    setLoginValue({
      ...loginValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="main-form">
      <div className="left-part">
        <form onSubmit={handleSubmitLogin}>
          <h1>Vous êtes déjà membre ?</h1>
          <div className="subtitle">
            <div className="line"></div>
            <h2>Se connecter</h2>
            <div className="line"></div>
          </div>
          <div className="input-login">
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={loginValue.email}
              onChange={handleChangeLogin}
            />
            <p>Mot de passe</p>
            <input
              type="password"
              name="password"
              value={loginValue.password}
              onChange={handleChangeLogin}
            />
            <button type="submit" className="login">
              Se connecter
            </button>
          </div>
        </form>
      </div>

      <div className="right-part">
        <form onSubmit={handleSubmitRegister}>
          <h1>Pas encore membre ?</h1>
          <div className="subtitle">
            <div className="line"></div>
            <h2>S'inscrire</h2>
            <div className="line"></div>
          </div>
          <div className="input-login">
            <label>
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={registerValue.email}
                onChange={handleChangeRegister}
              />
            </label>
            <label>
              <p>Mot de passe</p>
              <input
                type="password"
                name="password"
                value={registerValue.password}
                onChange={handleChangeRegister}
              />
            </label>
            <button type="submit" className="signin">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
