import React, { Component } from 'react';
import NavBar from './NavBar';

export default class MainContainer extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container contents-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

