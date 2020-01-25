import React from "react";

import "./coefficients-add.css";

export default class CoefficientAdd extends React.Component {

    state = {
        time: '03:00',
        k1: '0.4',
        k2: '0.3',
        cei: '2.3'
    };

    handleChange = (e) => {
        // console.log(this.state);
        this.setState({
        [e.target.name]: e.target.value
            });


    };

    render() {
        return (
            <div className="settings-coefficients-add-list">
                <div className="settings-coefficients-add-list-cell">
                    <span className="settings-coefficients-add-list-title">Время</span>
                    <input className="settings-coefficients-add-list-input" size="5"
                           name="time" id="time"
                           type="time" value={this.state.time}
                           onChange={this.handleChange}/>
                </div>
                <div className="settings-coefficients-add-list-cell">
                    <span className="settings-coefficients-add-list-title">K1</span>
                    <input className="settings-coefficients-add-list-input" size="4"
                           name="k1" min="0" max="2.5" step="0.1"
                           type="text" value={this.state.k1}
                           onChange={this.handleChange}/>
                </div>
                <div className="settings-coefficients-add-list-cell">
                    <span className="settings-coefficients-add-list-title">K2</span>
                    <input className="settings-coefficients-add-list-input" size="4"
                           name="k2" min="0" max="2.5" step="0.1"
                           type="text" value={this.state.k2}
                           onChange={this.handleChange}/>
                </div>
                <div className="settings-coefficients-add-list-cell">
                    <span className="settings-coefficients-add-list-title">ЦЕИ</span>
                    <input className="settings-coefficients-add-list-input" size="4"
                           name="cei" min="0" max="4" step="0.1"
                           type="text" value={this.state.cei}
                           onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}