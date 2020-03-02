//REQUIRED DEPENDENCIES
//Read and set enviroment
require("dotenv").config();
//require inquirer for user prompts
var inquirer = require("inquirer");
//Import Spotify API keys
var keys = require("./keys");
//Import Spotify API Package
var Spotify = require("node-spotify-api");
//Import the axios npm package
var axios = require("axios");
//Import the moment package
var moment = require("moment");
//Import FS package for read/write ability
var fs = require("fs");
//Initialize the spotify API client using stored id and secret
var spotify = new Spotify(keys.spotify);

var divider = "\n=======================================\n\n";

//GATHER USER SEARCH OPTIONS
inquirer.prompt([
    {
        name: 'function',
        message: 'Do you want to search for a Concert, Song, Movie, Do What It Says?',
        type: 'list',
        choices: ['Concert', 'Song', 'Movie', 'Do What It Says']
    },
])
.then(function(answer) {
    //CONCERT SEARCH=============================================================
    if (answer.function.slice() === 'Concert') {
        inquirer.prompt([
            {
                name: 'concertArtist',
                message: 'Enter The Name of An Artist: ',
                default: 'Lauryn Hill'
            }
        ])
        .then(function(answer) {
            axios.get("http://rest.bandsintown.com/artists/" + answer.concertArtist + "/events?app_id=codingbootcamp")
            .then(function (response){
                for (var i = 1; i<5; i++){
                    
                    var concertData = [
                        "Concert Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"),
                        "Venue Name: " + response.data[i].venue.name,
                        "Venue Location: " + response.data[i].venue.city + "," + response.data[i].venue.region
                    ].join("\n");

                    //Append concertData and the divider to log.txt, print concertData to console
                    fs.appendFile("log.txt", answer.concertArtist + ":" + concertData + divider, function(err){
                        if (err) {
                            throw err;
                        }
                        console.log(divider+ concertData);
                    });
                }
            })
        });
    }
    //SPOTIFY SEARCH================================================================
    else if (answer.function.slice() === 'Song') {
        inquirer.prompt([
            {
                type: 'input',
                name: 'songTitle',
                message: 'Enter The Name of A Song: ',
                default: 'Doo Wop (That Thing)'
            }
        ])
        .then(function(answer) {
           spotify.search({
               type: 'track',
               query: answer.songTitle,
           }, function(err, response){


               var spotifyData = [
                "Artist: " + response.tracks.items[6].artists[0].name,
                "Song: " + response.tracks.items[6].name,
                "Album: " + response.tracks.items[6].album.name,
                "URL: " + response.tracks.items[6].external_urls.spotify
               ].join("\n\n");

               //Append spotifyData and the divider to log.txt, print spotifyData to console
               fs.appendFile("log.txt", spotifyData + divider, function(err){
                   if (err) {
                       throw err;
                   }
                   console.log(divider + spotifyData + divider);
               })
           })
        }
    
    )}
    //MOVIE SEARCH==================================================================
    else if (answer.function.slice() === 'Movie') {
        inquirer.prompt([
            {
                type: 'input',
                name: 'movieTitle',
                message: 'Enter The Name of A Movie: ',
                default: 'Clueless'
            }
        ])
        .then(function(answer) {
            axios.get("http://www.omdbapi.com/?t=" + answer.movieTitle + "&y=&plot=short&apikey=trilogy")
            .then(function(response){
                
                var movieData= [
                    "Title: " + response.data.Title,
                    "Year: " + response.data.Year,
                    "IMDB Rating: " + response.data.Ratings[0].Value,
                    "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
                    "Country: " + response.data.Country,
                    "Language: " + response.data.Language,
                    "Plot: " + response.data.Plot,
                    "Actors/Actresses: " + response.data.Actors
                ].join("\n");

                //Append movieData and the divider to log.txt. print movieData to console
                fs.appendFile("log.txt", movieData + divider, function(err){
                    if (err){
                        throw err;
                    }
                    console.log(divider + movieData + divider);
                })
            })
        })
    }
    //DO WHAT IT SAYS====================================================================
    else if (answer.function === 'Do What It Says'){
        fs.readFile("random.txt", "utf8", function(err, data){
            if (err){
                throw err;
            }
            var dataArr= data.split(","); spotify.search({
                type: 'track',
                query: dataArr[1],
            }, function (err, response) {

                //var jsonrandomData = response.data
                var randomData = [
                    "Artist: " + response.tracks.items[0].artists[0].name,
                    "Song: " + response.tracks.items[5].name,
                    "Album: " + response.tracks.items[5].album.name,
                    "URL: " + response.tracks.items[5].external_urls.spotify
                ].join("\n");
                
                //Append randomData and the divider to log.txt, print randomData to console
                fs.appendFile("log.txt", randomData + divider, function(err){
                    if (err) {
                        throw err;
                    }
                    console.log(divider + randomData + divider);
                })
                
            })
        })
    }
})
