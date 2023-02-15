import React, { Component, useEffect, useState } from 'react';
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css'
import sendRequest from './utilities/send-request';


export default function App() {
  const [stocks, setStocks] = useState(null)

  useEffect(() => {
    async function getStocks() {
      const stocksList = await sendRequest("http://localhost:3001/stocks")
      setStocks(stocksList)
      } 
    getStocks()
    }, [])
  
  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer stocks={stocks} />
        </div>
        <div className="col-6">
          <PortfolioContainer />
        </div>
      </div>
    </main>
  );
}

