import React, { Component } from 'react';
import MainContainer from './MainContainer';
import Modal from 'react-modal';
import { pDataArr } from './dataArrays';

class Projects extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            modalIsOpen: false,
            content: {
                title: '',
                skills: [],
                desc: [],
                github: ''
            }
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleContent = this.handleContent.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        this.subtitle.style.color = '#000';
    }

    closeModal() {
        this.setState({modalIsOpen: false})
    }

    handleContent(e) {
        this.openModal();
        // find data from project data that has same id with target value 
        let data = pDataArr.filter((el) => el.id === e.target.value);

        // set each state 
        this.setState({
            content: {
                title: data[0].title,
                skills: data[0].skills,
                desc: data[0].desc,
                github: data[0].github
            } 
        });
    }
    render(){
        const { title, skills, desc, github } = this.state.content;
        const skillset = skills.map((el, index) => <span className="mb-2" key={index}>{el}</span>);
        const lists = desc.map((el, index) => <li key={index}>{el}</li>);

        return(
            <MainContainer>
                <div className="contents projects">
                <div>
                    <h1>Projects</h1><hr/>
                </div>
                    <div className="flex-container">
                    <div className="flex-item">
                    <h2>01</h2>
                    <h4>Real Chat Application</h4>
                        <div className="modal-btn"><button className="btn" onClick={this.handleContent} value="0">Detail</button></div>
                    </div>
                    <div className="flex-item">
                    <h2>02</h2>
                    <h4>Course Search App</h4>
                        <div className="modal-btn"><button className="btn" onClick={this.handleContent} value="1">Detail</button></div>
                    </div>
                    </div>
                    <div className="flex-container">
                    <div className="flex-item">
                    <h2>03</h2>
                    <h4>Data Management App</h4>
                        <div className="modal-btn"><button className="btn" onClick={this.handleContent} value="2">Detail</button></div>
                    </div>
                    <div className="flex-item">
                    <h2>04</h2>
                    <h4>Portfolio Page</h4>
                        <div className="modal-btn"><button className="btn" onClick={this.handleContent} value="3">Detail</button></div>
                    </div>
                    </div>
                    
                    <Modal 
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        contentLabel="Projects">
                        <button className="close" onClick={this.closeModal}><i className="fas fa-times"></i></button>
                            <h2 ref={subtitle => this.subtitle = subtitle}>{title}</h2>
                            <div className="project-detail container">
                                <div className="row">
                                 {skillset}
                                </div>
                                <div className="row desc">
                                    <ul>
                                        {lists}
                                    </ul>
                                </div>
                                <a className="github-btn" href={github} target="_blank" rel="noopener noreferrer">Github</a>
                            </div>
                    </Modal>
                    </div>
            </MainContainer>
        )
    }
}


// to prevent warning (react-modal)
Modal.setAppElement("#root");

export default Projects;