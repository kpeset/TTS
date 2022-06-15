import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>C'est ici que tout commence...</h1>
      <div>
          <ul>
          <NavLink to="/page1"><li>Page 1</li></NavLink>
          <NavLink to="/page2"><li>Page 2</li></NavLink>
          </ul>
      </div>
    </div>
  );
}

export default Home;
