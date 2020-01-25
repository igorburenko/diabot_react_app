import React from "react";

import "./app.css"
import AppHeader from "../app-header/app-header";
import EnterScreen from "../enter-screen/enter-screen";
import Authentication from "../authentication/authentication";
import Help from "../help/help";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Settings from "../settings/settings";
import Calculator from "../calculator/calculator";
import NewProductAdder from "../new-product-adder/new-product-adder";

export default class App extends React.Component {

    state = {
        authorize: true,
        showNavMenu: true,
        showBurgerMenu: true,
        userName: null,
        userMail: null,
        photo: null,
        fbId: null
    };

    authData = (data) => {

        if (data.status !== "unknown") {
            console.log(data);
            this.setState(({userName, userMail, photo, fbId}) => {
                const newData = {
                    name: data.name,
                    mail: data.email,
                    photos: data.picture.data.url,
                    fbid: data.userID
                };

                return {
                    userName: newData.name,
                    userMail: newData.mail,
                    photo: newData.photos,
                    fbId: newData.fbid,
                    authorize: true
                };

            });
            setTimeout(() => this.setState({showNavMenu: true}), 400)
        }
    };


    onToggleEnterClick = () => {
        this.setState({
            authorize: true
        });
        setTimeout(() => this.setState({showNavMenu: true}), 400)
    };

    onToggleExitClick = () => {
        this.setState({
            showNavMenu: false
        });
        setTimeout(() => this.setState({authorize: false}), 400)
    };

    onBurgerClick = () => {
        this.setState((state)=> {
            return {
                showBurgerMenu: !state.showBurgerMenu
            };
        });
        // setTimeout(() => this.setState({showNavMenu: false}), 400)
    };


    render() {
        return (
            <Router>
                <div className="dia-bot">
                    <AppHeader
                        enter={this.state.authorize}
                        showNavMenu={this.state.showNavMenu}
                        onToggleEnterClick={this.onToggleEnterClick}
                        onToggleExitClick={this.onToggleExitClick}
                        onBurgerClick={this.onBurgerClick}
                        showBurgerMenu={this.state.showBurgerMenu}/>
                    {this.state.authorize ? null : <Authentication authData={this.authData}/>}
                    {this.state.showNavMenu ?
                                <div className="main-window">
                                    <Route path="/calculator" component={Calculator}/>
                                    <Route path="/setup" component={Settings}/>
                                    <Route path="/newprod" component={NewProductAdder}/>
                                    <Route path="/help" component={Help}/>
                                    <Route path="/"
                                           exact
                                           render={() => <EnterScreen showEnterScreen={this.state.showNavMenu}
                                                                      username={this.state.userName}/>}/>
                                </div>
                        : null}


                </div>
            </Router>
        );
    };
}