import ListItem from './ListItem';
import { Rates } from "../../assets/Rates";
import React from 'react';
import { SelectedContext } from "../../context/SelectedContext";

export default function List({ type, close }) {

  const { data } = React.useContext(SelectedContext);

  return (
    <div className="h-60 overflow-auto m-2">
      {Rates.filter(t => t.currency.toLocaleLowerCase().includes(data.search.toLocaleLowerCase()))
            .map((token, index) => <ListItem token={token} key={index} type={type} close={close} />)}
    </div>
  )
}