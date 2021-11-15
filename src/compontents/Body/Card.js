import React, { useState } from "react";
import Modal1 from "./Modal1";

export default function Card({ item, handleCpmnt }) {
  const [showModal, setshowModal] = useState(false);
  const { comment } = item;

  const modalShow = () => {
    setshowModal(!showModal);
  };
  console.log(`item.img`, item.img);
  return (
    <diiv class="col-md-4  m-0  mt-4 hide">
      <div class="card shadow-lg ">
        <img
          class="card-img-top"
          src={item.img}
          alt="Card image cap "
          onClick={() => modalShow()}
        />
        <div class="card-body">
          <h5
            className="card-title "
            style={{ textTransform: "capitalize", color: "green" }}
          >
            {item.title}
          </h5>
          <p class="card-text " style={{ fontFamily: "monospace" }}>
            {item.desc}
          </p>
        </div>
      </div>
      <Modal1
        item={item}
        modalShow={modalShow}
        showModal={showModal}
        comment={comment}
        setshowModal={setshowModal}
      />
    </diiv>
  );
}
