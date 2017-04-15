import React from 'react';
import Login from './login';

class HomeBody extends React.Component {
  render() {
    return(
      <div className="wrapper">
            <div className="parallax filter-gradient blue" data-color="blue">
                <div className="parallax-background">
                    <img className="parallax-background-image" src="img/giphy.gif" />
                </div>
                <div className= "container">
                    <div className="row">
                        <div className="col-md-5 hidden-xs">
                            <div className="parallax-image">
                                <img class="phone" src="img/screen696x696.jpeg" styles="margin-top: 20px"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-md-offset-1">
                            <div className="description">
                                <h2>Hi Mr. News Seeker.</h2>
                                <br />
                                <h5>Catch the latest gists from over 74 News Agents accross the world! With gistMe you are a news man. It's Adventure, It's Awesome, It's Simple!</h5>
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
                                <a href="#">
                                Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Company
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="social-area pull-right">
                        <a className="btn btn-social btn-facebook btn-simple">
                        <i className="fa fa-facebook-square"></i>
                        </a>
                        <a className="btn btn-social btn-twitter btn-simple">
                        <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn btn-social btn-pinterest btn-simple">
                        <i className="fa fa-pinterest"></i>
                        </a>
                    </div>
                    <div className="copyright">
                        &copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love
                    </div>
                </div>
            </footer>
        </div>
    );
  }
}

module.exports = HomeBody;