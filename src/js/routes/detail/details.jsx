// @flow
import React from 'react';

type Props = {
  data: Object,
  back: Function,
};

const Details = (props: Props) => (
  <div className="landing">
    <button onClick={props.back}>Back</button>
    <h1>details and the id was {props.data.id}</h1>
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  </div>
);

export default Details;
