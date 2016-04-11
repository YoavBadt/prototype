import React from 'react';

import BaseGrid from './BaseGrid.jsx'
import BaseLineGrid from './BaseLineGrid.jsx'
import ColumnGrid from './ColumnGrid.jsx'



class Grids extends React.Component {
  render() {
    return (
      <div>
        <BaseGrid />
        <BaseLineGrid />
        <ColumnGrid />
      </div>
    )
  };
};

export default Grids
