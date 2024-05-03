import { Link } from "react-router-dom";
import BankAmerica from '../assets/BankAmerica.png';
import Chase from '../assets/Chase.png';
import CapitolOne from '../assets/CapitalOne.png';
import Citizens from '../assets/Citizens.png'


const BankSync = () => {
    const handleSync = () => {
        console.log("Syncing account...");
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col  items-center py-8">
            <form className="w-full max-w-md mb-1" style={{ maxWidth: "40%" }}>
                <h2 className="text-4xl font-bold mb-6 text-center">
                    Sync a Bank Account
                </h2>
                <div className="mb-4">
                    <p className="text-gray-400 text-center mb-8">
                        BudgetBuddy takes your information seriously. All financial data is <br /> securely encrypted and transmitted via <em>Plaid</em>. Sensitive information, such <br /> as bank credentials, will be kept safe.
                    </p>
                </div>
                <div className="flex mb-4">
                    <div className="w-1/2 mr-2">
                        <label
                            htmlFor="accountNumber"
                            className="block text-sm mb-1"
                        >
                            Account Number
                        </label>
                        <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            placeholder="Ex: 123456789"
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                        />
                    </div>
                    <div className="w-1/2 ml-2">
                        <label
                            htmlFor="cvc"
                            className="block text-sm mb-1"
                        >
                            CVC
                        </label>
                        <input
                            type="text"
                            id="cvc"
                            name="cvc"
                            placeholder="Ex: 123"
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full "
                        />
                    </div>
                </div>
                {/* Account Type Input */}
                <div className="mb-4">
                    <label htmlFor="accountType">Is this a Checking or Savings Account?*</label>
                    <input
                        type="text"
                        id="accountType"
                        name="accountType"
                        placeholder="Ex: Text"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    />
                </div>
                {/* Continue Button */}
                <button
                    type="button"
                    onClick={handleSync}
                    className="bg-blue-500 text-white py-4 px-6 mt-3 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Continue
                </button>
                {/* Back to Dashboard Link */}
                <Link to="/sync" className="absolute top-16 left-4 mt-4 ml-4 text-blue-500 flex items-center">
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
                    <span className="text-gray-400 text-2xl">Sync</span>
                </Link>
            </form>
            <h1 className="mt-16 text-gray-500 text-lg">Compatible banks</h1>
            {/* Comnpatible Bank picture boxes */}
            <div className="flex justify-center my-6">
                        <div className="text-center mx-4 flex">
                            {/* Bank of America */}
                            <div className="mr-16 flex flex-col items-center">
                                <h3 className="text-lg font-semibold mt-8 mb-3 ">Bank of America</h3>
                                <img src={BankAmerica} alt="Bank of America" width={110} height={100} />
                            </div>
                            {/* Chase */}
                            <div className=" mr-16 flex flex-col items-center">
                                <h3 className="text-lg font-semibold mt-8 mb-3">Chase</h3>
                                <img src={Chase} alt="Chase" width={110} height={100} />
                            </div>
                            {/* Capitol One */}
                            <div className=" mr-16 flex flex-col items-center">
                                <h3 className="text-lg font-semibold mt-8 mb-3">Capitol One</h3>
                                <img src={CapitolOne} alt="Capitol One" width={110} height={100} />
                            </div>
                            {/* Citizens Bank */}
                            <div className=" flex flex-col items-center">
                                <h3 className="text-lg font-semibold mt-8 mb-3">Citizens Bank</h3>
                                <img src={Citizens} alt="Citizens" width={110} height={100} />
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default BankSync;
