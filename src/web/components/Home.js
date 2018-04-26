import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const About = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>Finde a Meetup</h1>
        <p className="lead">For when you're looking to build 'the next big thing', dummy .</p>
        <p>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy .</p>
      </Jumbotron>
    </Row>
    <Row className="pt-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3><i className="icon-map" /> All meetups</h3>
        <p>React Router is used to handle all web-side routing.</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ReactTraining/react-router" className="btn btn-primary">
            React Router Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3><i className="icon-fire" /> My meetups</h3>
        <p>Firebase is all ready to go with examples on how to read/write data to/from Firebase.</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/database/web/start" className="btn btn-primary">
            Firebase Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3><i className="icon-organization" /> I'm going</h3>
        <p>State management the 'clean way' via Redux is setup with examples - woohoo!</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://redux.js.org/docs/introduction/" className="btn btn-primary">
            Redux Docs
          </a>
        </p>
      </Col>
    </Row>
    <Row className="pt-md-5 pb-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3><i className="icon-layers" /> My Meegups & suggestions</h3>
        <p>Persist the data stored in Redux for faster load times without needing to hit the server each page load.</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/rt2zz/redux-persist" className="btn btn-primary">
            Redux Persist Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3><i className="icon-drop" /> Attended Meetups</h3>
        <p>Webpack, SCSS, Bootstrap and ReactStrap - ready at your fingertips.</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://reactstrap.github.io/components/alerts/" className="btn btn-primary">
            ReactStrap Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3><i className="icon-user-following" />Local Meetups</h3>
        <p>Most apps need user authentication. This one comes ready to go with Firebase Auth - but you can easily change that within the `/actions/member.js`</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/auth/" className="btn btn-primary">
            Firebase Auth Docs
          </a>
        </p>
      </Col>
    </Row>
  </div>
);

export default About;
