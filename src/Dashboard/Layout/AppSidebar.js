import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {GoCommentDiscussion} from "react-icons/go";
import {FiUsers, FiFolder} from "react-icons/fi";
import {RiArticleLine} from "react-icons/ri";
import {GiWireframeGlobe} from "react-icons/gi";

const AppSidebar = props => {
    return (
        <div>
            <ul
                className="navbar-nav bg-primary sidebar sidebar-dark accordion"
                id="accordionSidebar">
                <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="index.html">
                    <div className="sidebar-brand-text mx-3">All For One</div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <br></br>
                <li
                    className={`nav-item ${props.active === 'dashboard'
                    ? 'active'
                    : ''}`}>
                    <a className="nav-link" href="/dashboard">
                        <FontAwesomeIcon icon={faHome}/>
                        <span>Dashboard</span>
                    </a>
                </li>
                <hr className="sidebar-divider my-0"/>
                <li
                    className={`nav-item ${props.active === 'users'
                    ? 'active'
                    : ''}`}>
                    <a className="nav-link collapsed" href="/users">
                        <FiUsers/>
                        <span>Users</span>
                    </a>
                    {/*<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Custom Components:</h6>
        <a class="collapse-item" href="buttons.html">Buttons</a>
        <a class="collapse-item" href="cards.html">Cards</a>
      </div>
        </div> */}
                </li>
                <li
                    className={`nav-item ${props.active === 'area'
                    ? 'active'
                    : ''}`}>
                    <a className="nav-link collapsed" href="/area">
                        <GiWireframeGlobe/>
                        <span>Area</span>
                    </a>
                </li>
                <li
                    className={`nav-item ${props.active === 'categories'
                    ? 'active'
                    : ''}`}>
                    <a className="nav-link collapsed" href="/categories">
                        < FiFolder/>
                        <span>Categories</span>
                    </a>
                </li>
                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">
                    FrontEnd
                </div>

                <li className="nav-item">
                    <a className="nav-link">
                        < RiArticleLine/>
                        <span>Posts</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link">
                        <GoCommentDiscussion/>
                        <span>Commants</span>
                    </a>
                </li>
                <hr className="sidebar-divider d-none d-md-block"/>
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>

        </div>
    );

}

export default AppSidebar;