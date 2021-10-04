import React, { Component } from 'react';
import './Team.css'
import syed from ".././images/syed_teampic.jfif"
import zain from ".././images/zain_teampic.jfif"
import safi from ".././images/safi_teampic.jfif"
import lubna from ".././images/lubna_teampic.png"



class Team extends Component {
    render() {
        return (
            <div className="team-container">
                <div className="team-cards">

                    <div className="team-card">
                        <div className="batchOne">
                            <h6>Syed Bokhari, Chairman</h6>
                            <img className="teamImage" src={syed} alt=""></img>
                        </div>
                        <div className="batchTwo">
                            <p>Syed is a software engineer with a breadth of experience in bioengineering, management, and full stack development. Syed is the go-to contact for Silver Story Development's technological pursuits. With thousands of hours in coding workshops, seminars, and sprints, Syed is a continuous learner and teacher passion about coding and visual design.</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="batchOne">
                            <p>Safi is a software engineer with a breadth of experience in bioengineering, management, and full stack development. Safi is the go-to contact for Silver Story Development's technological pursuits. With thousands of hours in coding workshops, seminars, and sprints, Safi is a continuous learner and teacher passion about coding and visual design.</p>
                        </div>
                        <div className="batchTwo">
                            <h6>Safi Qureshey, Director</h6>
                            <img className="teamImage" src={safi} alt=""></img>
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="batchOne">
                            <h6>Lubna Bokhari, Director</h6>
                            <img className="teamImage" src={lubna} alt=""></img>
                        </div>
                        <div className="batchTwo">
                            <p>Lubna is a software engineer with a breadth of experience in bioengineering, management, and full stack development. Lubna is the go-to contact for Silver Story Development's technological pursuits. With thousands of hours in coding workshops, seminars, and sprints, Lubna is a continuous learner and teacher passion about coding and visual design.</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="batchOne">
                            <p>Zain is a software engineer with a breadth of experience in bioengineering, management, and full stack development. Zain is the go-to contact for Silver Story Development's technological pursuits. With thousands of hours in coding workshops, seminars, and sprints, Zain is a continuous learner and teacher passion about coding and visual design.</p>
                        </div>
                        <div className="batchTwo">
                            <h6>Zain Bokhari, Project Manager</h6>
                            <img className="teamImage" src={zain} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
