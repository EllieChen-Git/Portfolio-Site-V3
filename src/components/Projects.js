import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
export default class Projects extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <section id="projects">
        <div className="row twelve">
          <div className="twelve columns collapsed">
            <h1>Find Out More about My Projects</h1>
            <div
              id="projects-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolioData.projects &&
                portfolioData.projects.map(item => {
                  return (
                    <div className="columns projects-item">
                      <h5>{item.name}</h5>

                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt=""
                          />
                          <div className="overlay">
                            <div className="projects-item-meta">
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <Button
                        className="projects-button"
                        variant="outline-info"
                        href={item.site}
                      >
                        Deployed Site
                      </Button>
                      <Button
                        className="projects-button"
                        variant="outline-info"
                        href={item.source}
                      >
                        Source Code
                      </Button>
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
