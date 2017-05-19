import React from 'react';

const Footer = () =>
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
        &copy; 2017 <a href="/">gisMe</a> made with love!
      </div>
    </div>
  </footer>;

export default Footer;
