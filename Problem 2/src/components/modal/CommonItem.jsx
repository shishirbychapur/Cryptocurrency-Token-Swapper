import React from "react";

export default function CommonItem({ token, close, setToken }) {

  const handleSelect = () => {
    // const result = Calculate(data);
    setToken({ name: token, svg: `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token}.svg` });
    close();
  }
  
  return (
    <div className="flex border rounded-xl m-2 p-1 justify-evenly cursor-pointer hover:border-green-500" onClick={handleSelect}>
      <img src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token}.svg`} className="mx-1" />
      <p className="mx-1">{token}</p>
    </div>
  );
}