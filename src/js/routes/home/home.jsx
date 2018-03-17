// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import Search from '../../components/search';
import Users from '../../components/Users';

type Props = {
  users: Array<Object>,
};

const Home = (props: Props) => (
  <div className="landing">
    <h1>Test home sii</h1>
    <Link to="/details/0" href="/details/2">
      About
    </Link>
    <Text textLine="ohh HRM ready" />
    <Search placeholder="Oh lala" />
    <Users usersData={props.users} />
  </div>
);
export default Home;
