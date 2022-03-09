import React from 'react';

class AHT extends React.Component {
    state = {
        name: 'AHT'
    }

    handleChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }
  render() {
    return ( 
        <div>
          <div>
            <input type="text" onChange={(e) => this.handleChange(e)} />
          </div>
            <p>This is {this.state.name }</p>
        </div>
    )
  }
}

export default AHT;



