import React, { useState } from "react";
import { Link } from "react-router-dom";

const DashboardPage: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Dashboard</h2>
            <div className="flex">
                <div className="w-1/4 pr-4">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-full px-4 py-2 mb-4 w-full"
                    />
                    {/* Navigation Links */}
                    <nav className="bg-white-200 rounded-lg px-4 py-2">
                        <ul>
                            <li>
                                <Link to="/dashboard" className="block py-2">
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
                            </li>
                            <li>
                                <Link to="/accounts" className="block py-2">
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
                            </li>
                            <li>
                                <Link to="/categories" className="block py-2">
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
                                <button className="block py-2" onClick={toggleDropdown}>
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
                                <Link to="/settings" className="flex items-center py-2">
                                    <svg className="h-8 w-8 text-black-500 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <span className="text-black"> Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Right Side */}
                <div className="w-3/4 pl-4">
                    {/* Main Content Area */}
                    <div className="bg-white rounded-lg p-4">
                        <p className="text-gray-500 mb-6 text-center text-lg">
                            There isn't activity here. Sync your existing bank account or third-party app below.
                        </p>
                        {/* Sync Button */}
                        <div className="flex justify-center mb-4">
                            <button
                                className="bg-blue-500 text-white py-2 px-10 rounded-lg"
                                style={{ fontSize: "19px" }}
                                onClick={() => {
                                    alert("Data synced!");
                                }}
                            >
                                Sync
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
