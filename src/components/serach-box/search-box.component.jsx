import { Component } from "react";

class SearchBox extends Component{
    render(){
        return(
            <input 
            type="search"
            placeholder="Search monsters"
            onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox;