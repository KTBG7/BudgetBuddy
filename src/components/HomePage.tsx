import React from 'react';
import credit from '../assets/credit.png';
import loans from '../assets/loans.png';
import investment from '../assets/investment.png'
import tracking from '../assets/tracking.png'


const HomePage: React.FC = () => {
    return (
        <div>
            {/* Big Frame: Simplify Your Finances */}
            <div className="bg-white py-8 px-6 mb-8 rounded-lg w-[1000px] h-[500px] flex items-center">
                <div className="flex-1">
                    <h2 className="text-6xl font-bold mb-4">Simplify Your</h2>
                    <h2 className="text-6xl font-bold">Finances.</h2>
                </div>
            </div>

            {/* Learn Section: Investment, Loans, Building Credit */}
            <div className="bg-white-100 py-8 px-6 rounded-lg mb-8">
                <h2 className="text-3xl font-bold mb-4">Learn</h2>
                <div className="flex flex-wrap -mx-1">
                    {/* Investment & Real Estate */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-1 mb-4">
                        <div className="bg-gray-200 py-6 px-6 rounded-lg aspect-w-[16] aspect-h-[9]">
                            <h3 className="text-xl font-bold mb-3">Investment & Real Estate</h3>
                            <img src={investment} alt="Investment" className="w-full h-full object-cover" />
                        </div>
                        <p className='text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="mt-3 flex justify-center space-x-4">
                            <div className="bg-white border border-blue-500 text-blue-500 py-2 px-4 rounded-full">Quiz Me</div>
                            <div className="bg-blue-500 text-white py-2 px-4 rounded-full">Learn More</div>
                        </div>
                    </div>
                    {/* Loans & Mortgages */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-1 mb-4">
                        <div className="bg-gray-200 py-6 px-6 rounded-lg aspect-w-[16] aspect-h-[9]">
                            <h3 className="text-xl font-bold mb-3">Loans & Mortgages</h3>
                            <img src={loans} alt="Loans" className="w-full h-full object-cover" />
                        </div>
                        <p className='text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="mt-3 flex justify-center space-x-4">
                            <div className="bg-white border border-blue-500 text-blue-500 py-2 px-4 rounded-full">Quiz Me</div>
                            <div className="bg-blue-500 text-white py-2 px-4 rounded-full">Learn More</div>
                        </div>
                    </div>
                    {/* Building Credit */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-1 mb-4">
                        <div className="bg-gray-200 py-6 px-6 rounded-lg aspect-w-[16] aspect-h-[9]">
                            <h3 className="text-xl font-bold mb-3">Building Credit</h3>
                            <img src={credit} alt="Building Credit" className="w-full h-full object-cover" />
                        </div>
                        <p className='text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="mt-3 flex justify-center space-x-4">
                            <div className="bg-white border border-blue-500 text-blue-500 py-2 px-4 rounded-full">Quiz Me</div>
                            <div className="bg-blue-500 text-white py-2 px-4 rounded-full">Learn More</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Track Your Expenses Section */}
            <div className="bg-white-500 text-black py-8 px-6 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Track Your Expenses</h2>
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-4">
                        <img src={tracking} alt="Tracking" className="w-full h-auto" style={{ maxWidth: '90%' }} />
                    </div>
                    <div className="text-lg text-center md:w-1/2 md:pl-4"> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis massa nec odio suscipit, nec dapibus ipsum mollis.</p>
                        <div className="flex justify-center mt-4"> 
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
