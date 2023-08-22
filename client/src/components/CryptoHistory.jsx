import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const CryptoHistoryPage = () => {
  const { name } = useParams(); // Get the cryptocurrency name from the URL parameter
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistoricalData();
  }, [name]);

  const fetchHistoricalData = async () => {
    try {
      const lowercaseName = name.toLowerCase(); // Convert name to lowercase
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${lowercaseName}/market_chart`,
        {
          params: {
            vs_currency: "usd",
            days: 30,
          },
        }
      );

      const priceData = response.data.prices;

      const formattedData = priceData.map((data) => ({
        date: new Date(data[0]).toLocaleDateString(),
        price: data[1],
      }));

      setHistoricalData(formattedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching historical data:", error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
        <div className="container  my-20">    
         <div className="mt-20 pt-5 pb-2 px-5 text-3xl font-semibold text-left text-gray-900">
        <h2>History</h2>
        <p className="mt-1 text-sm font-normal text-gray-700">
        Historical Data for Cryptocurrency: {name}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-20 items-center md:justify-evenly mx-auto  relative">
                  <br />
                  <LineChart width={600} height={300} data={historicalData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                  </LineChart>
                  
                  <img src="/images/undraw-crypto.svg" className="w-1/2 h-1/2 md:w-1/3"/>
                  
                </div>
             
           
         
      
   </div>

    </>
  );
};

export default CryptoHistoryPage;
