import React, {Component,Fragment} from 'react';

import AppSidebar from './Layout/AppSidebar';
import AppHeader from './Layout/AppHeader';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Dashboard/Admin.css';

import Wtable from './widgets/Wtable';

class categories extends Component {
    render() {
        return (
            <Fragment>
                <div id="page-top">
                    <div id="wrapper">
                    <AppSidebar active ='categories'/>
                        <div className="rowContainer">
                            <AppHeader/>
                            <div className="widgetcontainer ">
                                <div className="card100">
                                <Wtable/>
                                </div>
                               
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default categories;