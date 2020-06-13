
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faUsers,faHome ,faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
 import { IoIosFolderOpen } from "react-icons/io";
 import {GoCommentDiscussion}from "react-icons/go";
 import {FiUsers,FiFolder}from "react-icons/fi";
 import {RiArticleLine}from "react-icons/ri";
 import {GiWireframeGlobe}from "react-icons/gi";

 const AppSidebar =  props =>  {

   
  
  
        return (
            <div>
                
<ul class="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">


  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
  
    <div class="sidebar-brand-text mx-3">All For One</div>
  </a>


  <hr class="sidebar-divider my-0"/>
                <br></br>

                <li className={`nav-item ${ props.active === 'dashboard' ? 'active' :''  }`}>
    <a class="nav-link" href="/dashboard">
    <FontAwesomeIcon icon={faHome} />
      <span>Dashboard</span></a>
  </li>
    

  <hr class="sidebar-divider my-0"/>

  <li className={`nav-item ${ props.active === 'users' ? 'active' :''  }`}>
    <a class="nav-link collapsed" href="/users">
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


  <li className={`nav-item ${ props.active === 'area' ? 'active' :''  }`}>
    <a class="nav-link collapsed" href="/area" >
    <GiWireframeGlobe />
      <span>Area</span>
    </a>
  </li>

  <li className={`nav-item ${ props.active === 'categories' ? 'active' :''  }`}>
    <a class="nav-link collapsed"  href="/categories">
   < FiFolder />
      <span>Categories</span>
    </a>
 
  </li>
  <hr class="sidebar-divider"/>
  
  <div class="sidebar-heading">
    FrontEnd
  </div>

  


  <li class="nav-item">
    <a class="nav-link" >
    < RiArticleLine />
      <span>Posts</span></a>
  </li>

 
  <li class="nav-item">
    <a class="nav-link" >
      <GoCommentDiscussion/>
      <span>Commants</span></a>
  </li>

 
  <hr class="sidebar-divider d-none d-md-block"/>

 
  <div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
  </div>

</ul>

            </div>
        );
    
}

export default AppSidebar;