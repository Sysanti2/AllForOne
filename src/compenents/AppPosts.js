import React from 'react';


const post = ()=> {
    let posts = []
    for (let i = 0; i < 3; i++) 
    {
        posts.push(
        <div class="col-xl-4 col-lg-4 col-md-6">
        <div class="single_explorer">
            <div class="thumb">
                <img src="img/explorer/2.png" alt=""/>
            </div>
            <div class="explorer_bottom d-flex">

                <div class="explorer_info">
                    <h3><a href="/post">Freshly Food</a></h3>
                    <p>700/D, Kings road, Green lane, London</p>
                    <ul>
                        <li> <i class="fa fa-phone"></i>
                            +10 278 367 9823</li>
                        <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div> )
    }

    return posts;
}
const AppPosts = () => {
    

    return (
        <div class="explorer_europe">
        <div class="container">
            <div class="explorer_wrap">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-md-4">

                    </div>
                    <div class="col-xl-6 col-md-8">
                        <div class="explorer_tab">
                            <nav>
                                <div class="nav" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                                        href="#nav-home" role="tab" aria-controls="nav-home"
                                        aria-selected="true">Help Offers</a>
                                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                        href="#nav-profile" role="tab" aria-controls="nav-profile"
                                        aria-selected="false">Need Demands</a>

                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class="row">
                   
                { post()}
                     </div>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/2.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-food"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Freshly Food</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                                <div class="single_explorer">
                                    <div class="thumb">
                                        <img src="img/explorer/1.png" alt=""/>
                                    </div>
                                    <div class="explorer_bottom d-flex">
                                        <div class="icon">
                                            <i class="flaticon-beach"></i>
                                        </div>
                                        <div class="explorer_info">
                                            <h3><a href="/post">Saintmartine</a></h3>
                                            <p>700/D, Kings road, Green lane, London</p>
                                            <ul>
                                                <li> <i class="fa fa-phone"></i>
                                                    +10 278 367 9823</li>
                                                <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/3.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-food-1"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Midnight</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/4.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-barbershop"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Barber</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/5.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-cabin"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Montana Resort</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/6.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-shop"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Yelled Shopping</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-4">
                                    <div class="single_explorer">
                                        <div class="thumb">
                                            <img src="img/explorer/4.png" alt=""/>
                                        </div>
                                        <div class="explorer_bottom d-flex">
                                            <div class="icon">
                                                <i class="flaticon-barbershop"></i>
                                            </div>
                                            <div class="explorer_info">
                                                <h3><a href="/post">Barber</a></h3>
                                                <p>700/D, Kings road, Green lane, London</p>
                                                <ul>
                                                    <li> <i class="fa fa-phone"></i>
                                                        +10 278 367 9823</li>
                                                    <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/1.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-beach"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Saintmartine</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/2.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-food"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Freshly Food</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/3.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-food-1"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Midnight</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/5.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-cabin"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Montana Resort</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/6.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-shop"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Yelled Shopping</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab2">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/1.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-beach"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Saintmartine</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/2.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-food"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Freshly Food</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/3.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-food-1"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Midnight</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/4.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-barbershop"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Barber</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/5.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-cabin"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Montana Resort</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/6.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-shop"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Yelled Shopping</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-contact3" role="tabpanel" aria-labelledby="nav-contact-tab3">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/1.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-beach"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Saintmartine</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/2.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-food"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Freshly Food</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/3.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-food-1"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Midnight</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/4.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-barbershop"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Barber</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/5.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-cabin"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Montana Resort</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="single_explorer">
                                <div class="thumb">
                                    <img src="img/explorer/6.png" alt=""/>
                                </div>
                                <div class="explorer_bottom d-flex">
                                    <div class="icon">
                                        <i class="flaticon-shop"></i>
                                    </div>
                                    <div class="explorer_info">
                                        <h3><a href="/post">Yelled Shopping</a></h3>
                                        <p>700/D, Kings road, Green lane, London</p>
                                        <ul>
                                            <li> <i class="fa fa-phone"></i>
                                                +10 278 367 9823</li>
                                            <li><i class="fa fa-envelope"></i> contact@midnight.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    );
};

export default AppPosts;