import React from "react";
import { Link } from "react-router-dom";

const DashboardPage: React.FC = () => {
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
