import React, { useState } from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { userSendMail } from "../icons/Icons";
import { sendMail } from "../../../service/mail.service";

const ContactForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    await sendMail(email, text, subject);
    setSent(true);
  };

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
              {!sent ? (
                <Form onSubmit={handleSend}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Form.Group>
                  <Form.Group id="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="subject"
                      required
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                    />
                  </Form.Group>
                  <Form.Group id="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      as="textarea"
                      required
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                    />
                  </Form.Group>

                  <Button disabled={loading} className="w-100" type="submit">
                    Send {userSendMail}
                  </Button>
                </Form>
              ) : (
                <h1>Email Sent</h1>
              )}
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ContactForm;
