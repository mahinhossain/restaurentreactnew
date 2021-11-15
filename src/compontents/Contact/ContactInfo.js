import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Data/DataServices";
export default function Tst() {
  var dateFormat = require("dateformat");

  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/UserInfo`)
      .then((res) => setData(res.data.reverse()))
      .catch((err) => console.log(`err`, err));
  }, []);

  return (
    <div className="row container mx-auto">
      {Data.map((item) => (
        <div
          className="card shadow   col-md-4
         "
        >
          <div className="card-body">
            <p className="text-danger"> Name:{item.name}</p>
            <p className="text-light"> Email:{item.email}</p>
            <p className="text-warning"> Phone:{item.phone}</p>
            <p className="text-info"> Address:{item.address}</p>
            <p className="text-primary"> Comment:{item.comment}</p>
            <p className="text-success">
              Date:{dateFormat(item.date1, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
