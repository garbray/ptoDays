// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  usersData: Array<User>,
};

class Users extends Component<Props> {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="users">
        {this.props.usersData.map(user => (
          <Link
            to={`details/${user.id}`}
            href={`details/${user.id}`}
            key={user.name.toLowerCase().replace(/ /g, '')}
          >
            <p> {user.name} </p>
            <p> {user.title} </p>
            <p> {user.startDate} </p>
          </Link>
        ))}
      </div>
    );
  }
}
// Leave Here to demostrate the repain and rerender of this component
// const Users = (props: Props) => (
//   <div className="users">
//     {props.usersData.map(user => (
//       <Link
//         to={`details/${user.id}`}
//         href={`details/${user.id}`}
//         key={user.name.toLowerCase().replace(/ /g, '')}
//       >
//         <pre>
//           <code>{JSON.stringify(user, null, 4)}</code>
//         </pre>
//       </Link>
//     ))}
//   </div>
// );

export default Users;
