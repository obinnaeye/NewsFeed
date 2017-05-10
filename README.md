
gistMe
----------------

 [![Build Status](https://travis-ci.org/andela-onnenanya/newsfeed.svg?branch=develop)](https://travis-ci.org/andela-onnenanya/newsfeed)
 [![Code Climate](https://codeclimate.com/github/andela-onnenanya/newsfeed/badges/gpa.svg)](https://codeclimate.com/github/andela-onnenanya/newsfeed)
 [![Coverage Status](https://coveralls.io/repos/github/andela-onnenanya/newsfeed/badge.svg)](https://coveralls.io/github/andela-onnenanya/newsfeed)


TL,DR: Open App here https://gistmee.herokuapp.com/

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




## To Contribute or Run the App Locally ##

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


[Google Sign-In]: https://developers.google.com/identity/sign-in/web/

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
 * Uyiosa Enabulele (Software Developer at andela.com)

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


#Limitations#

The basic limitations of the app lie on:

**The News API**
With the API design, 

* News articles are limited to a maximum of ten (10) only.
* Article images are not guarnteed; some articles come with broken image links.
* 

**Hosting**

* This app is hosted on heroku with a free account which makes the loading pretty slow.


#Challenges#
One of the main challenges faced in building this app is dependency management. We had a couple of cases where some
modules did not meet peer dependencies. One of such cases is the react-select module which we use for the search auto-complete.
The module used a lower version of react which violated most of the airbnb styling rules integrated in the project.
We highly recommend that if you wish to use this app locally, you may consider checking out a better auto-complete module that is compatible with your dependencies.

#Credits#
* Andela Family
* All Cohort 25 fellows
* Newsapi.org