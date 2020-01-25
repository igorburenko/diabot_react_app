import React from "react";
import {Link} from "react-router-dom";
import "./navigation-bar.css"

export default class NavigationBar extends React.Component {
    render() {
        const {showNavMenu, onToggleExitClick, showBurgerMenu} = this.props;

        let classNameNavigationMenu = 'navigation-bar',
            classNameHeaderList = 'header-list';

        if (showNavMenu) {
            classNameNavigationMenu += ' active';
        }

        if(showBurgerMenu){
            classNameHeaderList += ' burger-active'
        }

        return (
            <div className={classNameNavigationMenu}>
                <div className="header-menu">
                    <ul className={classNameHeaderList}>
                        <li>
                            <Link className="navigation-item" to="/calculator">Калькулятор</Link>
                        </li>
                        <li>
                            <Link className="navigation-item" to="/newprod">Новый продукт</Link>
                        </li>
                        <li>
                            <Link className="navigation-item" to="/setup">Настройки</Link>
                        </li>
                        <li>
                            <Link className="navigation-item" to="/help">Помощь</Link>
                        </li>
                        <li>
                            <Link className="navigation-item"
                                  onClick={onToggleExitClick}
                                  to="/">Выход</Link>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}