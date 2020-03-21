import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="portfolio">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {portfolioData.education &&
              portfolioData.education.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.degreeName}</h3>
                      <p className="info">{item.universityName}</p>
                      <p>
                        <em className="date">
                          {item.monthOfStarted} {item.yearOfStarted} -{' '}
                          {item.monthOfCompleted} {item.yearOfCompleted}
                        </em>
                        <span>&bull;</span> {item.GPA}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {portfolioData.work &&
              portfolioData.work.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.companyName}</h3>
                      <p className="info">
                        {item.postionName}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.monthOfStarted} {item.yearOfStarted} -{' '}
                          {item.monthOfCompleted} {item.yearOfCompleted}
                        </em>
                      </p>
                      <p>{item.positionDescription}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{portfolioData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {portfolioData.skills &&
                  portfolioData.skills.map(item => {
                    return (
                      <li>
                        {/* <span
                        className={`bar-expand ${item.skillname.toLowerCase()}`}
                      ></span> */}
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
