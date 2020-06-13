import React, {Component, Fragment} from 'react';

import './style/style.css';
import AppHeader from './compenents/AppHeader';
import AppSlide from './compenents/AppSlide';
import  AppCategory from './compenents/AppCategory';
import AppPosts from './compenents/AppPosts';
import AppTeam from './compenents/AppTeam';
import AppSprayed from './compenents/AppSprayed';
import AppFooter from './compenents/AppFooter';
import 'bootstrap/dist/css/bootstrap.css';
class HomePage extends Component {
    render() {
        return (
            <Fragment>

                <AppHeader/>
                <AppSlide />
                <AppCategory />
                <div class="container">
                    <h3 class="titre">Lastest offers & Demandes
                    </h3>
                </div>
                <AppPosts/>
                <AppTeam/>
                <AppSprayed/>
                <AppFooter/>
            </Fragment>
        );
    }
}

export default HomePage;