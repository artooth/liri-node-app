# LIRI - a node application

## About the App
LIRI is similar to SIRI. However, LIRI is a Language Interpretation and Recognition Interface, instead of a Speech Interpretation and Recogniation Interface (SIRI). LIRI works in the command line node app and gives you data back.  

LIRI will search OMDB for movies, Bands in Town for concerts and Spotify for songs. 

## How to use
A run down of the commands to use in the Terminal to get a response from LIRI

### Get Movie Info
Returns: title of movie, year released, IMDB ratings, plot, actors, country filmed in and language of movie.

Example: `node liri.js movie-this "Sherlock Holmes"`

<img width="877" alt="sherlock" src="https://user-images.githubusercontent.com/40549632/46898068-4b3e2380-ce4c-11e8-94fd-4dcbb9975b4a.PNG">


### Get Concert Info
Returns: concert venue, city and date of a band or Artist.

Example: `node liri.js concert-this "Bruno Mars"`

<img width="502" alt="bruno mars" src="https://user-images.githubusercontent.com/40549632/46898090-7d4f8580-ce4c-11e8-9050-09e9209af686.PNG">

### Get Spotify Song Info
Returns: artist(s), song, album, and a link to preview the song. 

Example: `node liri.js spotify-this-song "Single Ladies"`

<img width="658" alt="single ladies" src="https://user-images.githubusercontent.com/40549632/46898105-9a845400-ce4c-11e8-8f12-a8f284a503e5.PNG">

## Built With
* Node.js
* Javascript
* OMBd API (via request npm module)
* Spotify API (via Spotify npm module)
* Bands in Town API (via request npm module)

## Author

Alexandria Toothman
 

