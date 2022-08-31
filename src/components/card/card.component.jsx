
import './card.style.css';

const Card =({monster})=>{
    const {id,name,email}=monster;        

    return(
        <div className="card-container" key={id} >
        <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
        <h1>{name}</h1>
        <p>{email}</p> 
        </div>
    )
   
}

export default Card;