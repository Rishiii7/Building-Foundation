const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
const intervalID = setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

function  rateLimitterMiddleware(req, res, next) {
  const userId = req.header('user-id');
  // console.log(userId);

  // this should refresh for each second
  // console.log('Inside middleware');
  // numberOfRequestsForUser = {};
  if (numberOfRequestsForUser[userId] === undefined) {
    numberOfRequestsForUser[userId] = 1;
  }
  else {
    numberOfRequestsForUser[userId] += 1;
  }

  if (numberOfRequestsForUser[userId] > 5) {
    res.status(404).send('You have exceeded the limit of 5 requests per second');
    return;
  }

  // console.log(numberOfRequestsForUser);

  next();

}

app.use(rateLimitterMiddleware);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
  return;
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
  return;
});

app.closeServer = () => {
  clearInterval(intervalID);
}

module.exports = app;

// app.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// })