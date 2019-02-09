import React, { Component } from 'react';
import MainContainer from './MainContainer';
import { dataArr } from './dataArrays';
import ProgressBar from './ProgressBar';


const handleSkillDetail = (part) => {
    // sort skills 
    // do not make progress bar if the skills have low level
    let data = dataArr.filter((el) => el.part === part && el.level > 20);
    let dataIcon = dataArr.filter((el) => el.part === part && el.level <= 20);

    return(
        <div className="detail-container">
            {data.map((el) => <ProgressBar icon={el.icon} name={el.name} level={el.level} />)}
            <br/>
            {dataIcon.map((el) => <div className="unfeatured">{el.name}</div>)}
        </div>
    )
}

export default class Skills extends Component {
    render(){
        return(
            <MainContainer>
                <div className="skills">
                    <div className="row skills-detail">
                        <span className="col-lg-4 skill-title">
                            <h4>Front-end</h4>
                        </span>
                        <span className="col-lg-8 skill-bar">
                            {handleSkillDetail("front")}
                        </span>
                    </div>
                    <div className="row skills-detail">
                        <span className="col-lg-4 skill-title">
                            <h4>Back-end</h4>
                        </span>
                        <span className="col-lg-8 skill-bar">
                            {handleSkillDetail("back")}
                        </span>
                    </div>
                    <div className="row skills-detail">
                        <span className="col-lg-4 skill-title">
                            <h4>Other</h4>
                        </span>
                        <span className="col-lg-8 skill-bar">
                            {handleSkillDetail("other")}
                        </span>
                    </div>
                </div>
            </MainContainer>
        )
    }
}
