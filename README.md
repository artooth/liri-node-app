# liri-node-app

## About the App
LIRI is similar to SIRI. However, LIRI is a Language Interpretation and Recognition Interface, instead of a Speech Interpretation and Recogniation Interface (SIRI). LIRI works in the command line node app and gives you data back.  

LIRI will search OMDB for movies, Bands in Town for concerts and Spotify for songs. 

## How to use
A run down of the commands to use in the Terminal to get a response from LIRI

### Get Movie Info
Returns: title of movie, year released, IMDB ratings, plot, actors, country filmed in and language of movie.
Example: `node liri.js movie-this "Sherlock Holmes"`

### Get Concert Info
Returns: concert venue, city and date of a band or Artist.
Example: `node liri.js concert-this "Bruno Mars"`

### Get Spotify Song Info
Returns: artist(s), song, album, and a link to preview the song. 
Example: `node liri.js spotify-this-song "Hey Jude"`

## Technologies Used
* Node.js
* Javascript
* OMBd API (via request npm module)
* Spotify API (via Spotify npm module)
* Bands in Town API (via request npmm module)


 

