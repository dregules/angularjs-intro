[![Code Climate](https://codeclimate.com/github/dregules/git-search/badges/gpa.svg)](https://codeclimate.com/github/dregules/git-search)

# Github Search Engine
This is an app built with angular.js and served by a Sinatra server that calls Github's open API and returns user profiles.

For deployed version visit:  https://salty-lowlands-7776.herokuapp.com/


##Installation Requirements
NPM [Instructions here](http://blog.teamtreehouse.com/install-node-js-npm-mac)

`gem install bundler`

`npm install -g bower`

###Versions used:
`npm -v` -  *2.14.2*
`bower -v` - *1.5.2*
`ruby -v` - *2.2.1p85*

##Getting Started
`git clone https://github.com/dregules/git-search`
`cd git-search`
`npm install`
`bower install`
`bundle install`
`ruby app.rb`

go to localhost:3000

##Running tests
For Karma, simply run `npm test`

For Protractor e2e

`webdriver-manager start`

Open new terminal tab and run

`http-server`

Open new terminal tab and run

`protractor test/e2e/conf.js`
