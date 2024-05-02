import React from "react";
import { Link } from "react-router-dom";
import peace from '../assets/peace.png'

const LoansandMortgagespage: React.FC = () => {
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
                <h2 className="text-6xl font-bold flex-grow text ">Loans and Mortgages</h2>
            </div>
            {/* Content Area */}
            <div className="flex">
                {/* Left Side with padding */}
                <div className="bg-white-200 rounded-lg mb-4 ml-4 mt-7" style={{ width: '600px', height: '400px' }}>
                    <img src={peace} alt="Investments and Retirement" className="w-full h-full object-cover rounded-lg" />
                </div>
                {/* Right Side */}
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <div className="bg-white-100 p-4 rounded-lg">
                        <h3 className="text-xl mb-12">Loans and mortgages are confusing, but they don't need to be. Let's get started.</h3>
                    </div>
                </div>
            </div>
            {/* Common Terms Box */}
            <div className="bg-white-100 p-4 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-4 mt-8">Common Terms</h3>
                {/* Flexbox Grid for Terms and Definitions */}
                <div className="flex flex-wrap">
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Mortgage</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">An agreement between you and a lender that allows you to borrow money to purchase or refinance a home and gives the lender the right to take your property if you fail to repay the money you've borrowed.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Debt</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">Debt is an obligation that requires one party, the debtor, to pay money borrowed or otherwise withheld from another party, the creditor.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Loan Servicing</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                        </div>
                        <p className="text-gray-700 text-lg">Loan servicing is the process by which a company collects interest, principal, and escrow payments from a borrower.</p>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Accured Interest</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                        </div>
                        <p className="text-gray-700 text-lg">This refers to the interest that is earned but not paid. It is the interest that adds to the overall amount owed.</p>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl  mb-2">Annual Percent Rate (APR)</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">The cost of credit articulated as a yearly rate. APR is not an interest rate. It is a way to measure the total cost of credit. It takes into account interest, origination fees, loan discounts, transaction charges, and any premiums for credit-guarantee insurance. APR is designed to give you a tool for comparing the costs of similar loans.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl  mb-2">Asset</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">Anything owned of monetary value including real property, personal property, and enforceable claims against others (including bank accounts, stocks, mutual funds, etc.).</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl  mb-2">Broker</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">An individual or company that brings borrowers and lenders together for the purpose of loan origination.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl  mb-2">Co-Signer</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">This person does not have any ownership of the property. They will take financial responsibility to pay back unpaid debts if the borrower defaults on their loan.</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <h4 className="text-xl mb-2">Default</h4>
                        <div className="bg-white-100 p-4 rounded-lg">
                            <p className="text-gray-700 text-lg">Failure to make mortgage payments on a timely basis or to comply with other requirements of a mortgage.</p>
                        </div>
                    </div>
                    {/* Section for Investing for Retirement */}
                    <div className="bg-white-100 p-4 rounded-lg mb-12 w-full">
                        <h3 className="text-2xl font-bold mb-4 mt-8">Videos about Loans and Mortgages</h3>
                        {/* Flexbox for Video Boxes */}
                        <div className="flex justify-center mb-4">
                            {/* First Video Box */}
                            <div className="flex-shrink-0 w-1/3 p-4 mr-4">
                                <h4 className="text-xl mb-2">What <em>exactly</em> is a mortgage?</h4>
                                {/* Video content */}
                                <div className="bg-white-200 h-64 rounded-lg border border-gray-300">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/CBIJwb37O_4"
                                        title="Things to do ASAP Video"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <br />
                                <p className="text-gray-500">*
                                    A mortgage is a loan agreement between an individual and a lender, typically used to finance the purchase of a home or real estate. It allows the borrower to access a large sum of money upfront, with the property serving as collateral, and requires regular payments until the loan is fully repaid.*</p>
                            </div>
                            {/* Second Video Box */}
                            <div className="flex-shrink-0 w-1/3 p-4 mr-4">
                                <h4 className="text-xl mb-2">Home Ownership Basics</h4>
                                {/* Video content */}
                                <div className="bg-white-200 h-64 rounded-lg border border-gray-300">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/mU69g6Ao47A"
                                        title="Things to do ASAP Video"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <br />
                                <p className="text-gray-500">*
                                    Homeownership involves purchasing a property to live in or invest in, granting the owner rights to the property and the responsibility of maintaining it. It typically includes financial considerations like mortgage payments, property taxes, and homeowners insurance, alongside benefits such as equity building and personalization.*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoansandMortgagespage;
