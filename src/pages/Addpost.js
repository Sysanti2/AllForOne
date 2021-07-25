import React, { Component, Fragment } from 'react';

import '../style/style.css';
import AppHeader from '../compenents/AppHeader';
import RichTextExample from '../compenents/Richtext'


class Addpost extends Component {
  
  render() {
    
    return (
      <Fragment>
        <AppHeader></AppHeader>
        <div className="container-fluid mt-64">
          <div className="row">
           <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                </div>

                <div className="row">

                <div className="col-md-3">
                <div className="card mb-3" style={{ maxWidth: 18 + 'rem' }}>
                      <div className="card-header bg-light ">Categories</div>
                      <div className="card-body">
                        <form>
                          <div className="form-group row">
                            <label for="select" className="col-12 col-form-label">Select Category</label>
                            <div className="col-12">
                            <div class="input_field">
                          <select class="wide">
                            <option data-display="Choose categories">
                            Services
                            </option>
                            <option value="1">Health </option>
                            <option value="2">Grandparents </option>
                            <option value="3">Homlesse</option>
                            <option value="3">Services</option>
                            <option value="3">Gifts</option>
                            <option value="3">Animals</option>
                            <option value="3">Projects</option>
                          </select>
                        </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    
                    </div>

                    <div className="card mb-3" style={{ maxWidth: 18 + 'rem' }}>
                      <div className="card-header bg-light ">Images Gallerie</div>
                      <div className="card-body">


                      </div>
                      <div className="card-footer bg-light">
                        <a href="#">Set Featured Image</a>
                      </div>
                    </div>
                

                </div>
                  <div className="col-md-6">
                    <form>
                      <div className="form-group row">
                        <label for="text" className="col-12 col-form-label">Enter Title here</label>
                        <div className="col-12">
                          <input id="text" name="text" placeholder="Enter Title here" className="form-control here" required="required" type="text" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label for="textarea" className="col-12 col-form-label">Visual Editor</label>
                        
                      </div>
                      <RichTextExample></RichTextExample>
                    </form>
                  </div>

                  <div className="col-md-3 ">
                    <div className="card mb-3" style={{ maxWidth: 18 + 'rem' }}>
                      <div className="card-header bg-light ">share</div>
                      <div className="card-body">

                      </div>
                      <div className="card-footer bg-light">
                        <button type="button" className="btn btn-outline-secondary btnRed btn-sm">Preview</button>
                        <button type="button" className="btn btn-outline btnvitage btn-sm">Save Draft</button>
                        <button type="button" className="btn btn-outline btnmove btn-sm">Publish</button>
                      </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: 18 + 'rem' }}>
                      <div className="card-header bg-light ">Tags</div>
                      <div className="card-body">
                        <form>
                          <div className="form-group row">
                            <div className="col-9">
                              <input id="tags" name="tags" placeholder="seperate with commas" required="required" className="form-control here" type="text" />
                            </div>
                            <div className=" col-2">
                              <button name="submit" type="submit" className="btn btn-light">Add</button>
                            </div>
                            <div className="col-12">
                              <small>Seperate Tags with commas</small>
                            </div>
                          </div>
                        </form>


                      </div>
                      <div className="card-footer bg-light">
                        <a href="#">Choose from the most used tags</a>
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
  }
}

export default Addpost;