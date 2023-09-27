import React from "react";

export default function ListItem({ token, setToken, close }) {

  const handleSelect = () => {
    setToken({ name: token.currency, svg: `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.currency}.svg` });
    close();
  }

  return (
    <div className="flex p-2 border rounded-xl m-2 cursor-pointer hover:border-green-500" onClick={handleSelect}>
      <img src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.currency}.svg`} className="h-10 mx-2" />
      <div className="flex flex-col">
        <p className="font-bold">{token.currency}</p>
        <p>{"Last updated: "}{new Date(token.date).toString().slice(4, 15)}</p>
      </div>
    </div>  
  );

}