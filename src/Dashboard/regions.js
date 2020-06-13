import React, {Fragment, Component} from "react";

import RadioMap from './components/radio-map';

import AppSidebar from './Layout/AppSidebar';
import AppHeader from './Layout/AppHeader';
import Wtable from './widgets/Wtable';
import '../style/Dashboard/map.css';

import {RiAddLine} from "react-icons/ri";

class regions extends Component {

    state={
        data:  [ {'id': '23892DJ9832D', 'name': `Tanger-Tétouan`},
                {'id': '23892DJ9832D', 'name': `Gharb-Chrarda-Beni Hssen`},
               {'id': '23892DJ9832D', 'name': `Taza-Al Hoceima-Taounate`},
                {'id': '23892DJ9832D', 'name': `L'Oriental`},
                {'id': '23892DJ9832D', 'name': `Fès-Boulemane`},
              {'id': '23892DJ9832D', 'name': `Meknès-Tafilalet`},
                {'id': '23892DJ9832D', 'name': `Rabat-Salé-Zemmour-Zaer`},
                {'id': '23892DJ9832D', 'name': `Chaouia-Ouardigha`},
                {'id': '23892DJ9832D', 'name': `Doukhala-Abda`},
                 {'id': '23892DJ9832D', 'name': `Marrakech-Tensift-Al Haouz`},
                {'id': '23892DJ9832D', 'name': `Tadla-Azilal`},
                 {'id': '23892DJ9832D', 'name': `Souss-Massa-Drâa`},
                 {'id': '23892DJ9832D', 'name': `Laâyoune-Boujdour-Sakia el Hamra`},
                {'id': '23892DJ9832D', 'name': `Guelmim-Es Smara`},
                {'id': '23892DJ9832D', 'name': `Oued ed Dahab-Lagouira`},

        ]
    }
    
    render() {
        return (

            <Fragment>

                <div id="page-top">
                    <div id="wrapper">
                        <AppSidebar active='area'/>
                        <div className="rowContainer">
                            <AppHeader/>
                            <div className="widgetcontainer-nopadding">
                                <a href="#" class="btn btn-success btn-txt-primary">
                                    <RiAddLine size={'2em'}/>
                                    Add New Area</a>
                            </div>
                            <div className="widgetcontainer ">
                                <div className="card100">
                                    <Wtable data={this.state.data}/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default regions;