import React from 'react'

class Scroll extends React.Component{
    
    render(){
        console.log(this.props);
        return(
            <div style={{overflow:'auto',border:'5px solid black',height:'500px'}}>
                {this.props.children}
            </div>
        )
    }
}
export default Scroll;