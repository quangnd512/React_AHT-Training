import React from 'react';

class AHT extends React.Component {
    state = {
        name: 'AHT'
    }
  render() {
    return ( 
        <div>
            <button onClick={activateUser}>
                Activate User
            </button>

            <p>This is {this.state.name}</p>
        </div>
    )
  }
}

export default AHT;



