import React from "react";

import ThemeImg1 from '/assets/AdminLTE-3.2.0/dist/img/AdminLTELogo.png';
import ThemeImg2 from '/assets/AdminLTE-3.2.0/dist/img/user2-160x160.jpg';
import { NavLink } from "react-router-dom";


export class SideBar extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {

      return <aside className="main-sidebar sidebar-dark-primary elevation-4">
        
        <a href="index3.html" className="brand-link">
          <img src={ ThemeImg1 } alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}}/>
          <span className="brand-text font-weight-light">Budget Planner</span>
        </a>    
        
        <div className="sidebar">
          
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={ ThemeImg2 } className="img-circle elevation-2" alt="User Image"/>
            </div>
            <div className="info">
              <a href="#" className="d-block">Tom Reulen</a>
            </div>
          </div>
    
          
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>
    
          
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              
              <li className="nav-item menu-open">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Transactions
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/transactions/overview" className="nav-link" >
                    {/* <a href="#" className="nav-link active"> */}
                      <i className="far fa-circle nav-icon"></i>
                      <p>Overview</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/transactions/import" className="nav-link" >
                    {/* <a href="#" className="nav-link active"> */}
                      <i className="far fa-circle nav-icon"></i>
                      <p>Import</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/transactions/editor" className="nav-link" >
                    {/* <a href="#" className="nav-link active"> */}
                      <i className="far fa-circle nav-icon"></i>
                      <p>Editor</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/transactions/categories" className="nav-link" >
                    {/* <a href="#" className="nav-link active"> */}
                      <i className="far fa-circle nav-icon"></i>
                      <p>Categories</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item menu-open">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Accounts
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Overview</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Virtual Accounts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Bank Accounts</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item menu-open">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Budget Planner
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Planner</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Statistics</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Budget Templates</p>
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
          
        </div>
        
      </aside>
    ;
  }
}