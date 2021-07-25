import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect, Switch, Router} from 'react-router-dom';
import auth from './pages/auth';
import Index from './pages/Index';
import Dashboards from './Dashboard/index';
import authContext from './context/AuthContext';
import Users from './Dashboard/users';
import regions from './Dashboard/regions';
import categories from './Dashboard/categories';
import posts from './Dashboard/posts';
import post from './pages/post';
import Addpost from './pages/Addpost';
import HomePage from './HomePage';
import AppListing from '../src/compenents/AppListing'

class App extends Component {
    state = {
        token: null,
        UserId: null
    };

    login = (token, UserId, tokenExpiration) => {

        this.setState({token: token, UserId: UserId})
    };
    logout = () => {
        this.setState({token: null, UserId: null})
    }
    render() {
        return (

            <BrowserRouter>
                <authContext.Provider
                    value={{
                    token: this.state.token,
                    userId: this.state.userId,
                    login: this.login,
                    logout: this.logout
                }}>
                    <Switch>
                        {!this.state.token && <Redirect from='/' to='/HomePage' exact/>}
                        {this.state.token && <Redirect from='/auth' to='/home' exact/>}
                        {this.state.token && <Redirect from='/home' to='/HomePage' exact/>}
                        {!this.state.token && <Redirect from='/home' to='/auth' exact/>}

                        <Route path='/HomePage' component={HomePage}/>
                        <Route path="/auth" component={auth}/>
                        <Route path='/Dashboard' component={Dashboards}/>
                        <Route path='/users' component={Users}/>
                        <Route path='/area' component={regions}/>
                        <Route path='/categories' component={categories}/>
                        <Route path='/posts' component={posts}/>
                        <Route path='/Commants' component={categories}/>
                        <Route path='/Post' component={post}/>
                        <Route path='/Addpost' component={Addpost}/>
                        <Route path='/Listing' component={AppListing}/>
                        
                         {this.state.token && (<Route path="/home" component={Index}/>)}
                        <Route path="/admin" component={null}/>
                    </Switch>
                </authContext.Provider>
            </BrowserRouter>

        )
    };
}

export default App;
