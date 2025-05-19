import { useState } from "react";
import Header from "../shared/header";

function Login() {
    const [isRegister, setIsRegister] = useState(false);

    const toggleMode = () => setIsRegister(!isRegister);

    return (
        <>
            <Header />
            <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="container p-4 bg-white shadow rounded" style={{ maxWidth: "900px" }}>
                    <h3 className="text-center mb-2">Welcome to</h3>
                    <h3 className="fw-bold display-6 text-dark text-center mb-4">
                        Smart Interview Preparation Platform
                    </h3>
                    <div className="row">
                        {/* Left Side Image */}
                        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
                            <img
                                src="/Book-reading.svg"
                                alt="Visual"
                                className="img-fluid"
                                style={{ maxHeight: "400px" }}
                            />
                        </div>

                        {/* Right Side Form */}
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="w-100">
                                <div className="text-center mb-1">
                                    <p className="text-muted">
                                        Please <strong>{isRegister ? "register" : "log in"}</strong> to access your dashboard.
                                    </p>
                                </div>

                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username or Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Enter your username or email"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                        />
                                    </div>

                                    {isRegister && (
                                        <div className="mb-3">
                                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confirmPassword"
                                                placeholder="Confirm your password"
                                            />
                                        </div>
                                    )}

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="rememberMe"
                                                defaultChecked
                                            />
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember me
                                            </label>
                                        </div>
                                        {!isRegister && (
                                            <a href="#" className="text-decoration-none">Forgot Password?</a>
                                        )}
                                    </div>

                                    <div className="d-grid mb-3">
                                        <button type="submit" className="btn btn-primary">
                                            {isRegister ? "Register" : "Login to Portal"}
                                        </button>
                                    </div>


                                    <>
                                        <div className="text-center text-muted mb-3">or login with</div>
                                        <div className="d-flex justify-content-center gap-3 mb-3">
                                            <a href="#" className="btn btn-outline-primary rounded-circle px-3 py-2">
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="#" className="btn btn-outline-info rounded-circle px-3 py-2">
                                                <i className="bi bi-twitter"></i>
                                            </a>
                                            <a href="#" className="btn btn-outline-danger rounded-circle px-3 py-2">
                                                <i className="bi bi-google"></i>
                                            </a>
                                        </div>
                                    </>

                                    <div className="text-center">
                                        <span className="text-muted">
                                            {isRegister ? "Already have an account?" : "New user?"}{" "}
                                            <button
                                                type="button"
                                                className="btn btn-link p-0"
                                                onClick={toggleMode}
                                            >
                                                {isRegister ? "Login" : "Register"}
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
