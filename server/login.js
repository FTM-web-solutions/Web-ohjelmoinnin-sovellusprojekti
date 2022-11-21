const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const todos = require('./services/todos');
const users = require('./services/users');
const port = (process.env.PORT || 5000);

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => res.send('This route is not protected'));


/*********************************************
 * API KEY DEMO
 ********************************************/
app.get('/apiKeyGenerate/:userId', (req, res) => {
  const userId = req.params.userId;
  let apiKey = users.getApiKey(userId);
  if(apiKey === false) // user not found
  {
    res.sendStatus(400);
  }
  if(apiKey === null)
  {
    apiKey = users.resetApiKey(userId)
  }
  res.json({
    apiKey
  })
});

function checkForApiKey(req, res, next)
{
  const receivedKey = req.get('X-Api-Key');
  if(receivedKey === undefined) {
    return res.status(400).json({ reason: "X-Api-Key header missing"});
  }

  const user = users.getUserWithApiKey(receivedKey);
  if(user === undefined) {
    return res.status(400).json({ reason: "Incorrect api key"});
  }

  req.user = user;

  // pass the control to the next handler in line
  next();
}

app.get('/apiKeyProtectedResource', checkForApiKey, (req, res) => {
  res.json({
    yourResource: "foo"
  })
});

/*********************************************
 * HTTP Basic Authentication
 * Passport module used
 * http://www.passportjs.org/packages/passport-http/
 ********************************************/
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
  function(username, password, done) {

    const user = users.getUserByName(username);
    if(user == undefined) {
      // Username not found
      console.log("HTTP Basic username not found");
      return done(null, false, { message: "HTTP Basic username not found" });
    }

    /* Verify password match */
    if(bcrypt.compareSync(password, user.password) == false) {
      // Password does not match
      console.log("HTTP Basic password not matching username");
      return done(null, false, { message: "HTTP Basic password not found" });
    }
    return done(null, user);
  }
));

app.get('/httpBasicProtectedResource',
        passport.authenticate('basic', { session: false }),
        (req, res) => {
  res.json({
    yourProtectedResource: "profit"
  });
});


/*******************************
  Here expectation is that body is of following structure
  {
    "username": "foo",
    "email": "foo@bar.com",
    "password": "somepassword"
  }
*/
app.post('/registerBasic',
        (req, res) => {

  if('username' in req.body == false ) {
    res.status(400);
    res.json({status: "Missing username from body"})
    return;
  }
  if('password' in req.body == false ) {
    res.status(400);
    res.json({status: "Missing password from body"})
    return;
  }
  if('email' in req.body == false ) {
    res.status(400);
    res.json({status: "Missing email from body"})
    return;
  }

  const salt = bcrypt.genSaltSync(6);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  console.log(hashedPassword);
  users.addUser(req.body.username, req.body.email, hashedPassword);

  res.status(201).json({ status: "created" });
});


/*********************************************
 * JWT authentication
 * Passport module is used, see documentation
 * http://www.passportjs.org/packages/passport-jwt/
 ********************************************/
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
let jwtSecretKey = null;
if(process.env.JWTKEY === undefined) {
  jwtSecretKey = require('./jwt-key.json').secret;
} else {
  jwtSecretKey = process.env.JWTKEY;
}


let options = {}

/* Configure the passport-jwt module to expect JWT
   in headers from Authorization field as Bearer token */
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

/* This is the secret signing key.
   You should NEVER store it in code  */
options.secretOrKey = jwtSecretKey;

passport.use(new JwtStrategy(options, function(jwt_payload, done) {
  console.log("Processing JWT payload for token content:");
  console.log(jwt_payload);


  /* Here you could do some processing based on the JWT payload.
  For example check if the key is still valid based on expires property.
  */
  const now = Date.now() / 1000;
  if(jwt_payload.exp > now) {
    done(null, jwt_payload.user);
  }
  else {// expired
    done(null, false);
  }
}));


app.get(
  '/jwtProtectedResource',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log("jwt");
    res.json(
      {
        status: "Successfully accessed protected resource with JWT",
        user: req.user
      }
    );
  }
);

app.get('/todosJWT',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log('GET /todosJWT')
    const t = todos.getAllUserTodos(req.user.id);
    console.log('User Id: ' + req.user.id);
    res.json(t);
})

/*
Body JSON structure example
{
	"description": "Example todo",
	"dueDate": "25-02-2020"
}
*/
app.post('/todosJWT',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log('POST /todosJWT');
    console.log(req.body);
    if(('description' in req.body) && ( 'dueDate' in req.body)) {
      todos.insertTodo(req.body.description, req.body.dueDate, req.user.id);
      res.json(todos.getAllUserTodos(req.user.id));
    }
    else {
      res.sendStatus(400);
    }

})

app.post(
  '/loginForJWT',
  passport.authenticate('basic', { session: false }),
  (req, res) => {
    const body = {
      id: req.user.id,
      email : req.user.email
    };

    const payload = {
      user : body
    };

    const options = {
      expiresIn: '1d'
    }

    /* Sign the token with payload, key and options.
       Detailed documentation of the signing here:
       https://github.com/auth0/node-jsonwebtoken#readme */
    const token = jwt.sign(payload, jwtSecretKey, options);

    return res.json({ token });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))