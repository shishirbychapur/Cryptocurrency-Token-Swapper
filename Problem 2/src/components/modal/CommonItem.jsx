import React from "react";
import { SelectedContext } from "../../context/SelectedContext";

export default function CommonItem({ token, type, close }) {
  
  const { data, setData } = React.useContext(SelectedContext);

  const handleSelect = () => {
    if (type == "from") {
      setData({...data, fromToken: token, fromSVG: `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token}.svg`, search: ""});
    } else {
      setData({...data, toToken: token, toSVG: `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token}.svg`, search: ""});
    }
    close();
  }
  
  return (
    <div className="flex border rounded-xl m-2 p-1 justify-evenly cursor-pointer hover:border-green-500" onClick={handleSelect}>
      <img src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token}.svg`} className="mx-1" />
      <p className="mx-1">{token}</p>
    </div>
  );
}