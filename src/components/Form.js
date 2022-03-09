import React from "react";

class From extends React.Component {
    handleSubmit = (e) => {
            e.preventDefault();
			alert('AHT Training Center');
    }
	render(){
        return(
            <>
                <form onSubmit={(e) => this.handleSubmit(e)}>
				  <button type="submit">Submit</button>
				</form>
            </>
        )
    }
	
}

export default From;