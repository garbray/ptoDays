import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import Search from '../../components/search';

const Home = () => (
  <div className="landing">
    <h1>Test home sii</h1>
    <Link to="/details" href="/details">
      About
    </Link>
    <Text textLine="ohh HRM ready" />
    <Search placeholder="Oh lala" />
  </div>
);
export default Home;
