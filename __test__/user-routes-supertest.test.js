const request = require('supertest');
// import app from '../app';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Coming soon.....');
});

describe('GET / - index.html endpoint', () => {
  it('Displays homepage when / is requested', async() => {
    const result = await request(app).get('/');
    expect(result.statusCode).toEqual(200);
    expect(result.text).toEqual('Coming soon.....');
  });
});
