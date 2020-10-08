import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import './App.css';
import Layout from "./higherOrderedComponents/Layout/Layout";
import Queue from "./containers/Queue/Queue";
import AuthService from "./services/auth/auth.service";

class App extends Component {

    state = {
        user: null,
        applicationVersionNumber: "BETA: 0.1.0"
    };

     async componentDidMount() {
        const validToken = await AuthService.isUserTokenValid();

        if (validToken === true) {
            this.loginHandler();
        } else {
            this.logOutHandler();
        }
    }

    loginHandler = () => {
        const user = AuthService.getCurrentUser();
        if (user) {
            this.setState({user: user});
        }
    };

    logOutHandler = () => {
        AuthService.logout();
        this.setState({user: null})
    };

    render() {

        let routes = (
            <Switch>
                <Route path="/" exact render={() => (<Queue user={this.state.user}/>)}/>
                <Redirect to="/"/>
            </Switch>
        );

        return (
            <div className="App">
                <Layout user={this.state.user} loginHandler={this.loginHandler} logoutHandler={this.logOutHandler}  versionNumber={this.state.applicationVersionNumber} >
                    {routes}
                </Layout>
            </div>
        );
    }
}

export default withRouter(App);