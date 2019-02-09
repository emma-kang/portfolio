import React, { Component } from 'react';
import MainContainer from './MainContainer';
import profile from './assets/profile.jpg';

export default class About extends Component {
    render(){
        return(
           <MainContainer>
               <div className="contents">
                    <div className="about container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto profile">
                            <img className="row mx-auto" src={profile} width="200" alt="it's me"></img>
                            <hr/>
                            <ul className="list-inline row">
                            <li className="list-inline-item">
                                <a className="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/yuseon-kang-1a656514a/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-link rounded-circle text-white mr-3" href="https://twitter.com/CHILLMUNG9" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-link rounded-circle text-white mr-3" href="https://github.com/emma-kang" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-link rounded-circle text-white mr-3" href="https://www.freecodecamp.org/chillmung9" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-free-code-camp"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-link rounded-circle text-white mr-3" href="mailto:emma140626@gmail.com">
                                <i className="fas fa-envelope"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-link rounded-circle text-white" href="https://codepen.io/ChillMung9/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-codepen"></i>
                                </a>
                            </li>
                        </ul>
                        </div>

                        <div className="col-lg-8 mx-auto text-left profile-detail">
                        <h3>I am Yuseon Emma Kang</h3>
                        <p>I always try to learn from everything including development skills because I believe that <span>there's no meaningless experience or knowledge</span>. 
                        Enjoying pick up new knowledge from book and challenges. This is what makes me happy. 
                        <span> I want to become a man of value anywhere.</span> For this, I will try my best.</p>
                        <hr/>
                        <h3>Education</h3> 
                        <li>Diploma in Computer Programmer | Seneca College CA (Sep 17 - Dec 18)</li>
                        <li>Bachelor in Biomedical Science | Inje University KOR (Mar 08 - Feb 12) </li>
                        <hr/>
                        <h3>Web development</h3>
                        <p>I don't have industry experience yet. I am aspiring to be a <span>full-stack developer</span> so I've developed skills which are related to web development through curricular and extracurricular. I completed diploma last December and I would like to start my career this year.
                        <span>I welcome whatever position</span>(Internship, full-time, part-time) if it is about web development. </p>
                        </div>
                        </div>
                    </div>
                    </div>
           </MainContainer>
        )
}
}
