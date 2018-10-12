//Required npm modules and files//
require("dotenv").config();
let request = require("request");
let Spotify = require("node-spotify-api");
let keys = require('./keys.js')
let moment = require("moment");
let fs = require("fs");
const chalk = require('chalk');


const userInput = process.argv[2];


// Functions 

function movieThis() {
    let thisMovie = process.argv[3]
    const queryUrl = "http://www.omdbapi.com/?t=" + thisMovie + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, (err, response, body) => {
        if (err) {
            return err;
        }

        if (response.statusCode === 200) {
            let json = JSON.parse(body);

            console.log(chalk.bold.blue('\n____________________________\n'));
            console.log(chalk.bold.blue("Title: ") + json.Title);
            console.log(chalk.bold.blue("Plot: ") + json.Plot);
            console.log(chalk.bold.blue("Actors: ") + json.Actors);
            console.log(chalk.bold.blue("Year Released: ") + json.Released);
            console.log(chalk.bold.blue("IMDB Ratings: ") + json.imdbRating);
            console.log(chalk.bold.blue("Country: ") + json.Country);
            console.log(chalk.bold.blue("Language: ") + json.Language);
            console.log(chalk.bold.blue("\n____________________________\n"));
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

                console.log(chalk.bold.cyan("\n____________________________\n"));
                console.log(chalk.bold.cyan("Venue: ") + json[i].venue.name);
                console.log(chalk.bold.cyan("Location: ") + json[i].venue.city);
                console.log(chalk.bold.cyan(moment(json[i].datetime).format("MM/DD/YY")));
                console.log(chalk.bold.cyan("\n____________________________\n"));

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

        else {
            console.log(chalk.bold.magenta("\n____________________________\n"));
            console.log(chalk.bold.magenta("Artist: ") + data.tracks.items[0].artists[0].name);
            console.log(chalk.bold.magenta("Song: ") + data.tracks.items[0].name);
            console.log(chalk.bold.magenta("Album: ") + data.tracks.items[0].album.name);
            console.log(chalk.bold.magenta("Preview: ") + data.tracks.items[0].preview_url);
            console.log(chalk.bold.magenta("\n____________________________\n"));
        }
    })
}



function doThis() {

    // fs.appendFile("random.txt", process.argv[2] + "\n", (err) => {
    fs.readFile("random.txt", "utf8", (err, data) => {
        if (err) {
            return console.log(error);
        } else {




        }

    })

}






// Logic
function switchIT() {
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


            break;

        default:
            console.log("Input not good");

            break;
    }
}









