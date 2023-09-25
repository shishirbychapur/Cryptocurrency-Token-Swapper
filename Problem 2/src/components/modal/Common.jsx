import CommonItem from "./CommonItem";

export default function Common({ type, close }) {
  
  const tokens = ["ETH", "DAI", "USDC", "USDT", "WBTC", "WETH"];
  
  return (
    <div className="flex flex-wrap">
      {tokens.map((token, index) => <CommonItem token={token} key={index} type={type} close={close} />)}
    </div>
  )
}