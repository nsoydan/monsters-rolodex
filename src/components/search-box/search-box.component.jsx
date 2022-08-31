import './search-box.style.css';

const SearchBox = ({placeholder,onChangeHandler})=>(
        
    <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
    />
)

export default SearchBox;