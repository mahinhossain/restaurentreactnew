import React, { useState } from "react";
import axios from "axios";
import { Form, InputGroup, Col, Button } from "react-bootstrap";
import { baseUrl } from "../Data/DataServices";
export default function Contact() {
  const [validated, setValidated] = useState(false);

  const [contactInfo, setcontactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    comment: "",
    date1: new Date(),
  });
  const handleCgange = (value, name) => {
    const CopyState = { ...contactInfo };

    CopyState[name] = value;
    // setcontactInfo(CopyState.concat(date));
    setcontactInfo(CopyState);
  };
  const handleSubmit = (e) => {
    axios
      .post(`${baseUrl}/UserInfo`, contactInfo)
      .then((res) => alert("Successfull"))
      .catch((err) => alert("Error"));
    e.preventDefault();
  };
  return (
    <div className="col-6 mt-5">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Row>
          {/* name */}
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label> Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=" Name"
              name="name"
              onChange={(e) => handleCgange(e.target.value, "name")}
              value={contactInfo.name}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>{" "}
          {/* email */}
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label> Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Email "
              value={contactInfo.email}
              onChange={(e) => handleCgange(e.target.value, "email")}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder="City"
              required
              value={contactInfo.phone}
              onChange={(e) => handleCgange(e.target.value, "phone")}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              required
              value={contactInfo.address}
              onChange={(e) => handleCgange(e.target.value, "address")}
            />
          </Form.Group>

          {/*  */}
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Feedback</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Comments...."
              required
              value={contactInfo.comment}
              onChange={(e) => handleCgange(e.target.value, "comment")}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}
