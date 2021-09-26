 import React from 'react';
 import './CoinsInfo.css';
 
 /**
  * CoinsInfo functional component takes following params  
  * @param {marketCapRank, image, name, price, marketCap, pricePercentChange} 
  * @returns coins list with data like Market Cap Rank, Name, Image, Current price, Market Cap, Change of Price in Percentage 
  *  
  */

 const CoinsInfo = ({ marketCapRank, image, name, price, marketCap, pricePercentChange }) => {
  return (
    <div className = "coins-list-container">
      <div className = "coins-list-row">
        <div className = "coin">
          <p className = "coin-market-cap-rank"> {marketCapRank}</p>
          <img src={image} alt = "crypto coin"/>
          <h1> {name} </h1>
          
        </div>
        <div className = "coin-data">
          <p className = "coin-price"> ${price} </p>
          <p className = "coin-market-cap">${marketCap.toLocaleString()}</p>
          { pricePercentChange < 0 ? (
            <p className="coin-price-percent red"> {pricePercentChange.toFixed(3)}%</p>
           ) : (
            <p className="coin-price-percent green"> {pricePercentChange.toFixed(3)}%</p>
           ) 
          }


        </div>
      </div>  
           
    </div>
    
  )
 }
 
 export default CoinsInfo
 