import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">BudgetBuddy</Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/signin" className="text-white hover:text-gray-300">Sign In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
