import React, { Component } from 'react';
export default class NavBar extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Hi, I am {portfolioData.name} :)
              </h1>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
                {portfolioData.intro}
                <hr />
                {portfolioData.location}
              </h3>
              <hr />

              <ul className="social">
                {portfolioData.socialLinks &&
                  portfolioData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a
                          title={item.name}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
