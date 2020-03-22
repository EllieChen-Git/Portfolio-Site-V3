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
                          {item.monthStarted} {item.yearStarted} -{' '}
                          {item.monthCompleted} {item.yearCompleted}
                        </em>{' '}
                        | {item.grade}
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
                        {item.positionName}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.monthStarted} {item.yearStarted} -{' '}
                          {item.monthCompleted} {item.yearCompleted}
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
              <span>Tech Stacks</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <ul className="skills">
              {portfolioData.skills &&
                portfolioData.skills.map(item => {
                  return (
                    <>
                      <p>{item.skillsDescription}</p>
                      <li>
                        <em>{item.skillName}</em>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
