import React from 'react'
import { Link } from 'react-router-dom'
import AboutAuthor from "../pages/AboutAuthor";

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <div className="logo"></div>
            </Link>
            <div className="upload-container">
                <div className="section3">
                    <Link to='/upload'>
                        <div className="upload" />
                    </Link>
                    <img className="personal" src="../logo.png" />
                </div>
            </div>
        </div>
    )
}

export default Header