import CommonItem from "./CommonItem";

export default function Common({ close, setToken }) {
  
  const tokens = ["ETH", "USDC",  "WBTC", "GMX", "LUNA"];
  
  return (
    <div className="flex flex-wrap">
      {tokens.map((token, index) => <CommonItem token={token} key={index} close={close} setToken={setToken}/>)}
    </div>
  )
}