import React from 'react';
import {NavLink} from "react-router-dom";
const setActive = ({isActive}) => isActive ? 'active' : '';
const Toolbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink exact="true" to="/" className={`${setActive} navbar-brand `}>Online-market</NavLink>
                <div className="navbar-expand">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={`${setActive} nav-link `}>Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tv" className={`${setActive} nav-link `}>Телевизоры</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/fridge" className={`${setActive} nav-link `}>Холодильники</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cutter" className={`${setActive} nav-link `}>Хренорезки</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product/add" className={`${setActive} nav-link `}>Добавить товар</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Toolbar;