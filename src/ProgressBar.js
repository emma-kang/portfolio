import React, { Component } from 'react';

export default class ProgressBar extends Component {
    render(){
        return(
            <div className="row skill-item">
            <h6 className="col"><i className={this.props.icon}></i> {this.props.name}</h6>
                <div className="col progress-bar pl-0">
                    <div className="bar" style={{width: `${this.props.level}%`}}></div>
                </div>
            </div>
        )
    }
}