import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const SignInPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Directly navigate to the dashboard
        navigate('/dashboard');
    };

    const handleGoogleLoginSuccess = () => { };

    const handleGoogleLoginFailure = () => { };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">Sign in to your account</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john.doe@example.com"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    />
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
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
                    >
                        Log In
                    </button>
                </div>
            </form>
            <div className="flex justify-center items-center my-4">
                <hr className="border-gray-300 w-full" />
                <div className="mx-4 text-gray-500">or</div>
                <hr className="border-gray-300 w-full" />
            </div>
            <div className="flex justify-center">
                <GoogleLogin
                    clientId="595132100417-8s526hd6jtiaq7kbtk5mnko3npcih9qh.apps.googleusercontent.com"
                    buttonText="Log in with Google"
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={handleGoogleLoginFailure}
                    cookiePolicy={"single_host_origin"}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg"
                />
            </div>
        </div>
    );
};

export default SignInPage;
