import React from 'react';
import AHT2 from './AHT2';

class AHT extends React.Component {
  render() {
    return ( 
        <div>
          <h1>AHT 1</h1>

          <AHT2 
          name = {'Quang ND'}
          age = {25}
          />
          
        </div>
    )
  }
}

export default AHT;



