import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <Fragment>
    <div>Ini Home</div>
    <Link to="/counter">Go to counter page</Link>
  </Fragment>
);
