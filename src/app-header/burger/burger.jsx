import React from "react";
import "./burger.css";


export default class Burger extends React.Component {


    render() {
        const {onBurgerClick} = this.props;

        return (
            <div className="burger-wrapper"
                 onClick={onBurgerClick}>
                <div className="header-burger">
                    <span></span>
                </div>
            </div>
        );
    };
};
