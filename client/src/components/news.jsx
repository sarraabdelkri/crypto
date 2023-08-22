import React, { useState, useEffect } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { Container } from "react-bootstrap";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified, count }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const [cryptoNews, setCryptoNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
          {
            method: "GET",
            headers: {
              "x-bingapis-sdk": "true",
              "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
              "x-rapidapi-key":
                "c48509011fmsh0f7e041fa9da0a0p10599cjsn3639e4d47867",
            },
          }
        );
        const data = await response.json();
        setCryptoNews(data.value);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [newsCategory, count]);



  return (
    <>
     
     <div className="container mx-auto my-20">
      <div className="mt-20 pt-5 pb-2 px-5 text-3xl font-semibold text-left text-gray-900">
        <h2>The News</h2>
        <p className="mt-1 text-sm font-normal text-gray-700">
    It"s All About The News
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-center md:justify-evenly mx-auto overflow-x-auto relative">
      <Row gutter={[24, 24]}>
              {!simplified && (
                <Col span={24}>
                  <Select
                    showSearch
                    className="select-news"
                    placeholder="Select a Crypto"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="Cryptocurency">Cryptocurrency</Option>
                  </Select>
                </Col>
              )}
              {cryptoNews.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                  <Card hoverable className="news-card">
                    <a href={news.url} target="_blank" rel="noreferrer">
                      <div className="news-image-container">
                        <Title className="news-title" level={4}>
                          {news.name}
                        </Title>
                        <img
                          style={{ maxWidth: "200px", maxHeight: "200px" }}
                          src={news?.image?.thumbnail?.contentUrl || demoImage}
                          alt=""
                        />
                      </div>
                      <p>
                        {news.description.length > 100
                          ? `${news.description.substring(0, 100)}...`
                          : news.description}
                      </p>
                      <div className="provider-container">
                        <div>
                          <Avatar
                            src={
                              news.provider[0]?.image?.thumbnail?.contentUrl ||
                              demoImage
                            }
                            alt=""
                          />
                          <Text className="provider-name">
                            {news.provider[0]?.name}
                          </Text>
                        </div>
                        <Text>
                          {moment(news.datePublished).startOf("ss").fromNow()}
                        </Text>
                      </div>
                    </a>
                  </Card>
                </Col>
              ))}
            </Row>
         
      </div>
    </div>
      
    </>
  );
};

export default News;
