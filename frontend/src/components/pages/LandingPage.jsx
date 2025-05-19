import Footer from "../shared/Footer";
import Header from "../shared/header";
import "./LandingPage.css"
import { Container, Button, Row, Col, Card, Accordion } from "react-bootstrap";

const faqs = [
    { q: "What devices are supported?", a: "You can use it on any device with a modern browser." },
    { q: "Is it free?", a: "Yes, core features are free with optional upgrades." },
    { q: "How is my data stored?", a: "All data is encrypted and stored securely." },
    { q: "Can I use it offline?", a: "Yes! It is designed to work offline with limited features." },
];

const features = [
    { title: "Resume-Based Questions", desc: "Questions tailored to your experience" },
    { title: "Voice Feedback", desc: "Clarity, filler words, pacing – all analyzed" },
    { title: "Gamified Progress", desc: "Badges, streaks, and motivation" },
    { title: "Speech-to-Text Engine", desc: "Real-time transcription with Whisper" },
    { title: "Offline-Friendly Design", desc: "Lightweight, no heavy cloud dependency" },
    { title: "Secure & Private", desc: "Your data stays encrypted and local" },
];

const steps = [
    "Register and Upload Resume",
    "Choose Domain and Target Role",
    "Start Mock Interview",
    "Speak Answers – Get Voice + Text Feedback",
    "Track Your Growth via Dashboard",
];

const testimonials = [
    { name: "Shivani, B.Tech Student", quote: "Helped me crack my dream job in just 3 days!" },
    { name: "Vikas", quote: "Better than traditional prep tools. Love the voice feedback." },
    { name: "Shivani, B.Tech Student", quote: "Helped me crack my dream job in just 3 days!" },
    { name: "Vikas", quote: "Better than traditional prep tools. Love the voice feedback." },
];

function LandingPage() {

    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="hero-section py-5 bg-gradient-primary text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="mb-4 mb-md-0">
                            <h1 className="display-4 fw-bold mb-3">Prepare Smarter, Interview Better.</h1>
                            <p className="lead fs-4">
                                A personalized, AI-lite platform for <span className="text-warning">real-world interview success.</span>
                            </p>
                            <Button href="#features" variant="warning" size="lg" className="shadow-lg mt-3">
                                Get Started
                            </Button>
                        </Col>
                        <Col md={6} className="text-center">
                            <img
                                src="/output.jpg"
                                alt="Interview prep illustration"
                                className="img-fluid rounded shadow-lg"
                                style={{ maxHeight: "400px", objectFit: "contain" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* About Section */}
            <section className="py-5 bg-white text-center">
                <Container>
                    <h2 className="mb-4 fw-bold">About The Project</h2>
                    <p className="lead mx-auto" style={{ maxWidth: "700px", lineHeight: "1.6", color: "#555" }}>
                        This AI-powered interview preparation platform helps you sharpen your skills with tailored
                        questions, real-time voice feedback, and gamified progress tracking. Prepare anytime, anywhere —
                        even offline.
                    </p>
                </Container>
            </section>

            {/* Features Section */}
            <section id="features" className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5 fw-bold">Features</h2>
                    <Row>
                        {features.map((feature, idx) => (
                            <Col key={idx} md={4} className="mb-4">
                                <Card className="h-100 shadow-sm border-0 hover-shadow">
                                    <Card.Body>
                                        <Card.Title className="fw-bold text-primary">{feature.title}</Card.Title>
                                        <Card.Text className="text-muted">{feature.desc}</Card.Text>
                                        <Button variant="outline-primary" className="mt-3 px-4">
                                            Try Now
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* How It Works */}
            <section className="py-5 bg-gradient-light">
                <Container>
                    <h2 className="text-center mb-5 fw-bold text-primary">How It Works</h2>
                    <Row className="text-center justify-content-center g-4">
                        {steps.map((step, idx) => (
                            <Col key={idx} xs={12} sm={6} md={2}>
                                <div className="step-card p-4 rounded shadow-sm h-100 d-flex flex-column justify-content-center mx-auto">
                                    <div className="step-number mb-3">{idx + 1}</div>
                                    <h5 className="fw-bold text-secondary">Step {idx + 1}</h5>
                                    <p className="small text-muted mt-2">{step}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Testimonials */}
            <section className="py-2 bg-light">
                <Container>
                    <h2 className="text-center mb-4 fw-bold fs-3">What Users Say</h2>
                    <Row>
                        {testimonials.map((item, idx) => (
                            <Col key={idx} lg={3} md={6} sm={12} className="mb-3">
                                <Card className="h-100 shadow-sm border-0 bg-white rounded-3 px-2 py-3 testimonial-card small">
                                    <Card.Body className="d-flex flex-column align-items-center text-center">
                                        <div className="mb-2">
                                            <img
                                                src={`https://i.pravatar.cc/100?img=${idx + 10}`}
                                                alt={item.name}
                                                className="rounded-circle shadow-sm"
                                                width="50"
                                                height="50"
                                            />
                                        </div>
                                        <blockquote className="blockquote mb-1">
                                            <p className="fs-6 fst-italic text-dark">
                                                <i className="bi bi-quote fs-5 text-primary me-1" />
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                        <footer className="blockquote-footer mt-1 text-muted fw-medium small">
                                            {item.name}
                                        </footer>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-4 bg-white">
                <Container>
                    <h2 className="text-center mb-4 fw-bold fs-3">FAQs</h2>
                    <Accordion flush className="faq-accordion small">
                        {faqs.map((item, idx) => (
                            <Accordion.Item eventKey={String(idx)} key={idx} className="mb-2 rounded-2 shadow-sm">
                                <Accordion.Header className="fw-medium">{item.q}</Accordion.Header>
                                <Accordion.Body>{item.a}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Container>
            </section>

            <Footer />
        </>
    );
}

export default LandingPage;
