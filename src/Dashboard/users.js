import React, {Component,Fragment} from 'react';

import AppSidebar from './Layout/AppSidebar';
import AppHeader from './Layout/AppHeader';

import '../style/Dashboard/Admin.css';

import Wtable from './widgets/Wtable';

class users extends Component {
    render() {
        return (
            <Fragment>
                <div id="page-top">
                    <div id="wrapper">
                    <AppSidebar active ='users'/>
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

export default users;