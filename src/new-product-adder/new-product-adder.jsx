import React from "react";
import "./new-product-adder.css"
export default class NewProductAdder extends React.Component {

    render() {

        return (
            <div className="wrapper">
                <div className="settings-cell-blue">
                    <form className="settings-coefficients" action="" method="post" name="contact_form">
                        <ul>
                            <li>
                                <span className="settings-coefficients-title">Коэффициенты</span>
                            </li>
                            <li>
                                <label htmlFor="name">Название продукта:</label>
                                <input className="settings-coefficients-input" type="text" name="name"/>
                            </li>
                            <li>
                                <label htmlFor="name">Белки:</label>
                                <input className="settings-coefficients-input" type="text" name="proteins"/>
                            </li>
                            <li>
                                <label htmlFor="name">Жиры:</label>
                                <input className="settings-coefficients-input" type="text" name="fats"/>
                            </li>
                            <li>
                                <label htmlFor="name">Углеводы:</label>
                                <input className="settings-coefficients-input" type="text" name="carbohydrate"/>
                            </li>
                            <li>
                                <button className="button" type="button">
                                    Добавить
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}