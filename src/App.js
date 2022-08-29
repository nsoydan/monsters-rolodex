import {Component} from 'react';

import './App.css';


class App extends Component {
  constructor (){
    super();

    console.log("Constructor");
    this.state={
      monsters:[],
      searchString:"",
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then((users)=>
        this.setState(
          ()=>{
            return {monsters:users}
          },
          ()=>console.log(this.state)
      ))
  }

  render(){
    console.log("render")

    // Find filtered monsters before every render
    const filteredMonsters= this.state.monsters.filter(
      (monster)=>{
        return monster.name.toLocaleLowerCase().includes(this.state.searchString)
      });


    return (
      <div className="App">
        <input 
        className='search-box' 
        type='search' 
        placeholder='search monster'
        onChange={(e)=>{
          console.log(e)
          const searchString=e.target.value.toLocaleLowerCase()
               
        this.setState(
          ()=>{
            return {searchString}     // Save searchString in state to use everywhere
         })  
        }} />

       {/* Map filtered monsters to render */}

       {filteredMonsters.map((monster)=>{
          return(
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
       })}
    </div>
    );
  }
}
 
export default App;
