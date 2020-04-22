import React from "react";
import "./cardlist.styles.css";
import Card from './../card/Card';
const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((m) => (
        <Card key={m.id} monster={m}/>
      ))}
    </div>
  );
};

export default CardList;
