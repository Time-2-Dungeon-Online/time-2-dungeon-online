const request = require('supertest');
import app from '../server';

describe('Route integration', () => {
  let session = null;
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status code and text/HTML content', () => {
        request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /text\/html/)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
      });
    });
  });

  describe('/signup', () => {
    describe('GET', () => {
      it('responds with 200 status code.', () => {
        request(app)
          .get('/signup')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            done();
          });
      });
    });

    describe('POST', () => {
      it('responds with 200 status code and application/json content type', () => {
        request(app)
          .post('/signup')
          .send({ username: 'Tester', password: 'helloworld'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            done();
          });
      });

      it('return username with on response body', () => {
          request(app)
          .post('/signup')
          .send({ username: 'Tester', password: 'helloworld'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((res) => {
            assert(res.body.username, username)
            done();
          })
          .catch(err => {
            if (err) done(err);
          })
      });

      it('set a session cookie when the user has completing the sign up process.', () => {
        request(app)
        .post('/signup')
        .send({ username: 'Tester', password: 'helloworld'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          session = res.header.cookie;
          done();
        })
        .catch((err) => {
          if (err) return done(err); 
        })
      })
    });
  });

  describe('/login', () => {
    describe('GET', () => {
      it('responds with 200 status code', () => {
        request(app)
        .get('/login')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
      });
    });

    describe('POST', () => {
      it('responds with 200 status code and application/json content type', () => {
        request(app)
          .post('/login')
          .send({ username: 'Tester', password: 'helloworld'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            done();
          });
      });

      it('return username with on response body', () => {
          request(app)
          .post('/login')
          .send({ username: 'Tester', password: 'helloworld'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((res) => {
            assert(res.body.username, username)
            done();
          })
          .catch(err => {
            if (err) done(err);
          });
      });

      it('set a session cookie when the user has completing the sign up process.', () => {
        request(app)
        .post('/login')
        .send({ username: 'Tester', password: 'helloworld'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          session = res.header.cookie;
          done();
        })
        .catch((err) => {
          if (err) return done(err); 
        });
      });
    });
  });
});