import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';
import Coins from './components/Coins';
import Coin from './routes/Coin';
import Navbar from './components/Navbar';


function App() {

const [coins, setCoins] = useState([]);

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en'

useEffect(() => {
  axios.get(url).then((response) => {
    setCoins(response.data);
    console.log(response.data[0]);
  }).catch((error) => {
    console.log(error);
  })
}, [])



  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
