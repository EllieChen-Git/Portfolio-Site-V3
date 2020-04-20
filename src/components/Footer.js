import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <footer>
        <div className="row twelve">
          <div className="twelve columns">
            <ul className="social-links">
              {portfolioData.socialLinks &&
                portfolioData.socialLinks.map(item => {
                  return (
                    <li key={item.url}>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
            <p>
              &copy;
              {new Date().getFullYear()} Ellie Chen - All Rights Reserved
            </p>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
