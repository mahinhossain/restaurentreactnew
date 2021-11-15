import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import UserComent from "./UserComent";
import { baseUrl } from "../Data/DataServices";
export default function Modal1({
  item,
  modalShow,
  showModal,
  comment,
  setshowModal,
}) {
  var dateFormat = require("dateformat");
  const [getUsrComment, setUsrComment] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl + "/UserComment")

      .then((res) => setUsrComment(res.data))
      .catch((err) => console.log(`err`, err));
  }, []);

  const filterresult = getUsrComment.filter((comment) => {
    return comment.DishId === item.id;
  });

  return (
    <Modal isOpen={showModal}>
      <div className="row p-0 m-0">
        <div className="col-md-7">
          <img class="card-img-top " src={item.img} alt="Card image cap" />
        </div>
        <div className="col-md-5 bg-light p-1 ">
          <button
            className="btn btn-danger  float-right "
            onClick={() => modalShow()}
          >
            Close
          </button>
          <div class="card-body  m-0 p-0">
            <h5 class="card-title" style={{ textTransform: "capitalize" }}>
              Title: {item.title}
            </h5>
            <h6 class="card-title text-danger ">Price:{item.price}</h6>
            <h6 class="card-title">Category:{item.category}</h6>
            <p class="card-text" style={{ fontFamily: "monospace" }}>
              Deatils:{item.desc}
            </p>
          </div>
          <h5 className="text-center clearfix text-success">
            -------User Review-------
          </h5>
          {/* review */}
          {filterresult.map((filterCmnt) => (
            <div className="bg-white m-2">
              <div className="row p-0">
                <h6 className="col-6 m-0 ">{filterCmnt.name}</h6>
                <p className="text-success col-6 text-right m-0 ">
                  {dateFormat(filterCmnt.date, "mmmm dS, yyyy")}
                </p>
              </div>

              <p className="m-0 p-0">{filterCmnt.comment}</p>
              <p className="text-right">
                Rate :<span class="badge badge-danger">{filterCmnt.rate}</span>
              </p>
            </div>
          ))}
          {/* <section
            style={{
              background: "#FFEBF9",
              flex: 1,
              display: "flex",
              borderWidth: "7",
              borderColor: "black",
              justifyContent: "space-between",
              borderRadius: 4,
              borderBlockWidth: 22,
            }}
          >
            <h6>mhin hossain</h6>
            <div>Rate:8</div>
            <div>22 july 2102</div>
          </section>
          <p>hfsdhfaip loremdfalskd asdfhasdlk asdf sdfsd ff sdafgiu</p> */}
          <UserComent item={item} />
        </div>
      </div>
    </Modal>
  );
}
