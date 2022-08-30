import { Component } from "react";
import './card.style.css';

class Card extends Component{
    
    render(){
        const {id,name,email}=this.props.monster;        

        return(
            <div className="card-container" key={id} >
                        <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
                       <h1>{name}</h1>
                       <p>{email}</p> 
                    </div>
        )
    }
}

export default Card;