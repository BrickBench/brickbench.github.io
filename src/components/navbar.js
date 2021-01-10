import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{height: '4.2em'}} className="navbar sticky-top navbar-expand-lg dark-bottom text-light bg-middle">
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav w-100 justify-content-around align-items-center">
          <NavLink activeClassName="text-primary" className="nav-item"
            to="/get">Get BrickBench</NavLink>
          <NavLink activeClassName="text-primary" className="nav-item"
            to="/usage">Usage</NavLink>
          <NavLink activeClassName="text-primary" className="nav-item" to="/">
            <img src="./images/brick-bench.png" style={{height: '3.8em'}} className="img-fluid" />
          </NavLink>
          <NavLink activeClassName="text-primary" className="nav-item"
            to="/faq">FAQ</NavLink>
          <NavLink activeClassName="text-primary" className="nav-item"
            to="/screenshots">Screenshots</NavLink>
        </div>
      </div>
    </nav>
  );
}
