import React from "react";
import {Link} from "react-router-dom";

import "./app-header.css"
import logo from "./../images/dia_logo60x60.png"

import NavigationBar from "./navigation-bar/navigation-bar"
import Burger from "./burger/burger";

export default class AppHeader extends React.Component {


    render() {
        const {enter, showNavMenu,
            onToggleEnterClick, onToggleExitClick,
            onBurgerClick, showBurgerMenu} = this.props;
        let classNamesNavBar = 'navbar';

        if (enter) {
            classNamesNavBar += ' enter';
        }


        return (
            <div className="navbar-wrapper">
                <nav className={classNamesNavBar}>
                    <div className="navbar-first-line">
                        <Link className="navbar-brand"
                              to="/"
                              onClick={onToggleEnterClick}>
                            <img src={logo} className="nav-logo" alt=""/>
                            <div className="nav-brand-text">ДиаБот</div>
                        </Link>
                        {enter ? <Burger onBurgerClick={onBurgerClick}/> : null}
                    </div>
                    {enter ? <NavigationBar onToggleExitClick={onToggleExitClick}
                                            showNavMenu={showNavMenu}
                                            showBurgerMenu={showBurgerMenu}/> : null}

                </nav>
            </div>
        );
    };
};
