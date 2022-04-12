// /* Load the HTTP library */
// var http = require("http");

// /* Create an HTTP server to handle responses */

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const SpotifyWebApi = require('spotify-web-api-node');

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//login

app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  })

  spotifyApi.authorizationCodeGrant(code)
  .then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  })
  .catch(err => {
    console.log(err)
    res.sendStatus(400);
  })
});


//refresh token

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken
  })

  spotifyApi.refreshAccessToken()
  .then(data => {
    res.json({
      accessToken: data.body.access_token,
      expiresIn: data.body.expires_in
    })
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  })
})


//get a playlist

app.post('/playlist', (req, res) => {
  const playlistId = req.body.playlistId;
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.getPlaylist(playlistId)
  .then(data => {
    res.json({
      playlist: data.body
    })
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  })
})

app.listen(8888, () => console.log('server is listening.'))


