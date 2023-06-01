import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_DUST_API_KEY;
const URL = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=${API_KEY}&returnType=json&numOfRows=1&pageNo=1&stationName=%ED%9A%A8%EC%9E%90%EB%8F%99&dataTerm=DAILY&ver=1.0`;

const DustAPI = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.get(URL);
      setData(response.data.response.body.items[0]);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;
  if (data.coFlag === "통신장애")
    return <div>미세먼지 측정소 통신장애... API 제공 불가 상황</div>;

  return (
    <>
      <li>미세먼지: {data.pm10Value}</li>
      <li>초미세먼지: {data.pm25Value}</li>
      <li>오존: {data.o3Value}</li>
    </>
  );
};

export default DustAPI;
