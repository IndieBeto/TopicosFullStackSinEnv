import React from "react";
import "./AdminLayout.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, Link } from "react-router-dom";

import {
  faCoffee,
  faTachometerFast,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import AppContent from "./components/AppContent";

const AdminLayout = () => {
  return (
    <div id="wrapper">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          asp-action="List"
          asp-controller="Home"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i>
              <FontAwesomeIcon className="fas fa-fw" icon={faCoffee} />
            </i>
          </div>
          <div className="sidebar-brand-text mx-3">
            Admin <sup>v2</sup>
          </div>
        </a>

        <li className="nav-item active">

          <Link to="/" className="nav-link text-center uppity" >
              <i>
                {" "}
                <FontAwesomeIcon className="fas fa-fw" icon={faTachometerFast} />
              </i>
              <span>Ir al store</span>
          </Link>
        </li>

        <div className="sidebar-heading">Productos</div>

        <li className="nav-item" >
          <Link to="/admin/productos" className="nav-link">

            <i>
              <FontAwesomeIcon className="fas fa-fw" icon={faWrench} />
            </i>

            <span>Listado Productos</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link"  >

            <i>
              <FontAwesomeIcon className="fas fa-fw" icon={faWrench} />
            </i>

            <span>Crear Producto</span>
          </Link>
        </li>


      </ul>

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars"></i>
            </button>

            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                ></input>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      ></input>
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>

            <a href="/">
              <i className="fas fa-home fa-2x p-2 mr-4"></i>
            </a>
          </nav>

          <div className="container-fluid">
            <main role="main" className="pb-3">
              <AppContent />
            </main>
          </div>
        </div>

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              {/* <span>Copyright &copy; Your Website 2021</span> */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default AdminLayout;
