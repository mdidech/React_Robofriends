import React,{ Component } from 'react';
import Card from './Card';

class CardList extends Component{
    render(){
        return(
            <div>
                {
                   this.props.robots.map((id,index)=>{
                    return <Card key={index} id={this.props.robots[index].id} name={this.props.robots[index].name} email={this.props.robots[index].email} />
                }) 
                }
            </div>
        );
    }
    }
       
export default CardList;