import { useState } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import {
    Button, Card, Row, Col, ProgressBar, ListGroup, Image, Fade
} from 'react-bootstrap';

import {
    FaFire, FaChartLine, FaLightbulb, FaAward, FaBrain, FaRobot
} from 'react-icons/fa';

import Badges from './Badges';

const UserDashboard = () => {
    const dummyStats = {
        userName: 'Pavan',
        sessionsCompleted: 12,
        streakDays: 4,
        lastFeedbackScore: 85,
        lastSessionDate: 'May 20, 2025',
        badges: ['First Interview', '5-Day Streak'],
        skillsParsed: ['Java', 'DBMS', 'OOP'],
        suggestions: [
            'Focus on reducing filler words',
            'Practice behavioral questions',
            'Review Data Structures & Algorithms',
        ],
    };

    const domains = [
        { name: 'IT', logo: 'https://img.icons8.com/color/48/computer.png' },
        { name: 'Marketing', logo: 'https://img.icons8.com/color/48/marketing.png' },
        { name: 'Finance', logo: 'https://img.icons8.com/color/48/accounting.png' },
        { name: 'HR', logo: 'https://img.icons8.com/color/48/conference-call.png' },
    ];

    const companies = [
        { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Infosys_logo.svg/2560px-Infosys_logo.svg.png' },
        { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png' },
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    ];

    const [selectedDomain, setSelectedDomain] = useState(domains[0]);
    const [selectedCompany, setSelectedCompany] = useState(companies[0]);

    const [isChangingDomain, setIsChangingDomain] = useState(false);
    const [isChangingCompany, setIsChangingCompany] = useState(false);

    const renderSelectionCard = (item, onClick) => (
        <Card
            onClick={onClick}
            className="d-flex align-items-center flex-row p-3 shadow-sm border-hover mb-3"
            style={{ cursor: 'pointer', transition: 'transform 0.15s ease-in-out' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <Image
                src={item.logo}
                roundedCircle
                width={45}
                height={45}
                className="me-3"
                alt={item.name}
                style={{ objectFit: 'cover' }}
            />
            <h6 className="mb-0">{item.name}</h6>
        </Card>
    );

    return (
        <>
            <Header />
            <div className="container mt-4">

                {/* 1. Welcome & Tip */}
                <Card className="p-4 mb-4 shadow-sm border-start bg-white text-center">
                    <h2 className="mb-2">
                        Welcome back, <span className="text-primary">{dummyStats.userName}</span>!
                    </h2>
                    <p className="text-muted fs-5">
                        <FaLightbulb className="me-2 text-warning" />
                        "Tip of the day: Confidence comes with practice and reflection."
                    </p>
                </Card>

                {/* 2. Key Stats and Resume Analysis */}
                <Row className="mb-4 g-4">
                    <Col md={6}>

                        {/* Nested Row: Total Sessions and Current Streak */}
                        <Row className="mb-4 d-flex flex-grow-1">
                            <Col md={6}>
                                <Card className="p-4 text-center shadow-sm bg-light border-primary border-top border-4">
                                    <h5 className="mb-3">🎯 Total Sessions</h5>
                                    <h3 className="text-primary">{dummyStats.sessionsCompleted}</h3>
                                    <small className="text-muted">Keep the momentum going!</small>
                                </Card>
                            </Col>

                            <Col md={6}>
                                <Card className="p-4 text-center shadow-sm bg-light border-danger border-top border-4">
                                    <h5 className="mb-3">🔥 Current Streak</h5>
                                    <h3 className="text-danger">{dummyStats.streakDays} days</h3>
                                    <small>Don’t break the chain!</small>
                                </Card>
                            </Col>
                        </Row>

                        {/* Last Feedback */}
                        <Row>
                            <Col md={12}>
                                <Card className="p-4 shadow-sm bg-light border-success border-top border-4">
                                    <h5 className="mb-3">📊 Last Feedback</h5>
                                    <small className="text-muted">Session on {dummyStats.lastSessionDate}</small>
                                    <ProgressBar
                                        now={dummyStats.lastFeedbackScore}
                                        label={`${dummyStats.lastFeedbackScore}%`}
                                        variant={
                                            dummyStats.lastFeedbackScore > 80
                                                ? 'success'
                                                : dummyStats.lastFeedbackScore > 50
                                                    ? 'warning'
                                                    : 'danger'
                                        }
                                        animated
                                        striped
                                        className="mt-2"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    {/* Resume Analysis & Upload */}
                    <Col md={6}>
                        <Card className="p-4 shadow-sm h-100 d-flex flex-column">
                            <h5>
                                <FaRobot className="me-2 text-secondary" />
                                Resume Analysis & Recommendations
                            </h5>
                            <p><strong>Skills Parsed:</strong> {dummyStats.skillsParsed.join(', ')}</p>
                            <p><strong>Suggested Topics:</strong> Deep dive into Data Structures & Algorithms.</p>

                            {/* Resume Upload Button */}
                            <div className="mt-auto">
                                <label htmlFor="resumeUpload" className="btn btn-primary w-100">
                                    📁 Upload Resume
                                </label>
                                <input
                                    id="resumeUpload"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    style={{ display: 'none' }}
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        console.log('Uploaded file:', file);
                                    }}
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>

                {/* 3. Badges and Suggestions */}
                <Row className="mb-5 g-4">
                    <Col md={6}>
                        <Badges badges={dummyStats.badges} />
                    </Col>
                    <Col md={6}>
                        <Card className="p-4 shadow-sm h-100">
                            <h5>🎯 Suggestions to Improve</h5>
                            <ListGroup variant="flush" className="mt-3">
                                {dummyStats.suggestions.map((tip, idx) => (
                                    <ListGroup.Item
                                        key={idx}
                                        className="bg-transparent d-flex align-items-center"
                                    >
                                        <FaBrain className="text-warning me-2" /> {tip}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>

                {/* 4. Domains & Companies */}
                <Card className="p-4 mb-5 shadow-sm">
                    <Row>
                        {/* Domain Selection */}
                        <Col md={6}>
                            <h4 className="mb-4 text-primary">Your Domain</h4>
                            {!isChangingDomain ? (
                                <>
                                    {renderSelectionCard(selectedDomain, () => setIsChangingDomain(true))}
                                    <Button variant="link" onClick={() => setIsChangingDomain(true)}>
                                        Change Domain
                                    </Button>
                                </>
                            ) : (
                                <Fade in={isChangingDomain} appear>
                                    <div>
                                        {domains.map((domain, idx) => (
                                            <div key={idx}>
                                                {renderSelectionCard(domain, () => {
                                                    setSelectedDomain(domain);
                                                    setIsChangingDomain(false);
                                                })}
                                            </div>
                                        ))}
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => setIsChangingDomain(false)}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </Fade>
                            )}
                        </Col>

                        {/* Company Selection */}
                        <Col md={6}>
                            <h4 className="mb-4 text-primary">Your Target Company</h4>
                            {!isChangingCompany ? (
                                <>
                                    {renderSelectionCard(selectedCompany, () => setIsChangingCompany(true))}
                                    <Button variant="link" onClick={() => setIsChangingCompany(true)}>
                                        Change Company
                                    </Button>
                                </>
                            ) : (
                                <Fade in={isChangingCompany} appear>
                                    <div>
                                        {companies.map((company, idx) => (
                                            <div key={idx}>
                                                {renderSelectionCard(company, () => {
                                                    setSelectedCompany(company);
                                                    setIsChangingCompany(false);
                                                })}
                                            </div>
                                        ))}
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => setIsChangingCompany(false)}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </Fade>
                            )}
                        </Col>
                    </Row>
                </Card>

                {/* 5. Practice Modules */}
                <Row className="mb-5 g-4">
                    <Col md={6}>
                        <Card className="p-4 text-center shadow-sm bg-primary text-white h-100 d-flex flex-column justify-content-center">
                            <h4>🗣️ Mock Interviews</h4>
                            <p>Behavioral & HR questions with AI feedback.</p>
                            <Button variant="light" size="lg" className="mt-auto">
                                Start Interview
                            </Button>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="p-4 text-center shadow-sm bg-success text-white h-100 d-flex flex-column justify-content-center">
                            <h4>💻 Technical Challenges</h4>
                            <p>Coding, MCQs, and system design tests.</p>
                            <Button variant="light" size="lg" className="mt-auto">
                                Start Practice
                            </Button>
                        </Card>
                    </Col>
                </Row>

                {/* 6. Curated Learning Resources */}
                <Card className="p-4 shadow-sm mb-5">
                    <h5>📚 Curated Learning Resources</h5>
                    <ul className="mt-3">
                        <li>
                            <a
                                href="https://www.geeksforgeeks.org/oops-concepts-in-java/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                OOP Concepts - GeeksforGeeks
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://roadmap.sh/frontend"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Frontend Developer Roadmap
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=QXeEoD0pB3E"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                DSA Basics - YouTube
                            </a>
                        </li>
                    </ul>
                </Card>

            </div>
            <Footer />
        </>
    );
};

export default UserDashboard;
