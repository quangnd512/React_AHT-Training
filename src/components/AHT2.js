import React from 'react';

class AHT2 extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.addNewCouse('Python')
    }
  render() {
    let ahtCouse =  this.props.ahtCouse;
    let checkCouse = this.props.check;
    return ( 
        <div>
            {
                <>
                <button onClick={(e)=> this.handleClick(e)}>Add couse</button>
                {/* {ahtCouse.map((item, index) => {
                    return(
                        <>
                            
                        </>
                    )
                })} */}
                {console.log(ahtCouse)}
                </>
            }
        </div>
    )
  }
}

export default AHT2;



