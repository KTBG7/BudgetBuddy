import React from 'react';
import loans from '../assets/loans.png';
import investment from '../assets/investment.png'
import CreditCardPic from '../assets/CreditCardPic.png'
import buildCredit from "../assets/buildCredit.png.jpeg"
import RecentTransactions from '../assets/RecentTransactions.png'
import { Link } from 'react-router-dom';



const HomePage: React.FC = () => {
    return (
        <div>
            {/* Big Frame: Simplify Your Finances */}
            <div className="bg-white py-8 px-6 mb-8 rounded-lg w-[1000px] h-[600px] flex items-center">
                <div className="flex-1">
                    <h2 className="text-6xl font-bold mb-4">Finances made</h2>
                    <h2 className="text-6xl font-bold">simpler.</h2>
                    <br></br>
                    <p>BudgetBuddy enables you to learn about finances while helping you budget your expenses easily and securely.</p>
                    <div className="flex mt-4">
                        <Link to='/signup'>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full mr-4">Get Started</button>
                        </Link>
                    </div>
                </div>
                {/* Credit Card Image*/}
                <div className="absolute right-0 h-[70%] w-[50%]">
                    <img src={CreditCardPic} alt="Credit Cards" className="h-full w-full object-cover" />
                </div>
            </div>

            {/* Learn Section: Investment, Loans, Building Credit */}
            <div className="bg-white-100 py-8 px-6 rounded-lg mb-8">
                <h2 className="text-3xl font-bold mb-4">Learn</h2>
                <div className="flex flex-wrap -mx-1">
                    {/* Investment & Real Estate */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-1 mb-4">
                        <h3 className="text-xl font-bold mb-3">Investments/Retirement</h3>
                        <div className="bg-white-200 py-6 px-6 rounded-lg aspect-w-[16] aspect-h-[9] border border-gray-400">
                            <img src={investment} alt="Investment" className="w-full h-full object-cover" />
                        </div>
                        <p className='text-center mt-4 text-gray-500'>Investing 101. Learn about common terms used, <br />investing retirement, and how to get started.</p>
                        <div className="mt-3 flex justify-center space-x-4">
                            <a href="#" className="text-black py-2 spacce-x-4">Quiz Me</a>
                            <a href="#" className="underline text-black py-2 px-4">Learn More</a>
                        </div>
                    </div>
                    {/* Loans & Mortgages */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-1 mb-4 border-black rounded-lg">
                        <h3 className="text-xl font-bold mb-3">Loans and Mortgages</h3>
                        <div className="bg-white-200 py-6 px-6 rounded-lg aspect-w-[16] aspect-h-[9] border border-gray-400">
                            <img src={loans} alt="Loans" className="w-full h-full object-cover" />
                        </div>
                        <p className='text-center mt-4 text-gray-500'>Loans and mortgages are confusing, but they <br />dont need to be. Get started and learn more.</p>
                        <div className="mt-3 flex justify-center space-x-4">
                            <a href="#" className="text-black py-2 spacce-x-4">Quiz Me</a>
                            <a href="#" className="underline text-black py-2 px-4">Learn More</a>
                        </div>
                    </div>
                    {/* Building Credit */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-1 mb-4 border-black rounded-lg">
                        <h3 className="text-xl font-bold mb-3">Building Credit</h3>
                        <div className="bg-white-200 py-6 px-6 rounded-lg aspect-w-[16] aspect-h-[9] border border-gray-400">
                            <img src={buildCredit} alt="Building Credit" className="w-full h-full object-cover" />
                        </div>
                        <p className='text-center mt-4 text-gray-500'>Building credit is the foundation to becoming <br />finacially sound, and anyone can get started!</p>
                        <div className="mt-3 flex justify-center space-x-4">
                            <a href="#" className="text-black py-2 spacce-x-4">Quiz Me</a>
                            <a href="#" className="underline text-black py-2 px-4">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Track Your Expenses Section */}
            <div className="bg-white-500 text-black py-8 px-6 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Track Your Expenses</h2>
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-3">
                        <img src={RecentTransactions} alt="Tracking" className="w-full h-auto border border-gray-500 rounded-lg" style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="text-lg text-center md:w-1/2 md:pl-4">
                        <p>Track your expenses and budget<br/>more effectively by syncing your <br />bank account or third-party app. <br />Your data and sensitive information <br />are securley transferred via Plaid.</p>
                        <div className="flex justify-center mt-4">
                            <Link to='/signup'>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
