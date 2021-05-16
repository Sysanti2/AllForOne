import { Fragment } from "react";
import React from "react";

const AppListing = () => {
  return (
    <Fragment>
      <div className="">
        <div class="explorer_europe list_wrap">
          <div class="miniContainner">
            <div class="row">
              {/*left side */}
              <div class="col-xl-3 col-lg-3">
                <div class="filter_wrap">
                  <h3 class="exp_title">Advanced Filter</h3>
                  <div class="filter_main_wrap">
                    <div class="filter_inner">
                      <form action="#">
                        <div class="input_field">
                          <input
                            type="text"
                            placeholder="What are you finding?"
                          />
                          <button class="submit_btn" type="submit">
                            {" "}
                            <i class="fa fa-search"></i>{" "}
                          </button>
                        </div>
                        <div class="input_field">
                          <select class="wide">
                            <option data-display="Choose categories">
                              cat 1
                            </option>
                            <option value="1">cat 2</option>
                            <option value="2">cat 3</option>
                            <option value="3">cat 4</option>
                          </select>
                        </div>
                        <div class="input_field">
                          <select class="wide">
                            <option data-display="Location">Rabat</option>
                            <option value="1">Casa</option>
                            <option value="2">Tangier</option>
                          </select>
                        </div>
                        <div class="input_field ">
                          <div class="inner">
                            <div class="check_1">
                              <input
                                type="checkbox"
                                id="fruit1"
                                name="fruit-1"
                                value="Apple"
                              />
                              <label for="fruit1">Requests</label>
                            </div>
                            <div class="check_1">
                              <input
                                type="checkbox"
                                id="fruit4"
                                name="fruit-4"
                                value="Strawberry"
                              />
                              <label for="fruit4">Offers</label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="last_range">
                      <button class="boxed-btn2">Reset</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*right side */}
              <div class="col-xl-9 col-lg-9">
                <h3 class="exp_title">3 Listings are available</h3>
                <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="single_explorer">
                      <div class="thumb">
                        <img
                          src="https://source.unsplash.com/1600x900/?nature,fire"
                          alt=""
                        />
                      </div>
                      <div class="explorer_bottom d-flex">
                        <div class="explorer_info">
                          <h3>
                            <a href="#">In Search of Tomorrow</a>
                          </h3>
                          <p>
                            The definitive ‘80s Sci-Fi documentary featuring
                            interviews with actors, directors, and SFX experts.
                          </p>

                          <div className="blog_right_sidebar minitags">
                            <aside class="minitag_cloud_widget">
                              <ul class="list">
                                <li>
                                  <a href="#">project</a>
                                </li>
                                <li>
                                  <a href="#">love</a>
                                </li>
                                <li>
                                  <a href="#">technology</a>
                                </li>
                                <li>
                                  <a href="#">travel</a>
                                </li>
                                <li>
                                  <a href="#">restaurant</a>
                                </li>
                                <li>
                                  <a href="#">life style</a>
                                </li>
                                <li>
                                  <a href="#">design</a>
                                </li>
                                <li>
                                  <a href="#">illustration</a>
                                </li>
                              </ul>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="single_explorer">
                      <div class="thumb">
                        <img
                          src="https://source.unsplash.com/1600x900/?nature"
                          alt=""
                        />
                      </div>

                      <div class="explorer_bottom d-flex">
                        <div class="explorer_info">
                          <h3>
                            <a href="#">Saintmartine</a>
                          </h3>
                          <p>700/D, Kings road, Green lane, London</p>
                          <div className="blog_right_sidebar minitags">
                            <aside class="minitag_cloud_widget">
                              <ul class="list">
                                <li>
                                  <a href="#">project</a>
                                </li>
                                <li>
                                  <a href="#">love</a>
                                </li>
                                <li>
                                  <a href="#">technology</a>
                                </li>
                                <li>
                                  <a href="#">travel</a>
                                </li>
                                <li>
                                  <a href="#">restaurant</a>
                                </li>
                                <li>
                                  <a href="#">life style</a>
                                </li>
                                <li>
                                  <a href="#">design</a>
                                </li>
                                <li>
                                  <a href="#">illustration</a>
                                </li>
                              </ul>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="single_explorer">
                      <div class="thumb">
                        <img
                          src="https://source.unsplash.com/1600x900/?help"
                          alt=""
                        />
                      </div>
                      <div class="explorer_bottom d-flex">
                        <div class="explorer_info">
                          <h3>
                            <a href="#">
                              EDGE - The First Modular Work From Home Kit
                            </a>
                          </h3>
                          <p>
                            Your workstation, anywhere. Guaranteed to boost your
                            productivity.
                          </p>
                          <div className="blog_right_sidebar minitags">
                            <aside class="minitag_cloud_widget">
                              <ul class="list">
                                <li>
                                  <a href="#">project</a>
                                </li>
                                <li>
                                  <a href="#">love</a>
                                </li>
                                <li>
                                  <a href="#">technology</a>
                                </li>
                                <li>
                                  <a href="#">travel</a>
                                </li>
                                <li>
                                  <a href="#">restaurant</a>
                                </li>
                                <li>
                                  <a href="#">life style</a>
                                </li>
                                <li>
                                  <a href="#">design</a>
                                </li>
                                <li>
                                  <a href="#">illustration</a>
                                </li>
                              </ul>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-12">
                    <div class="page_nation text-center">
                      <ul>
                        <li>
                          <a href="#">01</a>
                        </li>
                        <li>
                          <a href="#">02</a>
                        </li>
                        <li>
                          <a href="#">03</a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <i class="ti-angle-right"></i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AppListing;
