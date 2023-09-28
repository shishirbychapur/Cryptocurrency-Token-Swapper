
Some of the computational inefficiencies found are:
- `getPriority` function accepts `any` type as parameter, but only checks whether it matches the blockchain name. It would be better to fix the parameter type as `String`.
- `props` are passed but not used (`rest` and `children` are combined into props, but again, only `rest` is used.)
-  `filter` function inside the `useMemo` hook is poorly written and inefficient.
- `sort` function has also been defined poorly with unecessary statements which can be cut down.
- `FormattedWalletBalance` interface is not required, and the `toFixed()` function can be called when passing the amount over to `WalletRow`.
- The result of mapping `sortedBalances` is not used (`formattedBalances`).

A correct version is provided below.

```
interface WalletBalance {
  currency: string;
  amount: number;
}

// Assume there is a database containing the blockchains with their priorities. Here I'm using a hashtable.
const BLOCKCHAINS= new Map<string, number>([
  ['Osmosis', 100],
  ['Ethereum', 50],
  ['Arbitrum', 30],
  ['Zilliqa', 20],
  ['Neo', 20],
]);

// Takes in blockchain name, returns priority by searching through hashtable.
const getPriority = (blockchainName: string): number => {
  return BLOCKCHAINS.get(blockchainName) || -99;
}

// Defined Class Datasource
class Datasource {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  // Makes asynchronous fetch call to retrieve prices.
  async getPrices(): number => await fetch(this.url).then(res => res.json()).catch(err => -1);
}

const WalletPage: React.FC<Props> = ({ ...rest }) => {
  const balances = useWalletBalances();
	const [prices, setPrices] = useState({});

  // Creates datasource instance and stores state of prices.
  useEffect(() => {
    const datasource = new Datasource("https://interview.switcheo.com/prices.json");
    datasource.getPrices().then(prices => setPrices(prices));
  }, []);

  // Filter and sort the balances.
  const sortedBalances = useMemo(() => {
    return balances
      .filter(balance => getPriority(balance.blockchain) > -99 && balance.amount <= 0)
      .sort((a, b) => getPriority(b.blockchain) - getPriority(a.blockchain));
  }, [balances, prices]);

  // Use the sorted balances to create WalletRows.
  const rows = sortedBalances.map((balance, index) => {
    const usdValue = prices[balance.currency] * balance.amount;
    return (
      <WalletRow 
        className={classes.row}
        key={balance.currency}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.amount.toFixed()}
      />
    )
  })

  // Return the rows.
  return (
    <div {...rest}>
      {rows}
    </div>
  )
}

```
