import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";
import { googleLogin } from "../Redux-toolkit/authSlice";

const GoogleLogin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRedirectResult = async () => {
            try {
                const result = await getRedirectResult(auth);
                if (result?.user) {
                    const token = await result.user.getIdToken();
                    dispatch(googleLogin(token));
                }
            } catch (error) {
                console.error("Redirect login error:", error);
            }
        };
        fetchRedirectResult();
    }, [dispatch]);

    const handleGoogleLogin = async () => {
        try {
            // Try popup sign-in first
            const result = await signInWithPopup(auth, googleProvider);
            if (result?.user) {
                const token = await result.user.getIdToken();
                dispatch(googleLogin(token));
            }
        } catch (error) {
            console.warn("Popup failed, falling back to redirect:", error);
            try {
                await signInWithRedirect(auth, googleProvider);
            } catch (redirectError) {
                console.error("Redirect login error:", redirectError);
            }
        }
    };

    return (
        <button
            className="btn btn-outline-danger rounded-circle px-3 py-2"
            onClick={handleGoogleLogin}
        >
            <i className="bi bi-google"></i>
        </button>
    );
};

export default GoogleLogin;
