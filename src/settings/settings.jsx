import React from "react";
import "./settings.css";
import CoefficientAdd from "./coefficients-add/coefficients-add";
import CoefficientShow from "./coefficients-show/coefficients-show";

export default class Settings extends React.Component {


    onAddCoefficient=()=> {
        console.log("add")
    };
    render() {
        let timezone = -new Date().getTimezoneOffset() / 60;
        // console.log(timezone);

        return (
            <div className="settings-wrapper">
                <div className="settings-title">
                    <h3>Настройки ДиаБота</h3>
                </div>
                <div className="settings-setup-window">
                    <div className="settings-cell-gray settings-time">
                        Ваш Часовой Пояс: GMT {timezone > 0 ? '+' : null}{timezone}
                    </div>
                    <div className="settings-cell-blue">
                        <span className="settings-coefficients-title">Добавить новый коэффициент</span>
                        <CoefficientAdd/>
                        <div className="button settings-coefficients-add-button"
                             onClick={this.onAddCoefficient}>Добавить
                        </div>
                    </div>
                    <div className="settings-cell-gray">
                        <span className="settings-coefficients-title">Твои коэффициенты</span>
                        <CoefficientShow/>
                    </div>
                </div>
            </div>
        )
    }
}