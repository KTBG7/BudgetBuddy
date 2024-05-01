import React from "react";
import { Link } from "react-router-dom";
import BuildCredit from '../assets/BuildCredit.png'

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
                <div className="bg-white-200 rounded-lg mb-4 ml-4 mt-7" style={{ width: '600px', height: '400px' }}>
                    <img src={BuildCredit} alt="Investments and Retirement" className="w-full h-full object-cover rounded-lg" />
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
                        <h4 className="text-xl  mb-2">Credit</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">A retirement savings plan that provides tax advantages to savers. The 401(k) is an employer-provided, <u>defined contribution plan.</u> </p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">FICO Score</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">A Roth IRA is a type of tax-advantaged <u>individual retirement account</u>  to which you can contribute after-tax dollars towards your retirement.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Minimum Payment</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">The S&P 500, is a stock market index tracking the stock performance of 500 of the largest companies listed on stock exchanges in the United States.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Payment Due Date</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">An investment program funded by <u>shareholders</u> that trades in <u>diversified</u> holdings and and is professionaly managed.    </p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Credit Limit</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">The amount of a security, asset, or porperty that is owned (or <u>sold short</u>) by some individual or other entity. A trader or investor takes a position when they make a purchase through a buy order.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Interest Rates</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">A sum of money paid regularly (typically quarterly) by a company to its <u>shareholders</u> out of its profits (or reserves). </p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Loan Balance</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">Stocks consist of all the shares by which ownership of a corporation or company is divided. A single share of the stock means fractional ownership of the corporation in proportion to the total number of shares.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl  mb-2">Principal Balance</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">Diversification is the practice of spreading your investments around so that youe exposure to any one type of asset is limited. This practice is designed to help reduce the volatility of your portfolio over time.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Billing Cycle</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">Cost basis is the amount you paid to purchase an asset. When you invest in a stock, mutual fund or real estate, your cost basis is the price (or cost) of the asset on the day you bought it.</p>
                        </div>
                    </div>
                    {/* Section for Investing for Retirement */}
                    <div className="bg-white-100 p-4 rounded-lg mb-12 w-full">
                        <h3 className="text-2xl font-bold mb-4 mt-8">Videos about Building Credit</h3>
                        {/* Flexbox for Video Boxes */}
                        <div className="flex justify-center mb-4">
                            {/* First Video Box */}
                            <div className="flex-shrink-0 w-1/3 p-4 mr-4">
                                <h4 className="text-xl mb-2">Credit: What is it?</h4>
                                {/* Video content */}
                                <div className="bg-white-200 h-64 rounded-lg border border-gray-300">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/hgB8FRj3auQ"
                                        title="React Tutorial - Fundamentals Video"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <br />
                                <p className="text-gray-500">*Credit refers to the ability to borrow money or access goods or services with the understanding that repayment will be made in the future, often with added interest. It encompasses financial agreements where lenders extend funds or resources to borrowers based on trust and the borrower's ability to repay.*</p>
                            </div>
                            {/* Second Video Box */}
                            <div className="flex-shrink-0 w-1/3 p-4 mr-4">
                                <h4 className="text-xl font-bold mb-2">Everything Student Loans</h4>
                                {/* Video content */}
                                <div className="bg-white-200 h-64 rounded-lg border border-gray-300">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/FzGhW8cbX2s"
                                        title="React Tutorial - Fundamentals Video"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <br />
                                <p className="text-gray-500">*Student loans are financial instruments designed to help students pay for higher education expenses such as tuition, books, and living costs. These loans typically require repayment with interest after the student graduates or leaves school.*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildingCreditpage;
