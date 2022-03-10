import React from 'react';

class EssayForm extends React.Component {
    state = {
      name: 'Volvo'
    }
  
    handleChange = (event) => {
      this.setState({
        name: event.target.value
      });
    }
  
    render() {
      return (
        <form>
            <select value={this.state.name} onChange={(event)=>this.handleChange(event)}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <p>{this.state.name}</p>
        </form>
      );
    }
  }

export default EssayForm;
