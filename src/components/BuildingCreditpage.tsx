import React from "react";
import { Link } from "react-router-dom";

const BuildingCreditpage: React.FC = () => {
    return (
        <div className="container mx-auto mt-8">
            {/* Back Arrow */}
            <div className="flex items-center mb-4">
                <Link to="/dashboard">
                    <svg
                        className="h-8 w-8 text-black-500 inline-block mr-4"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18l-6-6l6-6" />
                    </svg>
                </Link>
                {/* Title with padding */}
                <h2 className="text-6xl font-bold flex-grow"> Building Credit</h2>
            </div>
            {/* Content Area */}
            <div className="flex">
                {/* Left Side with padding */}
                <div className="w-1/2 pr-12 flex flex-col justify-center">
                    {/* Picture Box */}
                    <div className="bg-gray-200 rounded-lg mb-4 ml-4 mt-12 w-90 h-80"></div>
                </div>
                {/* Right Side */}
                <div className="w-1/2 flex flex-col justify-center items-center">
                    {/* Adjustable Box for Text */}
                    <div className="bg-white-100 p-4 rounded-lg">
                        <h3 className="text-xl mb-12">Building credit is the foundation to becoming financially sound, and anyone can get started!</h3>
                    </div>
                </div>
            </div>
            {/* Common Terms Box */}
            <div className="bg-white-100 p-4 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-4 mt-8">Common Terms</h3>
                {/* Flexbox Grid for Terms and Definitions */}
                <div className="flex flex-wrap">
                    <div className="w-1/3 p-2">
                        <h4 className="text-lg font-bold mb-2">Credit</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p>A retirement savings plan that provides tax advantages to savers. The 401(k) is an employer-provided, <u>defined contribution plan.</u> </p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-lg font-bold mb-2">FICO Score</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p>A Roth IRA is a type of tax-advantaged <u>individual retirement account</u>  to which you can contribute after-tax dollars towards your retirement.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-lg font-bold mb-2">Minimum Payment</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p>The S&P 500, is a stock market index tracking the stock performance of 500 of the largest companies listed on stock exchanges in the United States.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-lg font-bold mb-2">Payment Due Date</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p>An investment program funded by <u>shareholders</u> that trades in <u>diversified</u> holdings and and is professionaly managed.    </p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-lg font-bold mb-2">Credit Limit</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p>The amount of a security, asset, or porperty that is owned (or <u>sold short</u>) by some individual or other entity. A trader or investor takes a position when they make a purchase through a buy order.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-lg font-bold mb-2">Interest Rates</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p>A sum of money paid regularly (typically quarterly) by a company to its <u>shareholders</u> out of its profits (or reserves). </p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-lg font-bold mb-2">Loan Balance</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p>Stocks consist of all the shares by which ownership of a corporation or company is divided. A single share of the stock means fractional ownership of the corporation in proportion to the total number of shares.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-lg font-bold mb-2">Principal Balance</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p>Diversification is the practice of spreading your investments around so that youe exposure to any one type of asset is limited. This practice is designed to help reduce the volatility of your portfolio over time.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-lg font-bold mb-2">Billing Cycle</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p>Cost basis is the amount you paid to purchase an asset. When you invest in a stock, mutual fund or real estate, your cost basis is the price (or cost) of the asset on the day you bought it.</p>
                        </div>
                    </div>
                    {/* Section for Investing for Retirement */}
                    <div className="bg-white-100 p-4 rounded-lg mb-12 w-full">
                        <h3 className="text-2xl font-bold mb-4 mt-8">Videos about Building Credit</h3>
                        {/* Flexbox for Video Boxes */}
                        <div className="flex justify-center mb-4">
                            {/* First Video Box */}
                            <div className="flex-shrink-0 w-1/3 p-4 mr-4">
                                <h4 className="text-xl font-bold mb-2">Credit: What is it?</h4>
                                {/* Video content */}
                                <div className="bg-white-200 h-64 rounded-lg border border-gray-300"></div>
                                <br />
                                <p className="text-gray-400">*how to invest or save on retirement*</p>
                            </div>
                            {/* Second Video Box */}
                            <div className="flex-shrink-0 w-1/3 p-4 mr-4">
                                <h4 className="text-xl font-bold mb-2">Everything Student Loans</h4>
                                {/* Video content */}
                                <div className="bg-white-200 h-64 rounded-lg border border-gray-300"></div>
                                <br />
                                <p className="text-gray-400">*how to invest or save on retirement*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildingCreditpage;
