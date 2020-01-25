import React from "react";

import "./enter-screen.css"

export default class EnterScreen extends React.Component {

    render() {
        const {username, showEnterScreen} = this.props;
        let classNameEnterScreen = 'enter-screen';
        if (showEnterScreen) {
            classNameEnterScreen += ' active';
        }
        return (
            <div className={classNameEnterScreen}>
                <h2 className="enter-screen-text-main">Привет, {username}!</h2>
                <hr className="enter-screen-line"/>
                <h4 className="enter-screen-text-second">Я ДиаБот<br/>
                Начем с меню настроек
                </h4>
            </div>
        )
    }
}