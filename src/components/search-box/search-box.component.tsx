import { ChangeEventHandler } from "react";
import "./search-box.style.css";

type SearchBoxProps = {
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
