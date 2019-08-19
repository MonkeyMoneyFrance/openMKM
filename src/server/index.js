const express=require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {user,auth,result,game,team}=require('./core');
const redis = require('redis');
const session = require('express-session');
const passport = require('passport');
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

dotenv.config();
const port = process.env.PORT || '3000'
const secretKey =  process.env.SECRETKEY || 'abcdefghijklmnopqrstuvwxyz'
const dbUser =  process.env.DBUSER || null
const dbPass = process.env.DBPASS || null
const connnectString =  "mongodb+srv://"+dbUser+":"+dbPass+"@cluster0-40t5m.mongodb.net/test"

mongoose.connect(connnectString,
{
  useNewUrlParser: true,
  autoIndex:false,
  replicaSet:"Cluster0-shard-0",
  ssl: true,
  sslValidate: true,
})
.then(()=>{console.log('connected')})
.catch((e)=>console.log(e));


app.use(helmet())
app.use(bodyParser.urlencoded({limit: '2mb', extended: true}))
app.use(bodyParser.json({limit: '2mb', extended: true}))
app.use(session({
  genid: (req) => {
    return uuid() // use UUIDs for session IDs
  },
  store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  260}),
  secret: process.env.SECRETKEY,
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
      console.log(user.userId)
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



app.use(passport.initialize());
app.use(passport.session());



app.get('/api/user', (req, res) => {
  !req.isAuthenticated() ? res.status(401).end() : res.status(200).send(req.session.passport)
})
app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(info) {return res.status(401).send({message:info.message})}
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, (err) => {
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

app.use((req,res,next)=>{
  !req.isAuthenticated() ? res.status(403).end() : next()
})

app.get('/api/users', user.get)
app.post('/api/users', user.set)

app.get('/api/games', game.get)

app.get('/api/teams', team.get)


app.get('/api/results', result.get)
app.post('/api/results', result.set)


app.get('/api/mock/games',game.mock)
app.get('/api/mock/teams',team.mock)
app.get('/api/mock/users',user.mock)
app.get('/api/mock/resul',result.mock)

app.get('/', (req, res) => {
  console.log('is not auth')
  res.send({})
})

server.listen(port,()=>console.log("...listening HTTP on port " + port));
