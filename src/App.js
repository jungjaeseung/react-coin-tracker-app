import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=50")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length} coins!)</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin, index) => (
            <li key={coin.id} value={index}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(3)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
