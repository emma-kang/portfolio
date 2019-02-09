import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <input type="checkbox" id="nav" className="hidden" />
                <label htmlFor="nav" className="nav-btn">
                    <i></i>
                    <i></i>
                    <i></i>
                </label>
                <div className="nav-wrapper">
                    <ul>
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}