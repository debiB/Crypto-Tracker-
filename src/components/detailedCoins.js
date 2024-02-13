
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./detailedCoins.css"
const DetailedCoins = () => {
    const [data, setData] = useState(null); 
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(data);

    if (!data) return null;
  return (
    
    <div className="detailed_container">
         {data.slice(0, 100).map((coin, index) => (
                    <div className="card" key={index}>
                        <div className="top">
                            <img src={coin.image} alt="coin"></img>
                        </div>
                        <div>
                            <h5>{coin.name}</h5>
                            <p>${coin.current_price.toLocaleString()}</p>
                        </div>
                        {coin.price_change_percentage_24h < 0 ? (
                            <span className="red">
                                <FiArrowDown className ="icon" />
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className="green">
                                <FiArrowUpRight className="icon" />
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>
                ))}
    </div>
  )
}

export default DetailedCoins
