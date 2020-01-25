import React from "react";

import "./coefficients-show.css";

export default class CoefficientShow extends React.Component {

    render() {
        return (
            <div className="settings-coefficients-show-list">
                <table className="settings-coefficients-show-table">
                    <thead>
                    <tr>
                        <td className="settings-coefficients-show-cell">Время</td>
                        <td className="settings-coefficients-show-cell">К1</td>
                        <td className="settings-coefficients-show-cell">К2</td>
                        <td className="settings-coefficients-show-cell">ЦЕИ</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="settings-coefficients-show-cell">03:00</td>
                        <td className="settings-coefficients-show-cell">1.3</td>
                        <td className="settings-coefficients-show-cell">0.3</td>
                        <td className="settings-coefficients-show-cell">2.3</td>
                        <td className="settings-coefficients-show-cell delete-toggle">
                            УДАЛИТЬ
                        </td>
                    </tr>
                    <tr>
                        <td className="settings-coefficients-show-cell">14:00</td>
                        <td className="settings-coefficients-show-cell">1.5</td>
                        <td className="settings-coefficients-show-cell">0.4</td>
                        <td className="settings-coefficients-show-cell">2.1</td>
                        <td className="settings-coefficients-show-cell delete-toggle">
                            УДАЛИТЬ
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}