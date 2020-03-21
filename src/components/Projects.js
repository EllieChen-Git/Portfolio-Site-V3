import React, { Component } from "react";
export default class Projects extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="projects">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="projects-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolioData.projects &&
                portfolioData.projects.map(item => {
                  return (
                    <div className="columns projects-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="projects-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
