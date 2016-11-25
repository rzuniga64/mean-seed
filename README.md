#Todo Application

This application was developed with the latest released 2.x.x. versions of Angular 2 and  7.1 of Node.js.  
All the latest dependencies for Node.js, Mongoose (MongoDB api), Angular, and Gulp (build system) were constantly updated 
during development in package.json at the time of this writing. 

# MongoDB

Please note that the server configuration requires a running MongoDB server for the index page to work properly.

Local installation : https://mongodb.com
1.	Download the local installation from [https://www.mongodb.com/download-center?jmp=nav#community](https://www.mongodb.com/download-center?jmp=nav#community).
2.	Select the operating system from the dropdown menu and press the Download button.
3.	On Windows follow these instructions: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows. 
4.	To start MongoDB server, run mongod.exe. For example, from the Command Prompt:
	'C:\mongodb\bin\mongod.exe'
5.	To connect to MongoDb through the mongo.exe shell, open another Command Prompt and type
    
    `C:\mongodb\bin\mongo.exe`

6.	Begin using MongoDB. To help you start using MongoDB, Follow the [Getting Started Guide for Node js](http://mongodb.github.io/node-mongodb-native/2.2/quick-start/?_ga=1.221948440.108127061.1474333829)

Database as a Service
1.	Database-as-a-service: [https://mlab.com/](https://mlab.com)
2.	Create an mlab account
3.	Press ‘Create new’ button
4.	Select a cloud provider
5.	Select Single-node
6.	Select ‘Sandbox’ (free)
7.	Select a database name
8.	Press ‘Create new MongoDB deployment
9.	Click on the database
10.	Click on ‘Users’ and add a user and password to the database.
11.	The database is ready to use.
12.	If using the database-as-a-service update the /config/config.json file with the database username and password.

# Installing the Application

This repository requires node.js, availible for free for all platforms on [https://nodejs.org/en/](https://nodejs.org/en/).

After you have node.js installed, the repository can be installed with 

    `npm install`

#Gulp Build System

The project uses Gulp to build the application and convert TypeScript to JavaScript. All the Gulp dependencies are listed
und 'devDependencies' section of the package.json file and 'typings' module is listed under 'dependencies.'
 
 Build on the command line
 1. For development on command line please type the command below. This will run a build script listed in package.json 
 and will start a watcher which listens for any changes to typescript files. 
    
    `npm run gulp`.  
    
 Build on WebStorm
 1.	Start a Guilp task runner which will compile TypeScript files by pressing Alt+F11 and specify the default gulp file.
 2. This will create a Gulp build configuration which you can use in WebStorm. Just select the configuration and press
 the Run button.
 
# Running the Application

This repository requires node.js, available for free for all platforms on [https://nodejs.org/en/](https://nodejs.org/en/).

Run on command line
After you have node.js installed, the server and application can be run with.

    `node app.js`

Using `nodemon` for development is recommended.  More information can be found [here](https://github.com/remy/nodemon).

Run on WebStorm
1. Open the /bin folder and right click on 'www' and select 'Run bin/www'. This will create a run configuraiton which 
you can use in Webstorm to start the application. Just select teh configuration and press the Run button.


# Angular 2

This site uses the Angular 2 frameework for front end development. 

For more information about Angular 2, [please refer to the official documentation](https://angular.io/docs/ts/latest/).

# Credits
Author: Raul Zuniga

Date: 11/24/2016