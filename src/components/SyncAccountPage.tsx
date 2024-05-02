import { Link } from 'react-router-dom';
import React from 'react';
import Plaid from '../assets/Plaid.png';
import Exisiting from '../assets/Exisiting.png'
import Third from '../assets/Third.png'

const SyncAccountPage = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('sync');
    };


    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <form onSubmit={handleSubmit} className='flex-1'>
                <div className="mb-4">
                    <div className="ml-8 sm:ml-10">
                        <Link to="/dashboard" className="block-flex mb-4 flex items-center">
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
                            <span className="text-gray-400 text-2xl">Dashboard</span>
                        </Link>
                        <h2 className="text-4xl font-bold mb-6 mx-auto mt-5 text-center" style={{ maxWidth: "max-content" }}>
                            Sync an Account
                        </h2>
                        <p className='text-gray-400 text-center ml-5'>BudgetBuddy takes your inforamtion seriously. All Finacial data is securely encrypted and <br /> transmitted via <em>Plaid</em>. Sensitive information, such as bank credentials, will be kept safe.</p>
                        {/* First Image Box */}
                        <div className="flex justify-center my-6">
                            <div className="text-center mx-4">
                                <img src={Plaid} alt="Image Alt Text" width="170" height="100" />
                            </div>
                        </div>
                    </div>
                    {/* Second and Third Image Boxes Side by Side */}
                    <div className="flex justify-center my-6">
                        <div className="text-center mx-4 flex">
                            {/* Second Image Box */}
                            <div className="mr-4 flex flex-col items-center">
                                <h3 className="text-lg font-semibold mt-4 ">Existing Bank Account</h3>
                                <img src={Exisiting} alt="Existing Logo" width={300} height={100} />
                                <p className="text-gray-500 mt-2">Link an existing checking or savings account <br /> with your bank to better budget and track your <br />expenses.</p>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-8 rounded-full mt-7 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    Sync
                                </button>
                            </div>
                            {/* Third Image Box */}
                            <div className="flex flex-col items-center">
                                <h3 className="text-lg font-semibold mt-4 mr-16">Third-Party App</h3>
                                <img src={Third} alt="Existing Logo" width={300} height={100} />
                                <p className="text-gray-500 mt-2">Link an existing third-party spending account <br />(Ex: Venmo, Cashsapp,  etc.)</p>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-8 rounded-full mt-14 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    Sync
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SyncAccountPage;


