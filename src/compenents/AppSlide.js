import React from 'react';
import {RiMapPinLine}from "react-icons/ri"; 

const AppSlide = () => {
    return (
       
    <div class="slider_area">
    <div class="single_slider  d-flex align-items-center slider_bg_1">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-xl-10">
                    <div class="slider_text text-center justify-content-center">
                        <p>Help Nearby peoples</p>
                        <h3>small gives make Big change</h3>
                        <div class="search_form">
                            <form action="#">
                                <div class="row align-items-center">
                                    <div class="col-xl-5 col-md-4">
                                        <div class="input_field">
                                            <input type="text" placeholder="What are you finding?"/>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-4">
                                        <div class="input_field location">
                                            <RiMapPinLine />
                                            <input type="text" placeholder="Location"/>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-4">
                                        <div class="button_search">
                                            <button class="boxed-btn2" type="submit">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="quality">
                            <ul>
                                <li>
                                    <button>Hotel</button>
                                </li>
                                <li>
                                    <button>Food</button>
                                </li>
                                <li>
                                    <button>Shopping</button>
                                </li>
                                <li>
                                    <button>Bar & Pubs</button>
                                </li>
                                <li>
                                    <button>Bar & Pubs</button>
                                </li>
                                <li>
                                    <button>Places</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default AppSlide;