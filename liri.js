//Required npm modules and files//
require("dotenv").config();
let request = require("request");
let spotify = require("node-spotify-api");
let keys = require('./keys')
let moment = require("moment");

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
        if (err)
            return err;

        if (response.statusCode === 200) {
            let json = JSON.parse(body);

            console.log("\n____________________________\n");
            console.log("Title: " + json.Title);
            console.log("Year Released: " + json.Released);
            console.log("IMDB Ratings: " + json.imdbRating);
            console.log("Plot: " + json.Plot);
            console.log("Actors: " + json.Actors);
            console.log("Country: " + json.Country);
            console.log("Language: " + json.Language);
            console.log("\n____________________________\n");

        } else {
            thisMovie = "Nobody's Fool"
            movieThis()
        }
    })

};

function concertThis() {
    let artist = process.argv[3]
    const queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(queryUrl, (err, response, body) => {
        if (err)
            return err;

        if (response.statusCode === 200) {
            let json = JSON.parse(body);
            for (var i = 0; i < 3; i++) {

                console.log("\n____________________________\n");
                console.log("Venue: " + json[i].venue.name);
                console.log("Location: " + json[i].venue.city);
                console.log(moment(json[i].datetime).format("MM/DD/YY"));
                console.log("\n____________________________\n");

            }
        }
    })

}


function spotifyThis() {
    let spotify = new spotify({
        id: keys.
    })

    request(queryUrl, (err, response, body) => {
        if (err)
            return err;

        if (response.statusCode === 200) {
            let json = JSON.parse(body);

            console.log("\n____________________________\n");
            console.log("Artist(s): " + json.Artists);
            console.log("Song: " + json.Song);
            console.log("Album: " + json.Album);
            console.log("Preview Link: " + json.link);
            console.log("\n____________________________\n");

        } else {
            thisMovie = "Nobody's Fool"
            movieThis()
        }
    })

};


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
        console.log("Spotify working")

        break;

    default:
        console.log("Input not good")
        break;
}









