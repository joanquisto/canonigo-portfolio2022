import React from "react";
import Typical from "react-typical";
import "./Profile.css";


export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                        <a href="https://www.facebook.com">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/jcquisto">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/home">
                            <i className="fa fa-twitter-square"></i>
                        </a>
                        <a href="https://www.youtube.com/watch?v=X-yIEMduRXk">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href="https://github.com/joanquisto">
                            <i className="fa fa-github-square"></i>
                        </a>
                        <a href="https://gitlab.com/joanaq.canonigo">
                            <i className="fa fa-gitlab"></i>
                        </a>

                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Joana</span>
                       </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Ethusiastic Developer ☕",
                                    1000,
                                    "Full Stack Dev 😎 ",
                                    1000,
                                    "React JS Dev 💻",
                                    1000,
                                    "Traveler 🌍",
                                    1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                To be with a great company culture, and awesome colleagues to work with and help me grow.
                            </span>
                        </span>
                        </div>
                        <div className="profile-options">
                            <button className="btn primary-btn">
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href="ASM.doc" downlaod="ASM.doc">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}
