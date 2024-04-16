import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate} from "react-router-dom";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Directly navigate to the dashboard
    navigate('/dashboard');
  };

  const handleGoogleSignUpSuccess = () => {
    navigate('/dashboard');
  };

  const handleGoogleSignUpFailure = () => {
  };


  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Create an account</h2>
      <p>
        Let's get you started. With an account at BudgetBuddy, you'll be able to
        sync your expenses and budget more efficiently.
      </p>
      <br></br>
      <form onSubmit={handleSignUp}>
        <div className="mb-4 flex">
          <div className="mr-2 w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold mb-1"
            >
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold mb-1"
            >
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
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
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-1"
          >
            Password*
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <br></br>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
          >
            Continue
          </button>
        </div>
      </form>
      <br></br>
      <div className="flex justify-center items-center my-4">
        <hr className="border-gray-300 w-full" />
        <div className="mx-4 text-gray-500">or</div>
        <hr className="border-gray-300 w-full" />
      </div>
      <div className="flex justify-center">
        <GoogleLogin
          clientId="595132100417-8s526hd6jtiaq7kbtk5mnko3npcih9qh.apps.googleusercontent.com"
          buttonText="Sign up with Google"
          onSuccess={handleGoogleSignUpSuccess}
          onFailure={handleGoogleSignUpFailure}
          cookiePolicy={"single_host_origin"}
          className="bg-red-500 text-white py-2 px-4 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
