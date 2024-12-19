import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <span className="navbar-text">React CRUD</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  ShowData
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="create-post">
                  SaveData
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pagination">
                  Pagination
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Ag Grid</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavComponent;
