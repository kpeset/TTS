import "../Styles/app.css";

function Home() {
  return (
    <div className="main-form">
      <div className="left-part">
        <h1>Vous êtes déjà membre ?</h1>
        <div className="subtitle">
          <div className="line"></div>
          <h2>Se connecter</h2>
          <div className="line"></div>
        </div>
        <div className="input-login">
          <p>Email</p>
          <input type="email" />
          <p>Mot de passe</p>
          <input type="password" />
          <button type="button" className="login">Se connecter</button>
        </div>
      </div>

      <div className="right-part">
        <h1>Pas encore membre ?</h1>
        <div className="subtitle">
          <div className="line"></div>
          <h2>S'inscrire</h2>
          <div className="line"></div>
        </div>
        <div className="input-login">
          <p>Email</p>
          <input type="email" />
          <p>Mot de passe</p>
          <input type="password" />
          <button type="button" className="signin">S'inscrire</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
