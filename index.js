var express = require('express')
var app = express();
var passport = require('passport'),
    SpringRoleStrategy = require('passport-springrole').Strategy;

passport.use(new SpringRoleStrategy({
    clientID: '8d79eedc',
    clientSecret: '841b0dc36c101464d589baf61d3b87d1',
    callbackURL: "https://science-hack.herokuapp.com/auth/springrole/callback"
  },
  function(accessToken, refreshToken, profile, done) {
  	console.log(accessToken, refreshToken);
  }
));
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
});
app.get('/auth/springrole',
  passport.authenticate('springrole'));

app.get('/auth/springrole/callback', 
  passport.authenticate('springrole', { failureRedirect: '/auth/github' }),
  function(req, res) {
    res.jsonp({
    	'status': 'OK'
    });
  });
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
