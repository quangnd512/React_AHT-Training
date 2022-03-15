import React from 'react';

class AHT2 extends React.Component {
    handleClick = (e) => {
        // e.preventDefault();
        
        // this.props.addNewCouse({
        //     id: Math.floor(Math.random() * 11),
        //     name: 'Python'
        // })
        // {console.log(this.props.ahtCouse)}

        let title = { id: 1, name: 'AHT' }
        let name = {...title}
        console.log(name);
    }
  render() {
    return ( 
        <div>
            {
                <>
                    <button onClick={(e) => this.handleClick(e)}>Add couse</button>
                </>
            }
        </div>
    )
  }
}

export default AHT2;



