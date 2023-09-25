import { createContext } from "react";

export const SelectedContext = createContext(
  {
    fromToken: "Select Token",
    fromAmount: 0,
    fromSVG:"",
    toToken: "Select Token",
    toAmount: 0,
    toSVG: "",
    search: "",
  });