import React from 'react';
const AppHeader = () => {
    return (
       
    <header>
    <div class="header-area ">
        <div id="sticky-header" class="main-header-area">
            <div class="container-fluid ">
                <div class="header_bottom_border">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-2">
                            <div class="logo">
                                <a href="index.html">
                                    {/*<img src="img/logo.png" alt=""/>*/}
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-7">
                            <div class="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><a href="/HomePage">home</a></li>
                                        <li><a href="">Categories</a></li>
                                        <li><a href="#">Posts <i class="ti-angle-down"></i></a>
                                            <ul class="submenu">
                                                
                                                <li><a href="/post">Offers</a></li>
                                                <li><a href="single_listings.html">requests</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/about">about</a></li>
                                      
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                            <div class="Appointment">
                                <div class="book_btn d-none d-lg-block">
                                    <a href="auth">Sign In</a>
                                </div>
                                <div class="book_btn d-none d-lg-block">
                                    <a href="auth">Sign Up</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</header>

    );
};

export default AppHeader;