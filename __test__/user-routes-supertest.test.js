const request = require('supertest');
// import app from '../app';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Homepage');
});

app.get('/signup', (req, res) => {
  res.status(200).send('Signup')
});

app.get('/login', (req, res) => {
  res.status(200).send('Log In')
});

app.post('/login', (req, res) => {

});

app.get('/session', (req, res) => {
  res.status(200).send('Start Session')
});

describe('GET / - index.html endpoint', () => {
  it('Displays homepage when / is requested', async() => {
    const result = await request(app).get('/');
    expect(result.statusCode).toEqual(200);
    expect(result.text).toEqual('Homepage');
  });
});

describe('GET / - returns sign up page', () => {
  it('Displays the sign up page when /signup is requested', async() => {
    const result = await request(app).get('/signup');
    expect(result.statusCode).toEqual(200);
    expect(result.text).toEqual('Signup');
  });
});

describe('GET / - returns login page', () => {
  it('Displays the sign up page when /login is requested', async() => {
    const result = await request(app).get('/login');
    expect(result.statusCode).toEqual(200);
    expect(result.text).toEqual('Log In');
  });
});

describe('GET / - returns start session page', () => {
  it('Displays the sign up page when /session is requested', async() => {
    const result = await request(app).get('/session');
    expect(result.statusCode).toEqual(200);
    expect(result.text).toEqual('Start Session');
  });
});
