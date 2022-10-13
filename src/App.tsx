import { useState, useEffect, ChangeEvent } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchString, setSearchString] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    // console.log("fetched useEffect çalıştı... ");
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));
    const fecthUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fecthUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchString]);

  function onSearchChange(e: ChangeEvent<HTMLInputElement>): void {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchString(searchString);
  }

  return (
    <div className="App">
      <h1 className="app-title">MONSTER ROLODEX</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="Search Monsters..."
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
