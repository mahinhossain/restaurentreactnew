import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { baseUrl } from "../Data/DataServices";
export default function Menu() {
  const [Dish, setDish] = useState([]);

  console.log(`baseUrl`, baseUrl + "/Data");
  useEffect(() => {
    axios
      .get(baseUrl + "/Data")
      .then((res) => setDish(res.data))
      .catch((err) => console.log(`err`, err));
  }, []);

  // const handleCpmnt = (Data1) => {};
  // setData(Arr);
  console.log(`object`, Dish.img);
  return (
    <div className="hide m-3">
      <div className=" row hide">
        {Dish.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}
