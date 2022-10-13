import "./card-list.style.css";
import Card from "../card/card.component";
import { Monster } from "../../App";
type CardListProps = {
  monsters: Monster[];
};

const CardList = (
  { monsters }: CardListProps // directly destructring in here
) => (
  // () implicit return using instead of return()

  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
