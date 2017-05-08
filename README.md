
gistMe
----------------

[![Build Status](https://travis-ci.org/andela-onnenanya/newsfeed.svg?branch=develop)](https://travis-ci.org/andela-onnenanya/newsfeed)


## News Update & Newsfeeds ##

<p align="center">
  <img src="./public/img/home.png" alt="gitme Home" title="gisMe Home Page"/>
</p>

Gistme is a newsfedd app built using React-Flux Archetecture. It is intended for searching current and top news and info from over 70 news agencies across the globe.

Examples of what you can do are:

* Search news updates by their sources
* Read news Headlines with images
* Sort searched updates by <code>top</code> or <code>latest</code>
* Read the full story on the news agent's site

<p align="center">
  <img src="./public/img/news-page.png" alt="gitme news page" title="gisMe News Page"/>
</p>


## GistMe Framework ##


**Dependencies**
All the dependencies for this app is located in the package.json file.
Installation through npm is recommended::

Run:
    $ npm install

**ENV Variables**
This app require the following environment variables.
You have to create your own account with the relevant third parties to update the values.

* MONGODB_URI=mongodb:
* GOOGLE_ID=Your Google Auth ID from [Google Sign-In]
* GOOGLE_SECRET= see [Google Sign-In]
* APP_URL= Your App Index URL
* authorizationURL= See [Google Sign-In]
* tokenURL= See [Google Sign-In]
* APIKey= Get this from [NewsApi]


[Google Sign-In]: (https://developers.google.com/identity/sign-in/web/)

**Start App**
Start App with:
    $ npm start

**Test**
To Run Test, simply run the following on you CLI:

    $ npm test
  
To Run Test Coverage, simply run the following on you CLI:

    $ npm run coverage


**Authors & Contributors**

 * Nnenanya Obinna K (Software Developer at andela.com)
 * Adebayo Adesanya (Learning Facilitator at andela.com)

**Resources**

 * [Code] 
 * [Travis CI] 
 * [Code Climate]
 * [Coveralls]
 * [NewsAPI]
 
 
[Code]: https://github.com/andela-onnenanya/newsfeed
[Travis CI]: https://travis-ci.org/andela-onnenanya/newsfeed/
[Code Climate]: https://codeclimate.com/github/andela-onnenanya/newsfeed
[Coveralls]: https://coveralls.io/github/andela-onnenanya/newsfeed
[NewsAPI]: https://newsapi.org/