import React from 'react';
import CoinRow from './CoinRow';

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume']

const TableCoins = ({ coins, search }) => {

  const filterCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()) |
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {
            titles.map((title, i) => (
              <td key={i}>{title}</td>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          filterCoins.map((coin, i) => (
            <CoinRow coin={coin} index={i} key={coin.id} />
          ))
        }
      </tbody>
    </table>
  );
};

export default TableCoins;