//Required npm modules and files//
let request = require("request");
let spotify = require("node-spotify-api");
let keys = require('./keys')

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

            console.log(json.Title)
            console.log(json.Released)
            console.log(json.Ratings)
            console.log(json.Plot)
            console.log(json.Language)
            console.log(json.Actors)
            console.log(json.Country)

        }
    })

}




// Logic
switch (userInput) {
    case 'movie-this':
        movieThis();

        break;
    case 'concert-this':
        console.log("Give me a song")
        break;
    default:
        console.log("Input not good")
        break;
}








//TO DO: MAKE IT SO LIRI CAN TAKE IN concert-this spotify-this-song movie-this do-what-it-says

//concert-this

// const bands = process.argv[2];
// let bandsURL = "https://rest.bandsintown.com/artists/" + bands + "/events?app_id=codingbootcamp"
// request(bandsURL, (err, response, body) => {
//     if (err)
//         return err;

//     if (response.statusCode === 200) {
//         let json = JSON.parse(body);

//         console.log(json.Released)
//     }
// })


//////MOVIES////

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)