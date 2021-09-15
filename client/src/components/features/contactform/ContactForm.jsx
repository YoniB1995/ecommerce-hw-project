import React, { useState } from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { userSendMail } from "../icons/Icons";

const ContactForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    alert("build on progress..contact me yonatansamfisher@gmail.com");
  }
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "-50vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Contact Us ! </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>
                <Form.Group id="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="subject" required />
                </Form.Group>
                <Form.Group id="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    as="textarea"
                    required
                  />
                </Form.Group>

                <Button disabled={loading} className="w-100" type="submit">
                  Send {userSendMail}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ContactForm;
