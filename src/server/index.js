const express=require('express');
const mongoose = require('mongoose')
const {user,auth,cellar,game,match}=require('./core');
const {fetchMatch,createMatch} = match
const redis = require('redis');
const session = require('express-session');
const passport = require('passport');
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const redisStore = require('connect-redis')(session);
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const client  = redis.createClient();
const path = require('path')
const cors = require('cors')
const uuid = require('uuid/v4')
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || '3000'
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
mongoose.connect('mongodb+srv://mymac:weiH8ahb@cluster0-40t5m.mongodb.net/test',
{
  useNewUrlParser: true,
  autoIndex:false,
  replicaSet:"Cluster0-shard-0",
  ssl: true,
  sslValidate: true,
})
.then(()=>{console.log('connected')})
.catch((e)=>console.log(e));
// app.use("/api/", limiter);
app.use(helmet())
app.use(bodyParser.urlencoded({limit: '2mb', extended: true}))
app.use(bodyParser.json({limit: '2mb', extended: true}))
app.use(session({
  genid: (req) => {
    return uuid() // use UUIDs for session IDs
  },
  store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  260}),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

if (process.env.NODE_ENV !== 'production') {
  app.use(cors({origin: 'http://localhost:8080', credentials: true }));
} else {
  app.use(express.static(path.resolve(__dirname,`../../dist`)))
  app.get(/^(?!\/api\/)/,(req,res) => {
    res.sendFile(path.resolve('index.html'))
  })
}

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    auth.findAuth({email})
    .then(user => {
      if (!user) {
        return done('invalid credentials', false);
      }

      return done(null, user.userId);
    }).catch(error => done(error));
  }
));
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user)
})



// app.use(passport.initialize());
// app.use(passport.session());


app.get('/api/user', (req, res) => {
  !req.isAuthenticated() ? res.status(401).end() : res.status(200).send(req.session.passport)
})
app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(info) {return res.status(401).send({message:info.message})}
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.login(user, (err) => {
      if (err) { return next(err); }
      res.status(200).send({authenticated:'AUTHENTICATED',...req.session.passport,admin:true})
    })
  })(req, res, next);
})

app.get('/api/authrequired', (req, res) => {
  console.log(req.isAuthenticated())
  res.status(req.isAuthenticated() ? 200 : 401).end()
})
app.get('/api/adminRequired', (req, res) => {
  let status = (req.isAuthenticated() && req.session.passport && req.session.passport.admin) ? 200 : 401
  res.status(200).end()
})
app.get('/testAuth', (req, res) => {
  console.log(`User authenticated? ${req.isAuthenticated()}`)
  res.send({})
})
app.get('/api/matchs', game.get)
// app.get('/api/matchs', fetchMatch)
app.post('/matchs', createMatch)
app.get('/', (req, res) => {
  console.log('is not auth')
  res.send({})
})
///////////////////////////
server.listen(port,()=>console.log("...listening HTTP on port " + port));
