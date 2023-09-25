import Exchange from "./components/Exchange";
import React from "react";
import { SelectedContext } from './context/SelectedContext';

export default function App() {
  
  const [data, setData] = React.useState({fromToken: "Select Token", fromAmount: 0, toToken: "Select Token", toAmount: 0, fromSVG: "", toSVG: "", search: ""})

  return (
    <div className="bg-back h-screen flex items-center justify-center">
      <SelectedContext.Provider value={{ data, setData }}>
        <Exchange />
      </SelectedContext.Provider>
    </div>
  )
}
