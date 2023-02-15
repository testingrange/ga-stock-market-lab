import React from 'react'

export default function StockCard({stock}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{stock.name/* Company Name */}</h5>
        <p className="card-text">{stock.price/* stock price */}</p>
        { /* use a ternary to display a BUY or SELL button */}
        <button>BUY</button>
      </div>
    </div>
  );
}
