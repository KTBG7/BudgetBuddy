import React from "react";
import { Link } from "react-router-dom";
import peace from '../assets/peace.png'
import Fidelity from '../assets/Fidelity.png'
import Vanguard from '../assets/Vanguard.png'
import charles from '../assets/charles.png'


const InvestmentsRetirementPage: React.FC = () => {
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
                <h2 className="text-6xl font-bold flex-grow text-center">Investments and Retirement</h2>
            </div>
            {/* Content Area */}
            <div className="flex">
                {/* Left Side with padding */}
                <div className="bg-white-200 rounded-lg mb-4 ml-4 mt-4" style={{ width: '600px', height: '400px' }}>
                    {/* Replace this div with the img element */}
                    <img src={peace} alt="Investments and Retirement" className="w-full h-full object-cover rounded-lg" />
                </div>
                {/* Right Side */}
                <div className="w-1/2 flex flex-col justify-center items-center">
                    {/* Adjustable Box for Text */}
                    <div className="bg-white-100 p-4 rounded-lg">
                        <h3 className="text-xl mb-12">Investing 101. Learn about common terms used in investing for retirement, and how to get started.</h3>
                    </div>
                </div>
            </div>
            {/* Common Terms Box */}
            <div className="bg-white-100 p-4 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-4 mt-8">Common Terms</h3>
                {/* Flexbox Grid for Terms and Definitions */}
                <div className="flex flex-wrap">
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">401(k)</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">A retirement savings plan that provides tax advantages to savers. The 401(k) is an employer-provided, <u>defined contribution plan.</u> </p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Roth IRA</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">A Roth IRA is a type of tax-advantaged <u>individual retirement account</u>  to which you can contribute after-tax dollars towards your retirement.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">S&P 500</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">The S&P 500, is a stock market index tracking the stock performance of 500 of the largest companies listed on stock exchanges in the United States.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Mutual Funds</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">An investment program funded by <u>shareholders</u> that trades in <u>diversified</u> holdings and and is professionaly managed.    </p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Positions and Balances</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">The amount of a security, asset, or porperty that is owned (or <u>sold short</u>) by some individual or other entity. A trader or investor takes a position when they make a purchase through a buy order.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Dividens</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">A sum of money paid regularly (typically quarterly) by a company to its <u>shareholders</u> out of its profits (or reserves). </p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Stocks</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">Stocks consist of all the shares by which ownership of a corporation or company is divided. A single share of the stock means fractional ownership of the corporation in proportion to the total number of shares.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Diversification</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">Diversification is the practice of spreading your investments around so that youe exposure to any one type of asset is limited. This practice is designed to help reduce the volatility of your portfolio over time.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Cost Basis</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">Cost basis is the amount you paid to purchase an asset. When you invest in a stock, mutual fund or real estate, your cost basis is the price (or cost) of the asset on the day you bought it.</p>
                        </div>
                    </div>
                    {/* Section for Investing for Retirement */}
                    <div className="bg-white-100 p-4 rounded-lg mb-12 w-full">
                        <h3 className="text-2xl font-bold mb-4 mt-8">Videos about Investing for Retirement</h3>
                        {/* Flexbox for Video Boxes */}
                        <div className="flex justify-center mb-4">
                            {/* First Video Box */}
                            <div className="flex-shrink-0 w-1/3 p-4 mr-4">
                                <h4 className="text-xl font-bold mb-2">Long-term Strategies</h4>
                                {/* Video content */}
                                <div className="bg-white-200 h-64 rounded-lg border border-gray-300">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/O6affOebZ6Y"
                                        title="Long-term Strategies Video"
                                        sandbox="allow-scripts allow-same-origin"
                                    ></iframe>
                                </div>
                                <br />
                                <p className="text-gray-500">*Long-term investment strategies focus on holding assets for extended periods, often years or decades, to capitalize on market growth and compound returns. These strategies typically involve diversification, regular contributions, and a patient approach to weather market fluctuations and achieve financial goals over time.*</p>
                            </div>
                            {/* Second Video Box */}
                            <div className="flex-shrink-0 w-1/3 p-4 mr-4">
                                <h4 className="text-xl font-bold mb-2">Things to do ASAP</h4>
                                {/* Video content */}
                                <div className="bg-white-200 h-64 rounded-lg border border-gray-300">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/dmqoqVwFopE"
                                        title="Long-term Strategies Video"
                                        sandbox="allow-scripts allow-same-origin"
                                    ></iframe>
                                </div>
                                <br />
                                <p className="text-gray-500">*Taking immediate action in investing often involves establishing an emergency fund, paying off high-interest debt, and starting to contribute regularly to retirement accounts like 401(k)s or IRAs. These steps help build a strong financial foundation, reduce financial stress, and set the stage for long-term wealth accumulation.*</p>
                            </div>
                        </div>
                    </div>
                    {/* Section for Investing for Retirement */}
                    <div className="bg-white-100 p-4 rounded-lg mb-12 w-full">
                        <h3 className="text-2xl font-bold mb-4 mt-8">Platforms where you can Invest</h3>
                        <br />
                        <h3 className="text-xl">Common investment platforms include, but are not limited to:</h3>
                        {/* Flexbox for investment platforms */}
                        <br />
                        <div className="flex flex-wrap">
                            <div className="w-1/3 p-2 flex flex-col items-center">
                                <div className="bg-white-100 p-4 rounded-lg flex items-center justify-center flex-col">
                                    <h4 className="text-lg font-bold mb-2">Fidelity</h4>
                                    <img src={Fidelity} alt="Fidelity Logo" className="w-flex mb-2" />
                                    <a href="https://www.fidelity.com"><u>Learn More</u></a>
                                </div>
                            </div>
                            <div className="w-1/3 p-2 flex flex-col items-center">
                                <div className="bg-white-100 p-4 rounded-lg flex items-center justify-center flex-col">
                                    <h4 className="text-lg font-bold mb-2">Vanguard</h4>
                                    <img src={Vanguard} alt="Fidelity Logo" className="w-flex mb-2" />
                                    <a href="https://investor.vanguard.com/corporate-portal"><u>Learn More</u></a>
                                </div>
                            </div>
                            <div className="w-1/3 p-2 flex flex-col items-center">
                                <div className="bg-white-100 p-4 rounded-lg flex items-center justify-center flex-col">
                                    <h4 className="text-lg font-bold mb-2">Charles Schwab</h4>
                                    <img src={charles} alt="Fidelity Logo" className="w-flex mb-2" />
                                    <a href="https://www.schwab.com/etfs?src=SEM&ef_id=Cj0KCQjw_qexBhCoARIsAFgBletFhJ6Q_wD4t-JoFt4IQdcsToUNgB0Ncc7YkUtXax2VkCaoPEKdFsMaAsssEALw_wcB:G:s&s_kwcid=AL!5158!3!693665865798!b!!g!!schwab%20etf%20list!806050743!45387921047&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBletFhJ6Q_wD4t-JoFt4IQdcsToUNgB0Ncc7YkUtXax2VkCaoPEKdFsMaAsssEALw_wcB"><u>Learn More</u></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentsRetirementPage;
