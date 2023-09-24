

export default function Common() {
  
  const tokens = ["ETH", "DAI", "USDC", "USDT", "WBTC", "WETH"];
  
  return (
    <div className="flex flex-wrap">
      {tokens.map(token => (
        <div className="flex border rounded-xl m-2 p-1 justify-evenly">
          <img src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token}.svg`} className="mx-1" />
          <p className="mx-1">{token}</p>
        </div>
      ))}
    </div>
  )
}