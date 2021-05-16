import React from "react";
import { RiMapPinLine } from "react-icons/ri";

const AppSlide = () => {
  return (
    <div class="slider_area">
      <div class="single_slider  d-flex align-items-center slider_bg_1">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="findItFirst">
              <div class="col-xl-12">
                <div class="slider_text text-center justify-content-center">
                  <div class="search_form">
                    <form action="#">
                      <div class="row align-items-center">
                        <h1>Find it first on AllForOne.</h1>
                      <p>Indiegogo is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.</p>
                          <div class="input_field">
                            <input
                              type="text"
                              placeholder="What are you finding?"
                            />
                          </div>
                        
                      
                          <div class="input_field location">
                            <RiMapPinLine />
                            <input type="text" placeholder="Location" />
                          </div>

                          <div class="button_search">
                            <button class="boxed-btn2" type="submit">
                              Search
                            </button>
                          </div>
                       
                      </div>
                    </form>
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

export default AppSlide;
