import React, { Component } from 'react';
import MainContainer from './MainContainer';

export default class Home extends Component {
    render(){
        return(
            <MainContainer>
            <div className="contents main">
                <h1 className="title">Yuseon Kang</h1>
                <div className="intro">
                    Hello, This is Yuseon Emma Kang who is a coding/cat/coffee addict.
                    <p>I am looking for a full-time, part-time or internship in the role of <span>a junior web developer</span></p>
                </div>
            </div>
            </MainContainer>
        )
    }
}