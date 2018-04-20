import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
            <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
                <img alt='robots' src={`https://robohash.org/${this.props.id}?50x50`} />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        )
    }
}
export default Card;