import React from "react";
import { SelectedContext } from "../../context/SelectedContext";

export default function ListItem({ token, type, close }) {

  const { data, setData } = React.useContext(SelectedContext);

  const handleSelect = () => {
    if (type == "from") {
      setData({...data, fromToken: token.currency, fromSVG: `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.currency}.svg`, search: ""});
    } else {
      setData({...data, toToken: token.currency, toSVG: `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.currency}.svg`, search: ""});
    }
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