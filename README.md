# LIRI-node-app

## What is Liri Node App?
Liri is like iPhone Siri's younger cousin. However, while Siri is a speech 
Interpretation and Recognition Interface, Liri is a Language Interpretation and Recognition Interface. 

Liri is a command line node app that will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

A video demonstration can be viewed [here](https://drive.google.com/file/d/19Un4mVWf3Vp65kl3mjwFVvCnSsChy3vu/view)

## Overview of the App
+Requires all Node Package Installtions including:
    +Inquirer
    +Node-spotify-api
    +Axios
    +Moment
    +FS

*Takes in user selection using Inquirer
*Uses the selection to access each command type: (Concert, Song, Movie, Do What It Says)
*When user types a command without any input, default values are used

## Instructions
1. Begin by downloading all files inside the repo
2. Open terminal or bash window
3. Navigate to the repo folder
4. Start by typing "node liri"
5. Select the desired search option
6. Enter the desired search term

## Command Example Screenshots
![Image of Example 1](https://github.com/d-taylor6403/LIRI-node-app/blob/master/Images/CML-Example1.PNG)
![Image of Example 2](https://github.com/d-taylor6403/LIRI-node-app/blob/master/Images/CML-Concert-Example1.PNG)
![Image of Example 3](https://github.com/d-taylor6403/LIRI-node-app/blob/master/Images/CML-Song-Example1.PNG)
![Image of Example 4](https://github.com/d-taylor6403/LIRI-node-app/blob/master/Images/CML-Movie-Example1.PNG)
![Image of Example 5](https://github.com/d-taylor6403/LIRI-node-app/blob/master/Images/CML-Mixed-Example.PNG)
![Image of Example 6](https://github.com/d-taylor6403/LIRI-node-app/blob/master/Images/CML-Log-Example1.PNG)

## Technologies Used in App
* Axios NPM Package -> Promise based HTTP client for the browser and node.js
* Inquirer NPM Package -> A collection of common interactive command line user interfaces
* Moment -> A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates
* DotEnv -> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
* Node-Spotify-API -> A simple to use API library for the Spotify REST API
* OMDb API -> A RESTful web service to obtain movie information, all content and images on the site
* Bands In Town API -> Displays read-only access to artist info and artist events