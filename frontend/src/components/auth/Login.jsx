import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


import Header from "../shared/header";
import { validateForm } from "../utils/formValidation";
import { loginUser, registerUser } from "../../Redux-toolkit/authSlice";
import GoogleLogin from "../../firebase/GoogleLogin";


function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, status, error } = useSelector((state) => state.auth);

    useEffect(() => {
        const successToastId = "successToast";
        const loadingToastId = "loadingToast";
        const errorToastId = "errorToast";

        if (user) {
            toast.dismiss(); // dismiss any previous toasts
            toast.success("🎉 Login successful!", {
                toastId: successToastId,
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                icon: "✅",
                style: {
                    fontSize: "1.1rem",
                    padding: "20px",
                    borderRadius: "12px",
                    backgroundColor: "#d4edda",
                    color: "#155724",
                },
            });
            navigate("/dashboard");
            return; // prevent multiple toasts on the same render
        }

        if (status === "loading") {
            // show loading toast if not already shown
            if (!toast.isActive(loadingToastId)) {
                toast.info("🔄 Processing...", {
                    toastId: loadingToastId,
                    position: "top-center",
                    autoClose: false, // keep open while loading
                    style: {
                        fontSize: "1.05rem",
                        padding: "16px",
                        borderRadius: "12px",
                    },
                });
            }
        } else {
            // if not loading, dismiss the loading toast
            toast.dismiss(loadingToastId);
        }

        if (error) {
            toast.dismiss(loadingToastId); // dismiss loading if error appears
            toast.error(`❌ ${error}`, {
                toastId: errorToastId,
                position: "top-center",
                autoClose: 5000,
                style: {
                    fontSize: "1.1rem",
                    padding: "20px",
                    borderRadius: "12px",
                    backgroundColor: "#f8d7da",
                    color: "#721c24",
                },
            });
        } else {
            toast.dismiss(errorToastId); // dismiss error toast if error cleared
        }
    }, [user, status, error, navigate]);



    const toggleMode = () => {
        setIsRegister((prev) => !prev);
        setFormErrors({});
        setFormData({
            username: "",
            password: "",
            confirmPassword: "",
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setFormErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (newErrors[name]) {
                const updatedFormData = { ...formData, [name]: value };
                const singleFieldError = validateForm(updatedFormData, isRegister);
                if (!singleFieldError[name]) delete newErrors[name];
            }
            return newErrors;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm(formData, isRegister);

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const { username, password } = formData;
        if (isRegister) {
            dispatch(registerUser({ email: username, password }));
        } else {
            dispatch(loginUser({ email: username, password }));
        }
    };



    return (
        <>
            <ToastContainer position="top-center" />
            <Header />
            <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
                <div className="container p-4 bg-white shadow rounded" style={{ maxWidth: "900px" }}>
                    <h3 className="text-center mb-2">Welcome to</h3>
                    <h3 className="fw-bold display-6 text-dark text-center mb-4">
                        Smart Interview Preparation Platform
                    </h3>

                    <div className="row">
                        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
                            <img
                                src="/Book-reading.svg"
                                alt="Visual"
                                className="img-fluid"
                                style={{ maxHeight: "400px" }}
                            />
                        </div>

                        <div className="col-md-6 d-flex align-items-center">
                            <div className="w-100">
                                <div className="text-center mb-1">
                                    <p className="text-muted">
                                        Please <strong>{isRegister ? "register" : "log in"}</strong> to access your dashboard.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    {/* Username Field */}
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username or Email</label>
                                        <input
                                            type="text"
                                            className={`form-control ${formErrors.username ? "is-invalid" : ""}`}
                                            id="username"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            placeholder="Enter your username or email"
                                            autoComplete="username"
                                        />
                                        {formErrors.username && (
                                            <div className="invalid-feedback">{formErrors.username}</div>
                                        )}
                                    </div>

                                    {/* Password Field */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                        />
                                        {formErrors.password && (
                                            <div className="invalid-feedback">{formErrors.password}</div>
                                        )}
                                    </div>

                                    {/* Confirm Password Field */}
                                    {isRegister && (
                                        <div className="mb-3">
                                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                            <input
                                                type="password"
                                                className={`form-control ${formErrors.confirmPassword ? "is-invalid" : ""}`}
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="Confirm your password"
                                                autoComplete="new-password"
                                            />
                                            {formErrors.confirmPassword && (
                                                <div className="invalid-feedback">{formErrors.confirmPassword}</div>
                                            )}
                                        </div>
                                    )}

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
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

                                    {/* Submit Button */}
                                    <div className="d-grid mb-3">
                                        <button type="submit" className="btn btn-primary">
                                            {isRegister ? "Register" : "Login to Portal"}
                                        </button>
                                    </div>

                                    {/* Social Login Buttons */}
                                    <div className="text-center text-muted mb-3">or login with</div>
                                    <div className="d-flex justify-content-center gap-3 mb-3">
                                        <a href="#" className="btn btn-outline-primary rounded-circle px-3 py-2">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a href="#" className="btn btn-outline-info rounded-circle px-3 py-2">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                        <GoogleLogin />
                                    </div>

                                    {/* Switch Login/Register */}
                                    <div className="text-center">
                                        <span className="text-muted">
                                            {isRegister ? "Already have an account?" : "New user?"}{" "}
                                            <button type="button" className="btn btn-link p-0" onClick={toggleMode}>
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
