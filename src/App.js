import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TableCoins from './components/TableCoins';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  
  const getCoinsData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    setCoins(res.data);
  }
  
  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3 text-center">Crypto Coins Market</h1>
        <input type="text" className="form-control bg-dark text-center text-light border-0 mt-4" placeholder="Search a Coin" value={search} onChange={(e) => setSearch(e.target.value)} />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
