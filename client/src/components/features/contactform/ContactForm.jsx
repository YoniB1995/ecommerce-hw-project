import React, { useRef, useState } from "react";
import {
  Card,
  Button,
  Form,
  Alert,
  Container,
  FormControl,
} from "react-bootstrap";
import { userSendMail } from "../icons/Icons";
import { useHistory, Link } from "react-router-dom";

const ContactForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      // await signUp(emailRef.current.value, passwordRef.current.value);
      // history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
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
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="subject" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    as="textarea"
                    ref={passwordRef}
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
