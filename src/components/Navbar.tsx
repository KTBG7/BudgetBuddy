import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-black font-bold text-xl">
            <FontAwesomeIcon
              icon={faPiggyBank}
              className="text-black"
              size="lg"
            />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li className="border border-white rounded-full py-1 px-4">
            <Link
              to="/signup"
              className="text-black hover:text-gray-300 flex items-center"
            >
              Sign Up
            </Link>
          </li>
          <li className="rounded-full py-1 px-4 bg-blue-500">
            <Link
              to="/signin"
              className="text-white hover:text-gray-300 flex items-center"
            >
              <span className="mr-1">Sign In</span>
              <svg
                className="h-5 w-5 text-white-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
