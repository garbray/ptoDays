import React from 'react';
import { Link } from 'react-router-dom';
// <Link to="/details" href="/details">
//   About
// </Link>

const Home = () => (
  <div className="landing">
    <h1>Test home 2</h1>
    <Link to="/details" href="/details">
      About
    </Link>
  </div>
);
export default Home;
