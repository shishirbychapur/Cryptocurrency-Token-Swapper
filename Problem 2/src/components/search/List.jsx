import React from 'react';

export default function List() {

  const [tokens, setTokens] = React.useState([]);
  
  const getTokens = async () => {
    await fetch("https://interview.switcheo.com/prices.json")
      .then(response => response.json())
      .then(data => setTokens(data)); 
  };
  
  React.useEffect(() => {
    getTokens();
  }, []);

  return (
    <div className="h-60 overflow-auto m-2">
      {tokens.map(token => (
        <div className="flex p-2 border rounded-xl m-2">
          <img src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.currency}.svg`} className="h-10 mx-2"/>
          <div className="flex flex-col">
            <p className="font-bold">{token.currency}</p>
            <p>{"Last updated: "}{new Date(token.date).toString().slice(4, 15)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}