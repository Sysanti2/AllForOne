import React from 'react';

const AppTeam = () => {
    return (
        <div class="team_area">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title mb-40 text-center">
                        <h3>
                            Our Team
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6"></div>
       <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class="single_team">
                        <div class="team_thumb">
                            <img src={require("../img/team/3.png")} alt=""/>
                            <div class="social_link">
                                <ul>
                                    <li><a href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    </li>
                                    <li><a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    </li>
                                    <li><a href="#">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="team_info text-center">
                            <h3>Khalid Elfaker</h3>
                            <p>CO-founder</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6">
                    <div class="single_team">
                        <div class="team_thumb">
                            <img src={require("../img/team/4.png")}  alt=""/>
                            <div class="social_link">
                                <ul>
                                    <li><a href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    </li>
                                    <li><a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    </li>
                                    <li><a href="#">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="team_info text-center">
                            <h3>Ahmed El Mehdi</h3>
                            <p>CO-founder</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-6"></div>
            </div>
        </div>
    </div>
    );
};

export default AppTeam;