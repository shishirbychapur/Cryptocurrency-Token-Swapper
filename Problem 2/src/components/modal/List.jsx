import ListItem from './ListItem';
import { Rates } from "../../assets/Rates";
import React from 'react';

export default function List({ setToken, close, keyword }) {

  return (
    <div className="h-60 overflow-auto m-2">
      {Rates.filter(t => t.currency.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
            .map((token, index) => <ListItem token={token} key={index} close={close} setToken={setToken} />)}
    </div>
  )
}