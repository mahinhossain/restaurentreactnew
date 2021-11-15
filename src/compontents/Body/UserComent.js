import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, InputGroup, Col, Button } from "react-bootstrap";
import { baseUrl } from "../Data/DataServices";

export default function UserComent({ item }) {
  const [userComment, setuserComment] = useState({
    name: "",
    comment: "",
    rate: "",
    date: new Date(),
    DishId: item.id,
  });

  const handleComment = (value, name) => {
    const CopyState = { ...userComment };

    CopyState[name] = value;
    // setuserComment(CopyState.concat(date));
    setuserComment(CopyState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseUrl + "/UserComment", userComment)
      .then((res) => alert("Successfull"))
      .catch((err) => alert("Error"));

    console.log(`userComment`, userComment);
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)} className="bg-warning p-2">
      <Form.Row>
        {/* name */}
        <Form.Group as={Col} md="6">
          <Form.Control
            required
            type="text"
            placeholder=" Name"
            name="name"
            onChange={(e) => handleComment(e.target.value, "name")}
            value={userComment.name}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>{" "}
        {/* email */}
        <Form.Group as={Col} md="6" placeholder="Rate">
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            value={userComment.rate}
            onChange={(e) => handleComment(e.target.value, "rate")}
          >
            <option>Rate</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}> 3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        {/* name */}
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Control
            required
            as="textarea"
            placeholder=" Comment......"
            onChange={(e) => handleComment(e.target.value, "comment")}
            value={userComment.comment}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>{" "}
      </Form.Row>{" "}
      <button className="btn btn-info" type="submit">
        Submit
      </button>
    </Form>
  );
}
