import {Component} from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/serach-box/search-box.component';

class App extends Component {
  constructor (){
    super();

    this.state={
      monsters:[],
      searchString:"",
    }
  }

  componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then((users)=>
        this.setState(
          ()=>{
            return {monsters:users}
          }
      ))
  }

    onSearchChange = (e)=>{
      
      const searchString=e.target.value.toLocaleLowerCase()
           
    this.setState(
      ()=>{
        return {searchString}     // Save searchString in state to use everywhere
     })  
    }





  render(){
    console.log("render in App.js component")

    const {monsters, searchString}=this.state;
    const {onSearchChange}= this;


    // Find filtered monsters before every render
    const filteredMonsters= monsters.filter(
      (monster)=>{
        return monster.name.toLocaleLowerCase().includes(searchString)
      });


    return (
      <div className="App">
        
       <SearchBox onChangeHandler={onSearchChange} /> 
       <CardList  monsters={filteredMonsters} />

    </div>
    );
  }
}
 
export default App;
