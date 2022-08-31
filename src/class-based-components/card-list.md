import { Component } from "react";
import './card-list.style.css';
import Card from '../card/card.component';

class CardList extends Component {
    

    render(){
        console.log("render in Cardlist component")
        const {monsters}=this.props;
        
        return (
        <div className="card-list" >
            { monsters.map(
                (monster)=>{
                    //const {id, name,email}= monster;  // Destructuring assignment in JS
                    
                    return(
                    <Card monster={monster} key={monsters.id}/>
                    )}                
            )}
        </div>
        );
    }
}

export default CardList;