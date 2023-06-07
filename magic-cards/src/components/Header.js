import React from "react";
import './style.css'
import logo from '../magic-logo.png'

class Header extends React.Component {
    render() {
        return (
            <img src={logo} alt="logo" id="logo"/>
        )
    }
}

export default Header;