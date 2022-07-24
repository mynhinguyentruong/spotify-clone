const express = require('express')

//create a Class
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()

//Use Authorization from spotify-web-api-node

app.post('/login', (req, res) => {

  //// The code that's returned as a query parameter to the redirect URI
  const code = req.body.code
  //create instance of SpotifyWebApi
  const spotifyApi = new SpotifyWebApi({
    
    //specify credentials
    redirectUri: 'http://localhost:3000',
    clientId: 'dcec0469b71340a1bfc6e310612de92b',
    clientSecret: '1f9b2ffeef80427b9a7724ca4efe8de9',
  })

  spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  }).catch((err) => {
    console.log(err)
    res.sendStatus(400)
  })
})