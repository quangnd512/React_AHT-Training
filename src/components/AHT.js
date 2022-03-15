import React from 'react';
import AHT2 from './AHT2';

class AHT extends React.Component {
  state = {
    ahtCouse: [
      {id: 1, name: 'PHP'},
      {id: 2, name: 'Javascript'},
      {id: 3, name: 'React'}
    ]
  }
  
  addNewCouse = (couse) => {
    this.setState({
      ahtCouse: this.state.ahtCouse.push(couse)
      // ahtCouse: [...this.state.ahtCouse, couse]
    })
  }

  render() {
    return ( 
      <div>
        <h1>AHT 1</h1>

          <AHT2 
          ahtCouse = {this.state.ahtCouse}
          addNewCouse = {this.addNewCouse}
          />
          
        </div>
    )
  }
}

export default AHT;



