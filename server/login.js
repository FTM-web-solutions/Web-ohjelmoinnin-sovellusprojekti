const express = require('express')
const app = express()
const port = 5000
const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs')

// npm run devRun to start this one in port 5000

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Demo middleware executing...');

    next();
});

const users = [
    {
        id: uuidv4(),
        username: "demouser",
        password: "123456"
    },
    {
        id: uuidv4(),
        username: "testuser",
        password: "98765"
    }
];

passport.use(new BasicStrategy(
    function (username, password, done) {
        console.log('username: ' + username)
        console.log('password: ' + password)

        // search matching username from our user storage
        const user = users.find(u => u.username === username)

        // if match is found, compare the passwords
        if (user != null) {
            // if passwords match, then proceed to route handler (the protected resource)  
            if (bcrypt.compareSync(password, user.password)) {
                done(null, user)
            } else {
                done(null, false)
            }
        } else {
            // reject the request
            done(null, false)
        }

    }
));

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "MyVerySecretSigningKey"
};

passport.use(new JwtStrategy(jwtOptions, function (jwt_payload, done) {
    console.log('JWT is valid')
    console.log('payload is as follows')
    console.log(jwt_payload)

    done(null, jwt_payload)
}))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', (req, res) => {
    console.log(req.body)

    // create hash of the password
    const salt = bcrypt.genSaltSync(6)
    const passwordHash = bcrypt.hashSync(req.body.password, salt)

    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        password: passwordHash,
        email: req.body.email
    }

    users.push(newUser)

    console.log(users)
    res.send("OK")
})

/*
    {
        "username": "foo",
        "password": "123456",
        "email": "foo@bar.com"
    }
*/
app.get('/my-protected-resource', passport.authenticate('basic', { session: false }), (req, res) => {
    console.log("Protected resource accessed")

    res.send("Hello protected world!")
})

app.get('/my-other-protected-resource', passport.authenticate('basic', { session: false }), function (req, res) {
    res.send('Other protected resource accessed')
})

app.post('/jwtLogin', passport.authenticate('basic', { session: false }), (req, res) => {

    console.log(req)

    const payload = {
        user: {
            id: req.user.id,
            username: req.user.username
        }
    };

    const secretKey = "MyVerySecretSigningKey"

    const options = {
        expiresIn: '1d'
    }

    const generatedJWT = jwt.sign(payload, secretKey, options)

    // send JWT as a response
    res.json({ jwt: generatedJWT })
})

app.get('/jwt-protected-resource', passport.authenticate('jwt', { session: false }), (req, res) => {
    //console.log(req.user)
    console.log('User ID from JWT is ' + req.user.user.id)
    res.send("OK, for user " + req.user.user.username)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})