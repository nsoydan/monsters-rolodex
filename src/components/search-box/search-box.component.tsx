import { ChangeEventHandler } from "react";
import "./search-box.style.css";

type SearchBoxProps = {
  placeholder: string;
  className: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  placeholder,
  className,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
