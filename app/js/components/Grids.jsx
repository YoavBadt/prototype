import React from 'react';

import BaseGrid from './grids/BaseGrid.jsx'
import BaseLineGrid from './grids/BaseLineGrid.jsx'
import ColumnGrid from './grids/ColumnGrid.jsx'



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
