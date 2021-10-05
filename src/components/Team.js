import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faFacebook
} from "@fortawesome/free-brands-svg-icons";
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
                            <a href="linkedin.com/in/syed-wamiq-bokhari-24b4485"
                                className="linkedin social">
                                <FontAwesomeIcon icon={faLinkedin} size="4x" />
                            </a>
                        </div>
                        <div className="batchTwo">
                            <p>Syed is an engineer with a decades of experience in petroleum exploration, discovery and offshore efforts. He has been on several corporate boards in the energy sector. He has served as Chief Executive of National Oil Company and a listed Australian oil and gas company. He has led transformational changes in the industry that have been the subject of a case study published by Harvard University Business School and LUMS.</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="batchOne">
                            <p>
                                Safi is a successful technology entrepreneur, executive and board member with over thirty years of experience in the technology, investment banking and venture capital industries. He is best known as a co-founder and CEO of AST Research, a Fortune 500 public company acquired by Samsung Electronics. His business <a href="https://www.vampiretools.com">Vampire Tools</a> specializes serves enthusiasts and professionals looking for long-lasting mechanical tools and shears.
                            </p>
                        </div>
                        <div className="batchTwo">
                            <h6>Safi Qureshey, Director</h6>
                            <a href="linkedin.com/in/safi-qureshey-15701021b"
                                className="linkedin social">
                                <FontAwesomeIcon icon={faLinkedin} size="4x" />
                            </a>
                            <img className="teamImage" src={safi} alt=""></img>

                        </div>
                    </div>
                    <div className="team-card">
                        <div className="batchOne">
                            <h6>Lubna Bokhari, Director</h6>
                            <img className="teamImage" src={lubna} alt=""></img>
                            <a href="https://www.facebook.com/WarAgainstRape1989/videos/zoom-meeting-with-un75-resident-coordinators-office-in-pakistan/168977901273525/?__so__=permalink&__rv__=related_videos&redirect=false"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="4x" />
                            </a>
                        </div>
                        <div className="batchTwo">
                            <p>Lubna is Medical Doctor, currently involved in NGO and nonprofit work for underserved communities. She serves as the Overseas Fund Raising liaison for <a href="http://war.org.pk/human-resource/">WAR.</a> </p>

                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="batchOne">
                            <p>Zain is a software engineer with a breadth of experience in bioengineering, management, and full stack development. Zain is the go-to contact for Silver Story Development's technological pursuits. With thousands of hours in coding workshops, seminars, and sprints, Zain is a continuous learner and teacher passion about coding and visual design.</p>
                        </div>
                        <div className="batchTwo">
                            <h6>Zain Bokhari, Project Manager</h6>
                            <a href="https://github.com/zbokhari" className="github social">
                                <FontAwesomeIcon icon={faGithub} size="4x" />
                            </a>
                            <a href="linkedin.com/in/safi-qureshey-15701021b"
                                className="linkedin social">
                                <FontAwesomeIcon icon={faLinkedin} size="4x" />
                            </a>
                            <img className="teamImage" src={zain} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
