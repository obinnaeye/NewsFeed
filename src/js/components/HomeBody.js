import React from 'react';
import Login from './Login';

/**
 * @param {void}
 * @return {element} index main div
 */
const HomeBody = () =>
  <div className="wrapper">
    <div className="parallax filter-gradient blue" data-color="blue">
      <div className="parallax-background">
        <img className="parallax-background-image" src="img/giphy.gif" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5 hidden-xs">
            <div className="parallax-image">
              <img className="phone" src="img/screen696x696.jpeg" alt="phone" />
            </div>
          </div>
          <div className="col-md-6 col-md-offset-1">
            <div className="description">
              <h2>Hi Mr. News Seeker.</h2>
              <br />
              <h5>
                {`Catch the latest gists from over 74 News Agents accross the world!
                With gistMe you are a news man. It's Adventure, It's Awesome, It's Simple!`}
              </h5>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <nav className="pull-left">
          <ul>
            <li>
              <a href="/">
              Home
              </a>
            </li>
            <li>
              <a href="/">
              gistMe
              </a>
            </li>
            <li>
              <a href="https://about.me/nnenanya">
              Portfolio
              </a>
            </li>
            <li>
              <a href="https://medium.com/@obinnannenanya">
              Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="social-area pull-right">
          <a className="btn btn-social btn-facebook btn-simple" href="https://www.facebook.com/obinnaeye">
            <i className="fa fa-facebook-square" />
          </a>
          <a className="btn btn-social btn-twitter btn-simple" href="https://twitter.com/kingobi1">
            <i className="fa fa-twitter" />
          </a>
          <a className="btn btn-social btn-github btn-simple" href="https://github.com/andela-onnenanya">
            <i className="fa fa-github" />
          </a>
        </div>
        <div className="copyright">
          &copy; 2016 <a href="/">gisMe</a> made with love!
        </div>
      </div>
    </footer>
  </div>;

export default HomeBody;
