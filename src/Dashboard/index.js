import React, {Fragment, Component} from 'react';
import AppSidebar from './Layout/AppSidebar';
import AppHeader from './Layout/AppHeader';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Dashboard/Admin.css';
import Wcard from './widgets/Wcard';
import Wchart from './widgets/Wchart';
import Wtable from './widgets/Wtable';

class index extends Component {
    render() {
        return (
            <Fragment>
                <div id="page-top">
                    <div id="wrapper">
                        <AppSidebar active ='dashboard'/>
                        <div className="rowContainer">
                            <AppHeader/>
                            <div className="widgetcontainer">
                                <Wcard/>
                                <Wcard/>
                                <Wcard/>
                                <Wcard/>
                            </div>

                            <div className="cardcontainer50">
                                <div className="card50">
                                    <Wchart/>
                                </div>

                                <div className="card50">
                                    <Wchart/>
                                </div>
                            </div>

                        
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default index;