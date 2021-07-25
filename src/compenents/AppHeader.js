
import { AiFillSetting } from "react-icons/ai";
import React, { useContext } from 'react'
import ApiContext from '../context/AuthContext'

const AppHeader = props => (

    <ApiContext.Consumer>
        {(context) => {
            return (
                <header>
                    <div className="header-area ">
                        <div id="sticky-header" className="main-header-area">
                            <div className="container-fluid ">
                                <div className="header_bottom_border">
                                    <div className="row align-items-center">
                                        <div className="col-xl-3 col-lg-2">
                                            <div className="logo">
                                                <a href="index.html">
                                                    {<img src="img/logo.png" alt="" />}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-7">
                                            <div className="main-menu  d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li><a href="/HomePage">home</a></li>
                                                        <li><a href="#categorie">Categories</a></li>
                                                        <li><a href="/listing">Posts <i className="ti-angle-down"></i></a>
                                                          {/*   <ul className="submenu">

                                                                <li><a href="/post">Offers</a></li>
                                                                <li><a href="single_listings.html">requests</a></li>
                                                            </ul> */}
                                                        </li>
                                                        {/* <li><a href="/about">about</a></li> */}

                                                        <li><a href="/contact">Contact Us</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                            <div className="Appointment">
                                                <div className="book_btn d-none d-lg-block">
                                                   { context.token && <a href="auth">Sign In</a>}
                                                   { !context.token && <a href="auth">Logout</a>}
                                                   { !context.token && <a href="Addpost">Add post </a>}
                                                </div>


                                                { !context.token &&  <AiFillSetting color={'#F91842'} size={'2em'} />}
                                            </div>

                                        </div>
                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>)
        }}

    </ApiContext.Consumer>

)

export default AppHeader;