import React from "react";
import { useNavigate } from "react-router-dom";

const SignInPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Directly navigate to the dashboard
        navigate('/dashboard');
    };

    const handleGoogleSignUpSuccess = () => {
        navigate("/dashboard");
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-center">
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Sign in to your account</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4 ">
                            <div className="mb-4 ml-1">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold mb-1"
                                >
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john.doe@example.com"
                                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                            />
                        </div>
                        <div className="mb-4 ml-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-3 px-6 rounded-full w-full"
                                style={{ borderRadius: "9999px", fontSize: "1.2rem" }}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <br></br>
                    <div className="flex justify-center items-center my-4 ml-6">
                        <hr className="border-gray-300 w-full mr-2" />
                        <div className="mx-4 text-gray-500">OR</div>
                        <hr className="border-gray-300 w-full ml-2" />
                    </div> <br />
                    <button
                        aria-label="Sign in with Google"
                        className="flex items-center bg-white border border-button-border-light rounded-full p-1 pr-4"
                        onClick={handleGoogleSignUpSuccess}
                        style={{ marginLeft: "calc(47% - 60px)" }}
                    >
                        <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                                {/* SVG paths for Google logo */}
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                        </div>
                        <span className="text-sm text-google-text-gray tracking-wider">Sign in with Google</span>
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
