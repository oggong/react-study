import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <a
                    href={resumeData.website}
                    style={{ textDecoration: "none", color: "#7A7A7A" }}
                  >
                    <span>프로젝트 github : {resumeData.website}</span>
                  </a>
                  <br></br>
                  <a
                    href="https://github.com/oggong"
                    style={{ textDecoration: "none", color: "#7A7A7A" }}
                  >
                    <span>스터디 github : https://github.com/oggong </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
