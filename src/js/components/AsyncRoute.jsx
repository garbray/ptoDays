// TODO review asyncRoute implementations
// // @flow
// import React, { Component } from 'react';
//
// type State = {
//   loaded: boolean,
// };
//
// type Props = {
//   props: mixed,
//   loadingPromise: Promise<{ default: Class<React.Component<*, *, *>> }>,
// };
//
// class AsyncRoute extends Component<Props, State> {
//   state = {
//     loaded: false,
//   };
//
//   componentDidMount() {
//     this.props.loadingPromise.then(module => {
//       this.component = module.default;
//       this.setState({ loaded: true });
//     });
//   }
//
//   render() {
//     if (this.state.loaded) {
//       return <this.component {...this.props.props} />;
//     }
//     return <p> loading </p>;
//   }
// }
//
// export default AsyncRoute;
