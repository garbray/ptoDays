// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Text from '../../components/Text';
import Search from '../../components/search';
import Users from '../../components/Users';

type Props = {
  users: Array<Object>,
};

type State = {
  data: Object,
};

class Home extends Component<Props, State> {
  state = {
    data: {},
  };

  componentDidMount() {
    this.setNewData();
  }

  // async setNewData() {
  //   try {
  //     const { data } = await axios(
  //       'https://jsonplaceholder.typicode.com/posts/1',
  //     );
  //     this.setState({ data });
  //   } catch (error) {
  //     console.log('error loading data', error); // eslint-disable-line
  //   }
  // }
  setNewData() {
    this.setState({ data: { title: 'testing new title' } });
  }

  render() {
    return (
      <div className="landing">
        <h1>Test home sii</h1>
        <Link to="/details/0" href="/details/2">
          About
        </Link>
        {this.state.data.title && <p> {this.state.data.title} </p>}
        <Text textLine="ohh HRM ready" />
        <Search placeholder="Oh lala" />
        <Users usersData={this.props.users} />
      </div>
    );
  }
}

export default Home;
