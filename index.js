var express = require('express')
var app = express();
/*var passport = require('passport'),
    SpringRoleStrategy = require('passport-springrole').Strategy;

passport.use(new SpringRoleStrategy({
    clientID: '8d79eedc',
    callbackURL: "https://science-hack.herokuapp.com/"
  },
  function(accessToken, refreshToken, profile, done) {
  	console.log(accessToken, refreshToken.)
  }
));*/
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})
app.get('/auth/springrole/callback', function(request, response) {
  response.send('Hello World!')
})
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
