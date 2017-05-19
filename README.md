
gistMe
----------------

 [![Build Status](https://travis-ci.org/andela-onnenanya/newsfeed.svg?branch=develop)](https://travis-ci.org/andela-onnenanya/newsfeed)
 [![Code Climate](https://codeclimate.com/github/andela-onnenanya/newsfeed/badges/gpa.svg)](https://codeclimate.com/github/andela-onnenanya/newsfeed)
 [![Coverage Status](https://coveralls.io/repos/github/andela-onnenanya/newsfeed/badge.svg)](https://coveralls.io/github/andela-onnenanya/newsfeed)


TL,DR: Open App here https://gistmee.herokuapp.com/

### What the app does
  **_Introduction/Background Information_**

Gistme is a newsfedd app built using React-Flux Archetecture. It is intended for searching current and top news and info from over 70 news agencies across the globe. With gistMe you have more news than you can exhaust for the day; including news updates on sports, lifestyle, politics, leadership, business and more.


  **_Features_**
The app has the following main features:
* Google plus authentication for sign in
* Search news updates by their sources
* Read news Headlines with images
* Sort searched updates by <code>top</code> or <code>latest</code>
* Read the full story on the news agent's site by clicking the `Read More` button

### Why the app is useful
   The app gives you access to to and latest news updates across the globe. It can reduce your monthly bills on newspapers.


### How users can get started with the project

 **_Requirements_**
   The basic requirement for the app to run locally on the users device is NodeJs.

 **_Installations_**
    `
    $ git clone https://github.com/andela-onnenanya/newsfeed.git
    $ cd newsfeed
    $ npm install
    $ npm start
    `
  **_Testing_**

      The test specs for this app uses Jest/Enzyme. 
      Use `npm test` to run local tests.
      To see test coverage, use `npm run coverage`

### Limitations of the project
    The basic limitations of the app lie on:

**The News API**

With the API design, 

* News articles are limited to a maximum of ten (10) only.
* Article images are not guarnteed; some articles come with broken image links.

**Hosting**

* This app is hosted on heroku with a free account which makes the loading pretty slow.

### Contributing to the project

If you are interested in participating in the development of gistMe, your ideas and contributions are welcome! It is always better to start by identifying a specific part of the app you can make better. You can reach out to the team through the comments or [create a new issue](https://github.com/andela-onnenanya/newsfeed/issues/new).
 
### Authors & Contributors

 * Nnenanya Obinna K (Software Developer at andela.com)
 * Adebayo Adesanya (Learning Facilitator at andela.com)
 * Uyiosa Enabulele (Software Developer at andela.com)

### Resources

 * [Travis CI] : Continous integrations for build. Travis ensures the app build and tests pass.
 * [Code Climate] : Continous integration for code styling and quality.
 * [Coveralls] : Coveralls watches and reports the test coverage for the app.
 * [NewsAPI] : This is the REST-APi used for news updates.
 
 
[Travis CI]: https://travis-ci.org/andela-onnenanya/newsfeed/
[Code Climate]: https://codeclimate.com/github/andela-onnenanya/newsfeed
[Coveralls]: https://coveralls.io/github/andela-onnenanya/newsfeed
[NewsAPI]: https://newsapi.org/
 
### License

MIT Licensed. Copyright (c) Nnenanya Obinna K. 2017.
