import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePic from '../assets/ProfilePic.png'

const DashboardPage: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="bg-gray-100 min-h-screen"> <br />
            {/* Home Button */}
            <div className="ml-8 sm:ml-10">
                <Link to="/" className="block-flex mb-4 flex items-center">
                    <svg
                        className="h-8 w-8 text-gray-400 background mr-2"
                        viewBox="0 0 22 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 8 8 12 12 16" />
                        <line x1="16" y1="12" x2="8" y2="12" />
                    </svg>
                    <span className="text-gray-400 text-2xl">Home</span>
                    <h2 className="text-4xl font-bold mb-6 ml-auto mr-auto mt-5 text-center" style={{ maxWidth: "max-content" }}>
                        Welcome, Jon 👋
                    </h2>
                    <span className="text-gray-400 text-lg mr-2">{new Date().toDateString()}</span>
                </Link>
            </div>
            {/* Dashboard side box  */}
            <>
                <div className="flex mt-8">
                    <div className=" mx-auto p-4 ml-8 bg-white border border-gray-300 rounded-3xl">
                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-gray-300 rounded-full px-4 py-2 mb-4 w-full pl-12"
                            />
                            <svg
                                className="h-8 w-8 text-gray-300 absolute top-1/2 transform -translate-y-1/2 left-4"
                                fill="none"
                                viewBox="0 0 29 29"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-gray-400 text-sm">MAIN MENU</h1>
                        {/* Navigation Links */}
                        <nav className="bg-white-200 rounded-lg px-4 py-2">

                            <Link to="/dashboard" className="block-link py-2 flex items-center">
                                <svg
                                    className="h-8 w-8 text-black-500 inline-block mr-2"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M3 21v-13l9-4l9 4v13" />
                                    <path d="M13 13h4v8h-10v-6h6" />
                                    <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
                                </svg>
                                Dashboard
                            </Link>
                            <Link to="/accounts" className="block-link py-2 flex items-center">
                                <svg
                                    className="h-8 w-8 text-black-500 inline-block mr-2"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="3" y="5" width="18" height="14" rx="3" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                    <line x1="7" y1="15" x2="7.01" y2="15" />
                                    <line x1="11" y1="15" x2="13" y2="15" />
                                </svg>
                                Accounts
                            </Link>
                            <Link to="/categories" className="block py-2 items-center">
                                <svg
                                    className="h-8 w-8 text-black-500 inline-block mr-2"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />
                                    <circle cx="9" cy="9" r="2" />
                                </svg>
                                Categories
                            </Link>
                            {/* Learn Button */}
                            <button className="block py-2 items-center" onClick={toggleDropdown}>
                                <svg
                                    className="h-8 w-8 text-black-500 inline-block mr-2"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Learn
                            </button>
                            {/* Dropdown */}
                            {showDropdown && (
                                <div className="absolute mt-2 py-2 w-40 bg-white border rounded-lg shadow-md">
                                    <Link to="/investment_regiment" className="block px-4 py-2 hover:bg-gray-100">
                                        Investments & Retirement
                                    </Link>
                                    <Link to="/loans&mortgage" className="block px-4 py-2 hover:bg-gray-100">
                                        Loans & Mortgages
                                    </Link>
                                    <Link to="/credit" className="block px-4 py-2 hover:bg-gray-100">
                                        Building Credit
                                    </Link>
                                </div>
                            )}
                            {/* Settings */}
                            <Link to="/settings" className="block py-2 items-center">
                                <svg
                                    className="h-8 w-8 text-black-500 inline-block mr-2"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                Settings
                            </Link>
                            <div className="absolute items-center mb-2" style={{ marginTop: '27rem' }}>
                                {/* Profile Image */}
                                <img
                                    src={ProfilePic}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full inline-block mr-2"
                                />
                                {/* User Name */}
                                <span className="text-gray-500 text-sm">Jon Doe</span>
                                <br />
                                <hr className="border-t border-gray-400 mb-6 mt-4" style={{ width: '250%' }} />
                            </div>
                            {/* Log out */}
                            <Link to="/" className="block-flex py-2 flex items-center" style={{ marginTop: '31rem' }}>
                                <svg className="h-8 w-8 text-black-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                </svg>
                                Log Out
                            </Link>
                            

                        </nav>
                    </div>
                    {/* Right Side */}
                    <div className="w-3/4 mx-auto">
                        {/* Main Content Area */}
                        <div className="bg-gray-100 rounded-lg p-3" style={{ marginTop: '15rem' }}>
                            <p className="text-gray-500 mb-6 text-center text-lg">
                                There isn't activity here. Sync your existing bank account or third-party app below.
                            </p>
                            {/* Sync Button */}
                            <div className="flex justify-center mb-4">
                                <button

                                    className="bg-blue-500 text-white py-2 px-10 rounded-full"
                                    style={{ fontSize: "19px" }}
                                >
                                    Sync an Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default DashboardPage;
