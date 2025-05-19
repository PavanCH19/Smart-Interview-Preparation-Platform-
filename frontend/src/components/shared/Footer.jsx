// Footer.jsx
import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer-section py-5 text-white bg-dark mt-5">
            <Container>
                <Row className="mb-4">
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5 className="fw-bold mb-3">Interview Prep AI</h5>
                        <p className="small text-muted">
                            Sharpen your interview skills with AI-powered feedback, tailored questions, and gamified progress.
                        </p>
                        <div className="social-icons mt-3">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </Col>

                    <Col md={4} className="mb-3 mb-md-0">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled small">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#faq">FAQs</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <h5 className="fw-bold mb-3">Subscribe to Newsletter</h5>
                        <Form>
                            <InputGroup>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Email for newsletter"
                                />
                                <Button variant="warning" type="submit">
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </Form>
                        <small className="text-muted mt-2 d-block">
                            Stay updated with the latest tips and features.
                        </small>
                    </Col>
                </Row>

                <hr className="border-secondary" />

                <Row className="text-center text-md-start">
                    <Col md={6} className="mb-2 mb-md-0">
                        <p className="mb-0 small text-muted">
                            &copy; {new Date().getFullYear()} Interview Prep AI. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <a href="#features" className="footer-link me-3">Features</a>
                        <a href="#faq" className="footer-link me-3">FAQs</a>
                        <a href="#about" className="footer-link">About</a>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
  .footer-section {
    background-color: #1b1b1f;
    font-size: 1.05rem; /* Increased base font size */
  }
  .footer-section h5 {
    color: #ffc107;
    font-size: 1.25rem; /* Slightly bigger for headings */
  }
  .footer-link {
    color: #ccc;
    text-decoration: none;
    font-size: 1rem; /* bigger links */
    transition: color 0.3s ease;
  }
  .footer-link:hover {
    color: #ffc107;
    text-decoration: underline;
  }
  .social-icons a {
    color: #ccc;
    font-size: 1.5rem; /* larger social icons */
    margin-right: 15px;
    transition: color 0.3s ease;
  }
  .social-icons a:hover {
    color: #ffc107;
  }
  input.form-control {
    border-radius: 0;
    font-size: 1rem; /* bigger input text */
  }
  button.btn-warning {
    border-radius: 0;
    font-weight: 600;
    letter-spacing: 0.05em;
    font-size: 1rem; /* bigger button text */
    transition: background-color 0.3s ease;
  }
  button.btn-warning:hover {
    background-color: #e0a800;
    color: #fff;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-color: #444;
  }
  p.small, ul.small {
    font-size: 1rem; /* increase small text size */
  }
`}</style>

        </footer>
    );
}

export default Footer;
