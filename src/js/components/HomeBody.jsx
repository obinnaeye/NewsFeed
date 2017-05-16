import React from 'react';
import Login from './Login';
import Footer from './Footer';

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
    <Footer />
  </div>;

export default HomeBody;
