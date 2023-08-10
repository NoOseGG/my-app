import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="" className="menu__link">Profile</a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">Content</a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">1</a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">2</a>
                </li>
                <li className="menu__item menu__item-settings">
                    <a href="" className="menu__link">Settings</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar