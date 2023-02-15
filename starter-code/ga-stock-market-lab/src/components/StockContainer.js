import React from 'react';
import StockCard from './StockCard';

export default function StockContainer({ stocks }) {
  return (
    <div>
      <h2>Stocks</h2>

      {stocks.map((stock, index) => (
        <StockCard stock={stock} key={index} />
      ))}

      
    </div>
  );
}
