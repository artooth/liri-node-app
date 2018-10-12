//Required npm modules and files//
require("dotenv").config();
let request = require("request");
let Spotify = require("node-spotify-api");
let keys = require('./keys.js')
let moment = require("moment");
let fs = require("fs");
const chalk = require('chalk');


const userInput = process.argv[2];
/*
To access your spotify keys 
keys.spotify.id
*/

// Functions 

//console.log(process.argv)
//console.log(userInput)

function movieThis() {
    let thisMovie = process.argv[3]
    const queryUrl = "http://www.omdbapi.com/?t=" + thisMovie + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, (err, response, body) => {
        if (err) {
            return err;
        }
        // if (!process.argv[3]) {
        //     console.log(chalk.bold.blue("Movie not specified. You may like:") + " Mr. Nobody");

        // }

        if (response.statusCode === 200) {
            let json = JSON.parse(body);

            console.log('\n____________________________\n');
            console.log(chalk.bold.blue("Title: ") + json.Title);
            console.log(chalk.bold.blue("Year Released: ") + json.Released);
            console.log(chalk.bold.blue("IMDB Ratings: ") + json.imdbRating);
            console.log(chalk.bold.blue("Plot: ") + json.Plot);
            console.log(chalk.bold.blue("Actors: ") + json.Actors);
            console.log(chalk.bold.blue("Country: ") + json.Country);
            console.log(chalk.bold.blue("Language: ") + json.Language);
            console.log("\n____________________________\n");
        }
    })
}


function concertThis() {
    let artist = process.argv[3]
    const queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(queryUrl, (err, response, body) => {
        if (err) {
            return err;
        }
        if (response.statusCode === 200) {
            let json = JSON.parse(body);
            for (var i = 0; i < 5; i++) {

                console.log("\n____________________________\n");
                console.log(chalk.bold.cyan("Venue: ") + json[i].venue.name);
                console.log(chalk.bold.cyan("Location: ") + json[i].venue.city);
                console.log(chalk.bold.cyan(moment(json[i].datetime).format("MM/DD/YY")));
                console.log("\n____________________________\n");

            }
        }
    })
}


function spotifyThis() {
    let spotify = new Spotify(
        keys.spotify
    );
    let songName = process.argv[3];

    spotify.search({
        type: "track",
        query: songName,
    }, function (err, data) {
        if (err) {
            return err;
        }
        if (!process.argv[3]) {

        }
        else {

            console.log("\n____________________________\n");
            console.log(chalk.bold.magenta("Artist: ") + data.tracks.items[0].artists[0].name);
            console.log(chalk.bold.magenta("Song: ") + data.tracks.items[0].name);
            console.log(chalk.bold.magenta("Album: ") + data.tracks.items[0].album.name);
            console.log(chalk.bold.magenta("Preview (30 sec): ") + data.tracks.items[0].preview_url);
            console.log("\n____________________________\n");
        }
    })
}



function doThis() {
    // fs.appendFile("random.txt", process.argv[2] + "\n", (err) => {
    fs.readFile("random.txt", (err, data) => {
        if (err) {
            return console.log(error);
        } else {
            console.log(data.toString())
        }
    })

    // })

    // if (userInput == "do-what-it-says")

    //     fs.readFile('random.txt', 'utf8', function (err, data) {
    //         if (err)
    //             return err;

    //     })
}


// Logic
switch (userInput) {
    case 'movie-this':
        movieThis();

        break;

    case 'concert-this':
        concertThis();

        break;


    case 'spotify-this-song':
        spotifyThis();


        break;

    case 'do-what-it-says':
        doThis();
        console.log("do what is says working")

        break;

    default:
        console.log("Input not good")
        break;
}









