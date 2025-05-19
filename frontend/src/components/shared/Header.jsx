import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <Navbar expand="lg" bg="light" variant="light" className="shadow-sm py-3">
            <Container>
                <img src="/vite.svg" alt="Logo" className="logo" />
                <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-3">
                    SmartInterviewPrep
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <div className="nav-links d-flex gap-4 align-items-center">
                        <Link className="nav-item-link" to="/">Home</Link>
                        <Link className="nav-item-link" to="/features">Features</Link>
                        <Link className="nav-item-link" to="/how-it-works">How It Works</Link>
                        <Link className="nav-item-link" to="/testimonials">Testimonials</Link>
                        <Link className="nav-item-link" to="/faqs">FAQs</Link>
                        <Link className="nav-item-link" to="/contact">Contact</Link>
                    </div>

                    <div className="d-flex gap-2">
                        <Button as={Link} to="/login" variant="primary" className="px-4">
                            Login
                        </Button>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
