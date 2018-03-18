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
  </div>
);

export default Details;
