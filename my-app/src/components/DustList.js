import React, { useEffect, useState } from "react";

const DustList = ({ data }) => {
  const [pm10, Setpm10] = useState({ value: data.pm10Value, level: "" });
  const [pm25Value, Setpm25Value] = useState(data.pm25Value);
  const [o3Value, Seto3Value] = useState(data.o3Value);

  useEffect(() => {
    if (pm10.value === "-" || pm10.value === null) {
      Setpm10({ ...pm10, value: "측정 중..." });
    }

    if (pm10.value > 0 && pm10.value <= 30) {
      Setpm10({ ...pm10, level: "좋음" });
    } else if (pm10.value <= 80) {
      Setpm10({ ...pm10, level: "보통" });
    } else if (pm10.value <= 150) {
      Setpm10({ ...pm10, level: "나쁨" });
    } else if (pm10.value >= 151) {
      Setpm10({ ...pm10, level: "매우나쁨" });
    }
  }, []);

  console.log(pm10);

  return <ul className="DustList"></ul>;
};

export default DustList;
