import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap"; // Import necessary components from react-bootstrap
import parse from "html-react-parser";
import "../components/CryptoDetails.css";

const CryptoDetails = () => {
  const { name } = useParams();
  const [detailedCrypto, setDetailedCrypto] = useState(null);

  useEffect(() => {
    async function fetchDetailedCrypto() {
      try {
        const lowercaseName = name.toLowerCase();
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${lowercaseName}?localization=false&community_data=false&developer_data=false`
        );
        const detailedCryptoData = await response.json();
        setDetailedCrypto(detailedCryptoData);
      } catch (error) {
        console.error("Error fetching detailed crypto:", error);
      }
    }

    fetchDetailedCrypto();
  }, [name]);

  const priceDetails = detailedCrypto?.market_data || {};
  return (
    <div className="container mx-auto my-20">
    <div className="mt-20 pt-5 pb-2 px-5 text-3xl font-semibold text-left text-gray-900">
      <h2>The Details </h2>
      <p className="mt-3 text-sm font-normal text-gray-700">
      Details Data for Cryptocurrency: {name}
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-5 items-center md:justify-evenly mx-auto  relative">
   
        {detailedCrypto ? (
          <div>
            <Row>
       
            <Col md={6} className="d-flex align-items-center">
            <div className=" px-5 w-full">
    <img src={detailedCrypto.image.large} alt="coin" className="mr-3" />
    <h2 className="mb-1">
      <span className="bold-text">
        <br/>
        {detailedCrypto.name}
        <span className="smol bold-smol">{detailedCrypto.symbol}</span>
      </span>
    </h2>
  </div>
  </Col>
              <Col md={6} className=" justify-content-end text-right">
                <div>
                  {/* Content for the right column */}
                  <span className="green-title b">Current Price:{" "}</span>
                  <span className="b">
                      <h5>
                        $
                        {priceDetails.current_price?.usd < 1
                          ? priceDetails.current_price?.usd
                          : priceDetails.current_price?.usd.toLocaleString(
                              "en",
                              {
                                minimumFractionDigits: 2,
                              }
                            )}
                      </h5>
                    </span>{" "}
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col md={4}>
              <span className="green-title b">Circulating Supply: </span>
                <span className="b">
                      {priceDetails.circulating_supply
                        ? priceDetails.circulating_supply.toLocaleString("en")
                        : null}
                    </span>
              </Col>
              <Col md={4}>
              <br/>
              <span className="green-title b">Volume: </span>
                 
                <span className="b">
                      {priceDetails.total_volume?.usd
                        ? priceDetails.total_volume?.usd.toLocaleString("en")
                        : null}
                    </span>
              </Col>
              <br/>
              <Col md={4}>
              <span className="green-title b">  24 Hour High:  </span>
              
                <span className="b">
                      $
                      {priceDetails.high_24h?.usd
                        ? priceDetails.high_24h?.usd.toLocaleString("en")
                        : null}
                    </span>{" "}
              </Col>
            </Row>
            <br/>
            <hr />
            <Row>
              <Col>
              <span className="green-title b">  Description:  </span>
              <br/>
              <br/>
                <Card.Text>
                  {parse(detailedCrypto.description?.en)}
                </Card.Text>
              </Col>
            </Row>
            <hr />
          </div>
        ) : (
          "Loading..."
        )}
     <img src="/images/undraw-crypto.svg" className="w-1/3 h-5/3 md:w-5/3 top-image" />


        </div>
      
    </div>
 
  );
};

export default CryptoDetails;
