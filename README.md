# Starwars React App

Exam Front-end P3
André Maurits Robbe
0116479-79



Github repository: https://github.com/andrerobbe/react-app-school
Online on: https://starwars.andre.robbe.mtantwerp.eu/


Loading Animation (CSS based):
URL /loading


## To run locally:
In starwars folder run commands:
$ npm install
$ yarn start

In api folder run commands:
$ npm install
$ yarn start



## To run online:
-Go to api folder and run command: $ npm install
-Go to api/index.js and change .listen(...) to " .listen(process.env.PORT || 1337) "
-Deploy API to Heroku.com (https://devcenter.heroku.com/articles/deploying-nodejs)
-Go to starswars/src/services/starships.services.js
-Change localhost:1337 to URL generated by Heroku (in my case https://shielded-springs-12625.herokuapp.com)
-Go to starwars folder and run command: $ yarn build
-Go into the build folder and make a .htaccess file with the following:
	Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]

-FTP everything from inside the build folder to the site.