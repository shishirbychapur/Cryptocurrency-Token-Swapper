import React from "react";

export default function Prices() {

  React.useEffect(() => {

    fetch("https://interview.switcheo.com/prices.json")
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div></div>
  );
}