import React from 'react';
import AHT2 from './AHT2';

class AHT extends React.Component {
  state = {
    name: 'Quang ND',
    age: 25,
    check: true,
    ahtCouse: [
      {name: 'PHP'},
      {name: 'Javascript'},
      {name: 'React'}
    ]
  }
  
  addNewCouse = (couse) => {
      this.setState({
        addCouse: this.state.ahtCouse.push(couse)
      })
  }

  render() {
    return ( 
        <div>
          <h1>AHT 1</h1>

          <AHT2 
          name = {this.state.name}
          age = {this.state.age}
          check = {this.state.check}
          ahtCouse = {this.state.ahtCouse}
          addNewCouse = {this.addNewCouse}
          />
          
        </div>
    )
  }
}

export default AHT;



