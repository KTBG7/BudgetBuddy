import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../assets/ProfilePic.png';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashboardPage: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-8 md:pb-12 xl:pb-16 grid grid-cols-12 gap-4 xl:gap-10 px-2 md:px-8 lg:px-12 xl:px-[60px]">
      <div className="grid grid-cols-12 col-span-12 gap-10">
        {/* Home Button */}
        <Link
          to="/"
          className="flex gap-2 max-md:hidden col-span-4 lg:col-span-3 xl:col-span-2 h-min"
        >
          <svg
            className="h-10 w-10 text-gray-400 flex flex-shrink-0"
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
          <span className="text-gray-400 text-4xl">Home</span>
        </Link>
        {/* Headline */}
        <div className="grid grid-cols-12 gap-2 md:gap-4 col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-10">
          <div className="col-span-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Welcome, Jon 👋
            </h2>
            <span className="text-gray-400 text-xl md:text-2xl lg:text-3xl font-semibold">
              {new Date().toDateString()}
            </span>
          </div>
          <span className="text-gray-400 text-xl pb-3 md:pb-6 col-span-12">
            <FontAwesomeIcon icon={faCircleQuestion} /> This month you've had a{' '}
            <b className="text-[#006BE9]">net-gain of $5,485 USD,</b> keep it
            up!
          </span>
          <hr className="border-2 border-gray-400 rounded-md col-span-12" />
        </div>
      </div>
      <div className="grid gap-10 grid-cols-12 h-full col-span-12">
        {/* Dashboard side box  */}
        <div className="flex flex-col bg-white border border-gray-300 rounded-3xl px-7 py-5 xl:px-5 xl:py-10 xl:gap-8 col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full px-4 py-2 w-full pl-12"
            />
            <svg
              className="h-6 w-6 text-gray-300 absolute top-1/2 transform -translate-y-1/2 left-4"
              fill="none"
              viewBox="0 0 29 29"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col bg-white-200 rounded-lg xl:gap-4 justify-between h-full">
            <div className="flex flex-col gap-3">
              <h1 className="text-gray-400 text-sm">MAIN MENU</h1>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 bg-[#EDF5FF] text-[#006BE9] rounded-md py-2 px-3 font-bold"
              >
                <svg
                  className="h-6 w-6 "
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
              <Link
                to="/accounts"
                className="flex items-center gap-2 hover:bg-gray-100 rounded-md py-2 px-3"
              >
                <svg
                  className="h-6 w-6 text-gray-500"
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
              <Link
                to="/categories"
                className="flex items-center gap-2 hover:bg-gray-100 rounded-md py-2 px-3"
              >
                <svg
                  className="h-6 w-6 text-gray-500"
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
              {/* Learn Button */}
              <button
                className="flex items-center gap-2 hover:bg-gray-100 rounded-md py-2 px-3"
                onClick={toggleDropdown}
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Learn
              </button>
              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute mt-2 py-2 w-40 bg-white border rounded-lg shadow-md">
                  <Link
                    to="/investment_regiment"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Investments & Retirement
                  </Link>
                  <Link
                    to="/loans&mortgage"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Loans & Mortgages
                  </Link>
                  <Link
                    to="/credit"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Building Credit
                  </Link>
                </div>
              )}
              {/* Settings */}
              <Link
                to="/settings"
                className="flex gap-2 hover:bg-gray-100 rounded-md py-2 px-3"
              >
                <svg
                  className="h-6 w-6 text-gray-500"
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
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Settings
              </Link>
            </div>
            <div className="flex flex-col gap-2 xl:gap-5 w-full">
              {/* Profile Image */}
              <div className="flex gap-2 items-center">
                <img
                  src={ProfilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-md"
                />
                {/* User Name */}
                <span className="text-gray-500 text-sm">Jon Doe</span>
              </div>
              <hr className="border-t border-gray-400 " />

              {/* Log out */}
              <Link
                to="/"
                className="flex items-center hover:bg-gray-100 rounded-md py-2"
              >
                <svg
                  className="h-6 w-6 text-gray-500"
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
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>
                Log Out
              </Link>
            </div>
          </nav>
        </div>
        {/* Main Content Area */}
        <div className="grid grid-cols-12 gap-10 col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-10">
          <div className="flex flex-col gap-4 col-span-12 lg:col-span-6">
            <div className="bg-white px-4 py-2 lg:px-6 lg:py-3 xl:px-10 xl:py-5 w-full flex flex-col gap-8 rounded-2xl">
              <h3 className="font-bold text-3xl">Recent Transactions</h3>
              <div>
                <a className="text-gray-400 underline underline-offset-2 hover:cursor-pointer">
                  {month[new Date().getMonth()]} {new Date().getFullYear()}
                </a>
                <ul className="w-full flex flex-col gap-3">
                  <li className="flex justify-between items-center">
                    <div className="flex xl:gap-4">
                      <h5 className="font-semibold text-black">
                        Sunoco Gas MA.
                      </h5>
                      <span className="font-medium">$34.40</span>
                    </div>
                    <div className="py-3 px-1 xl:p-[10px] font-medium text-sm text-white bg-[#679CCC] rounded-3xl">
                      🚗 Transportation
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex xl:gap-4">
                      <h5 className="font-semibold text-black">
                        Starbucks LLC
                      </h5>
                      <span className="font-medium">$6.40</span>
                    </div>
                    <div className="py-3 px-1 xl:p-[10px] font-medium text-sm text-white bg-[#CCA467] rounded-3xl">
                      🍔 Food
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex xl:gap-4">
                      <h5 className="font-semibold text-black">
                        Rent {month[new Date().getMonth()]} Payment
                      </h5>
                      <span className="font-medium">$1,600</span>
                    </div>
                    <div className="py-3 px-1 xl:p-[10px] font-medium text-sm text-white bg-[#CC6767] rounded-3xl">
                      🔑 Rent
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex xl:gap-4">
                      <h5 className="font-semibold text-black">
                        VANGUARD INVESTMENTS
                      </h5>
                      <span className="font-medium">$250</span>
                    </div>
                    <div className="py-3 px-1 xl:p-[10px] font-medium text-sm text-white bg-[#4FBF4D] rounded-3xl">
                      💸 Investments
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <h5 className="font-semibold text-black">
                        Barcelona Wine Bar
                      </h5>
                      <span className="font-medium">$32.78</span>
                    </div>
                    <div className="py-3 px-1 xl:p-[10px] font-medium text-sm text-white bg-[#CCA467] rounded-3xl">
                      🍔 Food
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <h5 className="font-semibold text-black">
                        Credit Card Payment
                      </h5>
                      <span className="font-medium">$19.85</span>
                    </div>
                    <div className="py-3 px-1 xl:p-[10px] font-medium text-sm text-white bg-[#BE67CC] rounded-3xl">
                      🤷 Other
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white px-4 py-2 lg:px-6 lg:py-3 xl:px-10 xl:py-5 w-full flex flex-col gap-8 rounded-2xl">
              <h4 className="text-black font-bold text-3xl">Goals</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-gray-400 text-xl">
                  <h5>Monthly Budget</h5>
                  <span>$2,050 / $2,500</span>
                </div>
                <div className="bg-[#99C5FA] h-6 w-full rounded-xl">
                  <div className="w-3/4 bg-[#006BE9] h-full rounded-xl"></div>
                </div>
              </div>
              <a className="text-gray-400 underline underline-offset-2 w-full text-center hover:cursor-pointer">
                Edit
              </a>
            </div>
            <div className="bg-white px-4 py-2 lg:px-6 lg:py-3 xl:px-10 xl:py-5 w-full flex flex-col gap-8 rounded-2xl">
              <h4 className="text-black font-bold text-3xl">
                My Subscriptions
              </h4>
              <div className="grid grid-cols-12 gap-4">
                <div className="flex flex-col col-span-6 text-xl">
                  <h5 className="text-black font-semibold">Spotify</h5>
                  <span className="text-gray-400 flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_345_2854)">
                        <path
                          d="M12 0C18.6274 0 24 5.37272 24 12C24 18.6278 18.6273 24 12 24C5.37216 24 0 18.6278 0 12C0 5.37319 5.37216 0.00065625 12.0002 0.00065625L12 0ZM6.49697 17.3076C6.71194 17.6601 7.17337 17.7718 7.52588 17.5554C10.3433 15.8345 13.8901 15.4447 18.0671 16.399C18.2606 16.443 18.4635 16.4085 18.6315 16.3028C18.7994 16.1972 18.9185 16.0293 18.9626 15.8359C18.9846 15.7401 18.9875 15.641 18.9711 15.5441C18.9547 15.4473 18.9194 15.3546 18.8671 15.2714C18.8149 15.1882 18.7468 15.1161 18.6666 15.0593C18.5865 15.0025 18.4959 14.9621 18.4001 14.9403C13.8289 13.8959 9.90797 14.3455 6.74484 16.2787C6.39234 16.495 6.28059 16.9551 6.49697 17.3076ZM5.02819 14.0401C5.29913 14.4803 5.87513 14.6193 6.315 14.3484C9.54056 12.3658 14.4575 11.7916 18.2726 12.9497C18.7674 13.0991 19.29 12.8203 19.4402 12.3263C19.5893 11.8315 19.3103 11.3099 18.8163 11.1595C14.4583 9.83709 9.0405 10.4777 5.33625 12.7539C4.89638 13.0249 4.75734 13.6008 5.02819 14.0401ZM4.90209 10.6376C8.76966 8.34037 15.1506 8.12906 18.8431 9.24994C19.4361 9.42975 20.0632 9.09497 20.2428 8.502C20.4225 7.90875 20.0881 7.28212 19.4947 7.10184C15.2559 5.81503 8.20931 6.06375 3.75666 8.70712C3.22209 9.02363 3.04734 9.7125 3.36403 10.2451C3.67922 10.7785 4.36997 10.9543 4.90153 10.6376H4.90209Z"
                          fill="#1ED760"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_345_2854">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="matrix(-1 0 0 1 24 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    $4.99/mo
                  </span>
                </div>
                <div className="flex flex-col col-span-6 text-xl">
                  <h5 className="text-black font-semibold">Youtube Premium</h5>
                  <span className="text-gray-400 flex items-center gap-2">
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_345_2860)">
                        <path
                          d="M11.5701 2.74805H11.6925C12.8228 2.75217 18.5496 2.79342 20.0938 3.20867C20.5606 3.3354 20.9859 3.58243 21.3273 3.92506C21.6688 4.26769 21.9143 4.69392 22.0394 5.16117C22.1782 5.68367 22.2759 6.3753 22.3419 7.08892L22.3556 7.23192L22.3859 7.58942L22.3969 7.73242C22.4862 8.98917 22.4972 10.1662 22.4986 10.4233V10.5264C22.4972 10.7932 22.4849 12.0499 22.3859 13.3589L22.3749 13.5033L22.3625 13.6463C22.2937 14.4328 22.192 15.2138 22.0394 15.7885C21.9143 16.2558 21.6688 16.682 21.3273 17.0247C20.9859 17.3673 20.5606 17.6143 20.0938 17.741C18.4988 18.17 12.4364 18.2003 11.5962 18.2017H11.401C10.9761 18.2017 9.21887 18.1934 7.37637 18.1302L7.14262 18.1219L7.023 18.1164L6.78788 18.1068L6.55275 18.0972C5.0265 18.0298 3.57313 17.9212 2.9035 17.7397C2.43686 17.6131 2.01161 17.3662 1.6702 17.0239C1.32879 16.6815 1.08317 16.2555 0.957875 15.7885C0.80525 15.2152 0.7035 14.4328 0.63475 13.6463L0.62375 13.5019L0.61275 13.3589C0.5445 12.4272 0.506896 11.4936 0.5 10.5594L0.5 10.3903C0.50275 10.0947 0.51375 9.07305 0.588 7.94555L0.597625 7.80392L0.60175 7.73242L0.61275 7.58942L0.643 7.23192L0.65675 7.08892C0.72275 6.3753 0.820375 5.6823 0.95925 5.16117C1.08433 4.69392 1.32986 4.26769 1.67128 3.92506C2.0127 3.58243 2.43807 3.3354 2.90488 3.20867C3.5745 3.02992 5.02787 2.91992 6.55412 2.85117L6.78788 2.84155L7.02437 2.8333L7.14262 2.82917L7.37775 2.81955C8.68635 2.77748 9.99548 2.7541 11.3047 2.74942L11.5701 2.74805ZM9.3 7.1618V13.7865L15.0159 10.4755L9.3 7.1618Z"
                          fill="#E50914"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_345_2860">
                          <rect
                            width="22"
                            height="22"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    $12.99/mo
                  </span>
                </div>
                <div className="flex flex-col col-span-6 text-xl">
                  <h5 className="text-black font-semibold">Netflix</h5>
                  <span className="text-gray-400 flex items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width="24"
                        height="24"
                        fill="url(#pattern0_345_2867)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_345_2867"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_345_2867"
                            transform="scale(0.00444444)"
                          />
                        </pattern>
                        <image
                          id="image0_345_2867"
                          width="225"
                          height="225"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    $17.99/mo
                  </span>
                </div>
                <div className="flex flex-col col-span-6 text-xl">
                  <h5 className="text-black font-semibold">Hello Fresh</h5>
                  <span className="text-gray-400 flex items-center gap-2">
                    <svg
                      fill="#1fb91c"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.422 1.064a9.26 9.26 0 0 0-.959.103C8.586 1.62 5.81 3.169 3.825 5.34a12.714 12.714 0 0 0-1.246 1.597A11.653 11.653 0 0 0 .73 12.002c-.135 1.127.185 2.49-.27 3.55-.033.08-.055.167-.084.25-.231.576-1.124 3.138 1.077 4.276.808.421 1.732.423 2.54.86.235.118.454.251.673.386.454.253.91.54 1.398.741.05.034.118.051.185.085 3.264 1.296 6.983.959 10.08-.623.538-.27 1.008-.59 1.496-.876.96-.572 1.869-1.412 1.869-1.412-.065.042-.18.109-.255.156l.287-.259c.303-.286.607-.588.876-.908.404-.471.774-.975 1.11-1.497.876-1.38 1.465-2.946 1.801-4.595.017-.084.034-.151.034-.219a.984.984 0 0 0 .032-.219c.185-1.127.253-2.287.185-3.481.017-1.178.556-2.037-.05-3.165a1.676 1.676 0 0 0-.504-.572c-.034-.017-.05-.034-.1-.05-.018-.017-.034-.016-.051-.033-.387-.218-.842-.338-1.296-.506-.1-.034-.168.035-.1.103 1.077 1.245 1.177 2.219-.034.755-3.231-3.904-8.836-3.718-9.206-3.685zm-.344 1.061c1.014-.059 1.708.05 1.708.05s-2.692.1-5.519 1.716c-2.288 1.313-1.43.05.185-.808 1.279-.673 2.612-.899 3.626-.958zm4.012 2.708c1.397.236.152 4.106-.504 5.015.236 2.053 1.01.404 1.312-.488.101-.286.22-.622.253-.908.118-.909.387-1.615.943-1.985.32-.219.64-.303 1.026-.135 1.262.522.773 4.19-.472 4.611a1.008 1.008 0 0 1-.57.082c-.674-.05-.86-.555-.977-1.346-.522 1.565-1.464 2.627-2.204.726-.185.454-1.935 2.658-2.558.1l-.018-.05c-.185.336-1.312 2.338-2.742 1.631a1.286 1.286 0 0 1-.285-.235 2.238 2.238 0 0 1-.338-.623 3.285 3.285 0 0 1-.135-.707c-.016-.118-.016-.252-.016-.37 0-.067.016-.117.016-.184-.201-.017-.403-.018-.554-.035h-.1c0 1.027-.002 2.07.082 2.693.017.016.001.05-.032.05-.404.067-.893.32-.842-.707.017-.572.033-1.43.05-2.001-.387.033-.758.1-1.11.184l-.354.1c-.017.253-.017.49-.017.708-.033 1.296-.05 2.98.05 3.703 0 .017-.017.032-.033.032-.421.067-.943.252-.893-.842 0 0 .051-2.086.085-2.827 0-.168.018-.318.018-.486-.236.101-.371.2-.557.302-.05.033-.1.05-.15.084-.034.034-.085.05-.119.084-.084.05-.268.168-.301.185-.034.017-.05.017-.085 0 0 0-.084-.05-.118-.169-.05-.185-.05-.42.169-.554.1-.084.235-.15.32-.201.184-.101.504-.253.857-.388.017-1.077 0-2.357-.034-2.71 0-.017 0-.033.034-.05.185-.05.926-.235.892.472 0 0-.05 1.11-.084 2.07.084-.018.202-.034.303-.051.37-.05.774-.085 1.161-.068.034-1.633 0-3.297-.05-3.785l.032-.035c.185-.067.91-.252.876.438a263.81 263.81 0 0 0-.084 3.416v.034c.235.017.47.033.689.05.1-.505.303-1.01.673-1.464.1-.118.557-.555.91-.64.488-.134.807.22.908.455.101.286.118.572.085.858v.052a.065.065 0 0 1-.018.05c-.017.034-.016.083-.033.117-.016.084-.05.153-.084.237a1.268 1.268 0 0 1-.32.42 1.52 1.52 0 0 1-.538.285 1.24 1.24 0 0 1-.488.05c-.067 0-.152 0-.22-.016-.033 0-.066 0-.1-.016v.336c.017.201.034.506.085.69.084.37.269.555.504.605.892.236 1.867-1.362 2.035-1.631-.37-1.767.033-5.504 1.312-5.167 1.229.336.034 4.291-.538 5.099.202 2.574 1.634.152 1.752-.016-.152-.673-.187-1.514-.103-2.524.118-1.363.539-2.761 1.346-2.61zm.069.657c-.455-.117-.825 1.953-.673 3.753.521-1.026 1.077-3.635.673-3.753zm-2.508.05c-.454-.117-.858 2.138-.673 3.888.505-.959 1.077-3.786.673-3.887zm5.132 1.162c-.169.017-.42.118-.589.438-.488.875-.504 2.977.018 3.482.118.117.32.035.404-.033a1.29 1.29 0 0 0 .217-.303c.42-.79.674-2.608.287-3.315-.033-.067-.152-.27-.337-.27zm-8.111 1.262a.213.213 0 0 0-.1.018c-.085.016-.152.082-.236.166a1.115 1.115 0 0 0-.203.288 4.387 4.387 0 0 0-.25.655 4.632 4.632 0 0 0-.153.657h.018v.034c.067 0 .134.016.15.016.05 0 .119 0 .17-.016a1.26 1.26 0 0 0 .302-.135.678.678 0 0 0 .22-.219 1.58 1.58 0 0 0 .269-.556c.017-.118.033-.235.05-.336.017-.1-.001-.202-.018-.303-.017-.101-.066-.186-.117-.22 0 0 0-.015-.018-.015 0-.017-.016-.016-.016-.016s0-.018-.016-.018h-.018zm9.171 3.684c.101-.017.17.034.17.135v4.41c0 .084-.069.168-.17.185l-.454.084c-.1.017-.168-.034-.168-.135V14.51c0-.033-.033-.067-.067-.05l-.707.119c-.034.016-.068.05-.068.084v1.816a.194.194 0 0 1-.167.185l-.456.084c-.084.017-.167-.033-.167-.134v-4.408c0-.084.066-.168.167-.185l.456-.084c.101-.017.167.033.167.134v1.766c0 .034.034.067.068.05l.707-.116c.034-.017.067-.05.067-.085v-1.768c0-.084.067-.168.168-.184zm-3.405.585c.41.082.645.43.645 1.099v.15c0 .085-.067.152-.15.17l-.455.084c-.067.017-.118-.033-.118-.1V13.5c0-.472-.134-.623-.386-.573-.27.05-.388.269-.388.504 0 .37.269.59.69.927.487.387.858.723.841 1.346 0 .74-.471 1.294-1.161 1.412-.724.118-1.161-.302-1.161-1.009v-.319c0-.084.067-.168.168-.185l.404-.068c.101-.017.169.034.169.134v.27c0 .37.135.554.438.504.202-.05.42-.185.42-.538 0-.421-.336-.672-.74-.975-.403-.32-.825-.675-.825-1.348 0-.606.337-1.195 1.145-1.346.172-.03.328-.031.464-.004zm-2.164.392c.084-.017.169.033.169.134v.354c0 .084-.068.168-.169.185l-1.026.185c-.034.016-.069.05-.069.084v1.145c0 .034.035.067.069.05l.689-.118c.1-.017.168.033.168.134v.338a.196.196 0 0 1-.168.185l-.69.116c-.033.017-.068.051-.068.085v1.296c0 .033.035.067.069.05l1.076-.185c.085-.017.152.05.17.135v.37c0 .083-.069.17-.17.186l-1.75.301c-.084.017-.168-.033-.168-.134v-4.408c0-.084.068-.168.168-.185zm-3.255.598c.656.02.798.545.798 1.252 0 .74-.134 1.044-.504 1.296-.017.017-.051.069-.034.102l.538 1.716a.155.155 0 0 1-.118.185l-.436.084a.194.194 0 0 1-.22-.118l-.472-1.666c-.016-.033-.05-.067-.084-.05l-.15.034c-.034.017-.069.051-.069.085v1.75a.194.194 0 0 1-.167.184l-.454.085c-.084.017-.169-.034-.169-.135v-4.41c0-.084.068-.168.17-.185l1.058-.185c.116-.018.22-.026.313-.024zm-2.163.378c.1-.017.185.032.168.117v.353c0 .084-.067.17-.168.187l-1.043.185c-.034.017-.068.05-.068.084v1.16c0 .033.034.069.068.052l.723-.119c.101-.017.169.034.169.135v.353c0 .085-.068.168-.169.185l-.723.119c-.034.017-.068.049-.068.082v1.869c0 .084-.068.168-.17.185l-.453.084c-.101.017-.169-.034-.169-.135V14.09c0-.084.068-.168.169-.185zm1.733.336-.237.034c-.033.017-.066.05-.066.084v1.346c0 .034.033.067.066.05l.237-.034c.37-.05.455-.218.455-.807 0-.59-.101-.724-.455-.673z" />
                    </svg>
                    $34.99/mo
                  </span>
                </div>
              </div>
              <a className="text-gray-400 underline underline-offset-2 w-full text-center hover:cursor-pointer">
                Manage
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-10 col-span-12 lg:col-span-6">
            <div className="bg-white w-full rounded-2xl px-4 py-2 lg:px-6 lg:py-3 xl:px-10 xl:py-5 flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="bg-[#EEE8FC] rounded-lg h-14 w-14 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_345_2880)">
                      <path
                        d="M14.7813 2.5872L24.698 8.12887C24.9891 8.2742 25.2339 8.49781 25.405 8.77458C25.576 9.05135 25.6665 9.37034 25.6663 9.6957V11.3757C25.6663 12.1807 25.013 12.834 24.208 12.834H23.333V22.1674H24.4997C24.8091 22.1674 25.1058 22.2903 25.3246 22.5091C25.5434 22.7279 25.6663 23.0246 25.6663 23.334C25.6663 23.6435 25.5434 23.9402 25.3246 24.159C25.1058 24.3778 24.8091 24.5007 24.4997 24.5007H3.49967C3.19026 24.5007 2.89351 24.3778 2.67472 24.159C2.45592 23.9402 2.33301 23.6435 2.33301 23.334C2.33301 23.0246 2.45592 22.7279 2.67472 22.5091C2.89351 22.2903 3.19026 22.1674 3.49967 22.1674H4.66634V12.834H3.79134C2.98634 12.834 2.33301 12.1807 2.33301 11.3757V9.6957C2.33301 9.0867 2.64801 8.5267 3.15667 8.20937L13.2168 2.5872C13.4599 2.46563 13.7279 2.40234 13.9997 2.40234C14.2714 2.40234 14.5383 2.46563 14.7813 2.5872ZM20.9997 12.834H6.99967V22.1674H10.4997V15.1674H12.833V22.1674H15.1663V15.1674H17.4997V22.1674H20.9997V12.834ZM13.9997 4.80503L4.66634 10.055V10.5007H23.333V10.055L13.9997 4.80503ZM13.9997 7.0007C14.3091 7.0007 14.6058 7.12362 14.8246 7.34241C15.0434 7.5612 15.1663 7.85795 15.1663 8.16737C15.1663 8.47679 15.0434 8.77353 14.8246 8.99233C14.6058 9.21112 14.3091 9.33403 13.9997 9.33403C13.6903 9.33403 13.3935 9.21112 13.1747 8.99233C12.9559 8.77353 12.833 8.47679 12.833 8.16737C12.833 7.85795 12.9559 7.5612 13.1747 7.34241C13.3935 7.12362 13.6903 7.0007 13.9997 7.0007Z"
                        fill="#9C7EF1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_345_2880">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-2xl font-medium">
                    Total Balance
                  </span>
                  <span className="text-[#9C7EF1] text-4xl font-semibold">
                    $19,428
                  </span>
                </div>
              </div>
              <svg
                className="hover:cursor-pointer"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="24"
                  width="24"
                  height="24"
                  rx="12"
                  transform="rotate(90 24 0)"
                  fill="#BEC4CA"
                />
                <path
                  d="M8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6L8.59 7.41Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="bg-white w-full rounded-2xl px-4 py-2 lg:px-6 lg:py-3 xl:px-10 xl:py-5 flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className=" rounded-lg h-14 w-14 flex items-center justify-center">
                  <svg
                    width="56"
                    height="57"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="48"
                      height="48"
                      rx="10"
                      fill="#EBF8F3"
                    />
                    <path
                      d="M23.3 10.5C24.6762 10.5001 26.0146 10.9331 27.1108 11.7327C28.2069 12.5324 29.0005 13.6549 29.3704 14.9286L29.4432 15.2044L32.0612 14.5762C32.2526 14.5304 32.4518 14.524 32.6459 14.5574C32.84 14.5908 33.0246 14.6632 33.1876 14.7698C33.3506 14.8765 33.4882 15.0151 33.5916 15.1765C33.695 15.3378 33.7617 15.5183 33.7874 15.7062L33.8 15.8811V18.316C34.5893 19.0432 35.2361 19.9008 35.7096 20.8479L35.9028 21.2622H36.6C36.9429 21.2622 37.2739 21.3832 37.5301 21.6022C37.7864 21.8211 37.9501 22.1228 37.9902 22.4501L38 22.6075V26.6433C38 26.8647 37.9432 27.0827 37.8345 27.278C37.7258 27.4732 37.5687 27.6397 37.377 27.7626L37.2258 27.846L35.5906 28.633C34.9212 29.8775 33.9515 30.9499 32.7626 31.7607L32.4 31.9948V33.3697C32.4 33.6992 32.2741 34.0172 32.0462 34.2634C31.8183 34.5097 31.5044 34.667 31.1638 34.7055L31 34.7149H26.8C26.4571 34.7149 26.1261 34.5939 25.8699 34.375C25.6136 34.156 25.4499 33.8543 25.4098 33.5271L25.4 33.3697H24C24 33.6992 23.8741 34.0172 23.6462 34.2634C23.4183 34.5097 23.1044 34.667 22.7638 34.7055L22.6 34.7149H18.4C18.0571 34.7149 17.7261 34.5939 17.4699 34.375C17.2136 34.156 17.0499 33.8543 17.0098 33.5271L17 33.3697V31.9948C15.9886 31.3735 15.115 30.5662 14.4293 29.6194C13.7436 28.6727 13.2593 27.605 13.0044 26.4778C12.1789 26.2417 11.4487 25.7676 10.9129 25.1196C10.377 24.4716 10.0613 23.6811 10.0084 22.855L10 22.6075V21.9348C10.0004 21.592 10.137 21.2622 10.382 21.0128C10.6269 20.7635 10.9617 20.6135 11.318 20.5934C11.6742 20.5733 12.0249 20.6846 12.2986 20.9047C12.5722 21.1248 12.7481 21.437 12.7902 21.7774L12.8 21.9348V22.6075C12.8 22.8066 12.8448 22.9963 12.926 23.1658C13.1397 21.9546 13.6164 20.8003 14.3251 19.7779C15.0337 18.7555 15.9585 17.888 17.0392 17.2318C16.9399 16.3849 17.0277 15.5274 17.2971 14.7154C17.5664 13.9034 18.0111 13.1552 18.6021 12.5198C19.1931 11.8843 19.917 11.3759 20.7266 11.0279C21.5362 10.6798 22.4131 10.4999 23.3 10.5ZM31 17.6031L27.1388 18.5313L26.9708 18.5622L26.8 18.5716H21.9C20.4844 18.5708 19.1098 19.028 17.9977 19.8696C16.8857 20.7113 16.101 21.8883 15.7702 23.2109C15.4395 24.5335 15.5819 25.9246 16.1746 27.1599C16.7672 28.3952 17.7756 29.4027 19.037 30.0199C19.2402 30.1198 19.415 30.2659 19.546 30.4455C19.6771 30.6251 19.7604 30.8328 19.7888 31.0504L19.8 31.2172V32.0244H21.2C21.2 31.6949 21.3259 31.3769 21.5538 31.1306C21.7817 30.8844 22.0956 30.7271 22.4362 30.6885L22.6 30.6791H26.8C27.1429 30.6792 27.4739 30.8001 27.7301 31.0191C27.9864 31.2381 28.1501 31.5398 28.1902 31.867L28.2 32.0244H29.6V31.2172C29.6001 30.9695 29.6714 30.7266 29.8061 30.5154C29.9407 30.3041 30.1334 30.1327 30.363 30.0199C31.6477 29.388 32.6691 28.3533 33.2582 27.0872C33.3632 26.8608 33.5313 26.6666 33.744 26.5263L33.9106 26.4321L35.2 25.8119V23.9527H34.9102C34.6054 23.9527 34.3089 23.857 34.0658 23.6802C33.8227 23.5034 33.6463 23.2553 33.5634 22.9734C33.2132 21.79 32.4963 20.737 31.5082 19.9546C31.234 19.7369 31.0563 19.4272 31.0112 19.0882L31 18.9174V17.6031ZM29.6 21.2622C29.9713 21.2622 30.3274 21.4039 30.59 21.6562C30.8525 21.9085 31 22.2507 31 22.6075C31 22.9643 30.8525 23.3064 30.59 23.5587C30.3274 23.811 29.9713 23.9527 29.6 23.9527C29.2287 23.9527 28.8726 23.811 28.6101 23.5587C28.3475 23.3064 28.2 22.9643 28.2 22.6075C28.2 22.2507 28.3475 21.9085 28.6101 21.6562C28.8726 21.4039 29.2287 21.2622 29.6 21.2622ZM23.3 13.1905C22.452 13.1905 21.6329 13.4864 20.9948 14.0231C20.3567 14.5597 19.9431 15.3008 19.8308 16.1085C20.5092 15.9571 21.2035 15.8808 21.9 15.8811H26.6278L26.7258 15.8582C26.5598 15.1035 26.1288 14.4265 25.5051 13.9408C24.8813 13.4551 24.1028 13.1902 23.3 13.1905Z"
                      fill="#38BB8C"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-2xl font-medium">
                    Total Income ({month[new Date().getMonth()]})
                  </span>
                  <span className="text-[#9C7EF1] text-4xl font-semibold">
                    $19,428
                  </span>
                </div>
              </div>
              <svg
                className="hover:cursor-pointer"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="24"
                  width="24"
                  height="24"
                  rx="12"
                  transform="rotate(90 24 0)"
                  fill="#BEC4CA"
                />
                <path
                  d="M8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6L8.59 7.41Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="bg-white w-full rounded-2xl px-4 py-2 lg:px-6 lg:py-3 xl:px-10 xl:py-5 flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className=" rounded-lg h-14 w-14 flex items-center justify-center">
                  <svg
                    width="56"
                    height="57"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="10" fill="#FEEFED" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M35.7755 18.9449C35.7012 18.9395 35.6189 18.9395 35.5325 18.9395H32.1244C29.333 18.9395 26.9453 21.1369 26.9453 24.0011C26.9453 26.8653 29.3344 29.0627 32.1244 29.0627H35.5325C35.6189 29.0627 35.7012 29.0627 35.7782 29.0573C36.3518 29.0227 36.8934 28.7807 37.3019 28.3764C37.7104 27.9722 37.958 27.4332 37.9985 26.8599C38.0039 26.7789 38.0039 26.6911 38.0039 26.6102V21.392C38.0039 21.311 38.0039 21.2233 37.9985 21.1423C37.958 20.569 37.7104 20.03 37.3019 19.6257C36.8934 19.2214 36.3518 18.9794 35.7782 18.9449M31.8261 25.3508C32.5441 25.3508 33.1259 24.7461 33.1259 24.0011C33.1259 23.256 32.5441 22.6513 31.8261 22.6513C31.1066 22.6513 30.5249 23.256 30.5249 24.0011C30.5249 24.7461 31.1066 25.3508 31.8261 25.3508Z"
                      fill="#F24E1E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M35.5299 31.0861C35.5766 31.0843 35.623 31.0934 35.6655 31.1129C35.708 31.1323 35.7452 31.1615 35.7743 31.1981C35.8034 31.2346 35.8234 31.2775 35.8328 31.3233C35.8421 31.369 35.8406 31.4163 35.8282 31.4614C35.5583 32.4224 35.1277 33.2431 34.438 33.9314C33.427 34.9438 32.1461 35.3905 30.5642 35.6038C29.0254 35.8103 27.0615 35.8103 24.5807 35.8103H21.73C19.2491 35.8103 17.2838 35.8103 15.7465 35.6038C14.1645 35.3905 12.8836 34.9424 11.8726 33.9328C10.863 32.9218 10.4149 31.6409 10.2016 30.059C9.99512 28.5202 9.99512 26.5563 9.99512 24.0755V23.9243C9.99512 21.4434 9.99512 19.4782 10.2016 17.9394C10.4149 16.3575 10.863 15.0766 11.8726 14.0656C12.8836 13.056 14.1645 12.6079 15.7465 12.3946C17.2852 12.1895 19.2491 12.1895 21.73 12.1895H24.5807C27.0615 12.1895 29.0268 12.1895 30.5642 12.396C32.1461 12.6092 33.427 13.0574 34.438 14.067C35.1277 14.7581 35.5583 15.5774 35.8282 16.5384C35.8406 16.5834 35.8421 16.6307 35.8328 16.6765C35.8234 16.7222 35.8034 16.7651 35.7743 16.8017C35.7452 16.8383 35.708 16.8674 35.6655 16.8869C35.623 16.9063 35.5766 16.9155 35.5299 16.9136H32.1231C28.2938 16.9136 24.9194 19.9371 24.9194 23.9999C24.9194 28.0627 28.2938 31.0861 32.1231 31.0861H35.5299ZM15.0567 17.5885C14.7882 17.5885 14.5308 17.6952 14.3409 17.885C14.1511 18.0749 14.0444 18.3323 14.0444 18.6008C14.0444 18.8693 14.1511 19.1268 14.3409 19.3166C14.5308 19.5065 14.7882 19.6131 15.0567 19.6131H20.4558C20.7243 19.6131 20.9818 19.5065 21.1716 19.3166C21.3614 19.1268 21.4681 18.8693 21.4681 18.6008C21.4681 18.3323 21.3614 18.0749 21.1716 17.885C20.9818 17.6952 20.7243 17.5885 20.4558 17.5885H15.0567Z"
                      fill="#F24E1E"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-2xl font-medium">
                    Total Outcome ({month[new Date().getMonth()]})
                  </span>
                  <span className="text-[#9C7EF1] text-4xl font-semibold">
                    -$2,050
                  </span>
                </div>
              </div>
              <svg
                className="hover:cursor-pointer"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="24"
                  width="24"
                  height="24"
                  rx="12"
                  transform="rotate(90 24 0)"
                  fill="#BEC4CA"
                />
                <path
                  d="M8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6L8.59 7.41Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="bg-white w-full rounded-2xl px-4 py-2 lg:px-6 lg:py-3 xl:px-10 xl:py-5 flex flex-col justify-between gap-8">
              <h5 className="text-black text-3xl font-bold ">
                Top Categories This Month
              </h5>
              <div className="flex justify-between">
                <ol className="font-medium text-black text-xl list-decimal pl-5 flex flex-col gap-5">
                  <li>🔑 Rent $1,600</li>
                  <li>🍔 Food $240</li>
                  <li>🚗Transportation $300</li>
                  <li>💸 Investments $120</li>
                  <li>🤷️ Other $90</li>
                </ol>
                <svg
                  className="hover:cursor-pointer self-end justify-self-end"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="24"
                    width="24"
                    height="24"
                    rx="12"
                    transform="rotate(90 24 0)"
                    fill="#BEC4CA"
                  />
                  <path
                    d="M8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6L8.59 7.41Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {/* Synced Accounts */}
            <div className="bg-white w-full rounded-2xl px-4 py-2 lg:px-6 lg:py-3 xl:px-10 xl:py-5 flex flex-col justify-between gap-8">
              <h5 className="text-black text-3xl font-bold ">
                Synced Accounts
              </h5>
              <div className="flex justify-between">
                <ul className="flex flex-col gap-5 text-xl">
                  <li className="flex flex-col gap-3">
                    <h6 className="text-black">Mastercard</h6>
                    <div className="flex gap-3 items-center">
                      <svg
                        width="46"
                        height="32"
                        viewBox="0 0 46 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="45"
                          height="31"
                          rx="2"
                          fill="white"
                          stroke="#D9D9D9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.4288 23.3943C21.6736 24.8669 19.3968 25.7558 16.9089 25.7558C11.3576 25.7558 6.85742 21.3298 6.85742 15.8701C6.85742 10.4104 11.3576 5.98438 16.9089 5.98438C19.3968 5.98438 21.6736 6.87336 23.4288 8.34597C25.184 6.87338 27.4608 5.9844 29.9487 5.9844C35.5 5.9844 40.0002 10.4104 40.0002 15.8701C40.0002 21.3299 35.5 25.7559 29.9487 25.7559C27.4608 25.7559 25.184 24.8669 23.4288 23.3943Z"
                          fill="#ED0006"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.4287 23.3943C25.5899 21.581 26.9603 18.883 26.9603 15.8701C26.9603 12.8572 25.5899 10.1592 23.4287 8.34594C25.1839 6.87335 27.4607 5.98438 29.9486 5.98438C35.4999 5.98438 40.0001 10.4104 40.0001 15.8701C40.0001 21.3298 35.4999 25.7558 29.9486 25.7558C27.4607 25.7558 25.1839 24.8669 23.4287 23.3943Z"
                          fill="#F9A000"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.429 23.3939C25.5902 21.5807 26.9606 18.8827 26.9606 15.8698C26.9606 12.857 25.5902 10.1589 23.429 8.3457C21.2678 10.1589 19.8975 12.857 19.8975 15.8698C19.8975 18.8827 21.2678 21.5807 23.429 23.3939Z"
                          fill="#FF5E00"
                        />
                      </svg>
                      <span className="text-gray-400">Savings (8321)</span>
                    </div>
                  </li>
                  <li className="flex flex-col gap-3">
                    <h6 className="text-black">Discover</h6>
                    <div className="flex gap-3 items-center">
                      <svg
                        width="46"
                        height="32"
                        viewBox="0 0 46 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="45"
                          height="31"
                          rx="2"
                          fill="white"
                          stroke="#D9D9D9"
                        />
                        <path
                          d="M18.7002 30.0671L44.0335 22.4004V28.5171C44.0335 29.3731 43.3396 30.0671 42.4835 30.0671H18.7002Z"
                          fill="#FD6020"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M39.1916 12.1478C40.5853 12.1478 41.3519 12.7925 41.3519 14.0103C41.4215 14.9416 40.7944 15.7296 39.9581 15.8729L41.8397 18.5234H40.3763L38.7735 15.9445H38.6341V18.5234H37.4494V12.1478H39.1916ZM38.6341 15.0849H38.9825C39.7491 15.0849 40.0975 14.7267 40.0975 14.082C40.0975 13.5089 39.7491 13.1507 38.9825 13.1507H38.6341V15.0849ZM33.3379 18.5234H36.6829V17.4488H34.5226V15.7296H36.6132V14.655H34.5226V13.2223H36.6829V12.1478H33.3379V18.5234V18.5234ZM29.8536 16.4459L28.2508 12.1478H26.9965L29.5749 18.6667H30.202L32.7804 12.1478H31.5261L29.8536 16.4459V16.4459ZM15.7073 15.3714C15.7073 17.1623 17.101 18.6667 18.8432 18.6667C19.4007 18.6667 19.8885 18.5234 20.3763 18.3085V16.8758C20.0279 17.3056 19.5401 17.5921 18.9826 17.5921C17.8676 17.5921 16.9617 16.7325 16.9617 15.5863V15.4431C16.892 14.2969 17.7979 13.294 18.9129 13.2223C19.4704 13.2223 20.0279 13.5089 20.3763 13.9387V12.506C19.9582 12.2194 19.4007 12.1478 18.9129 12.1478C17.101 12.0045 15.7073 13.5089 15.7073 15.3714V15.3714ZM13.547 14.5834C12.8502 14.2969 12.6411 14.1536 12.6411 13.7954C12.7108 13.3656 13.0592 13.0074 13.4773 13.0791C13.8258 13.0791 14.1742 13.294 14.453 13.5805L15.0801 12.7209C14.5923 12.2911 13.9652 12.0045 13.338 12.0045C12.3624 11.9329 11.5261 12.7209 11.4564 13.7238V13.7954C11.4564 14.6551 11.8049 15.1565 12.9199 15.5147C13.1986 15.5863 13.4773 15.7296 13.7561 15.8729C13.9652 16.0161 14.1045 16.231 14.1045 16.5176C14.1045 17.019 13.6864 17.4489 13.2683 17.4489H13.1986C12.6411 17.4489 12.1533 17.0907 11.9443 16.5892L11.1777 17.3772C11.5958 18.1652 12.4321 18.595 13.2683 18.595C14.3833 18.6667 15.2892 17.807 15.3589 16.6609V16.446C15.2892 15.5863 14.9408 15.1565 13.547 14.5834V14.5834ZM9.50523 18.5234H10.6899V12.1478H9.50523V18.5234V18.5234ZM4 12.1478H5.74216H6.09059C7.76306 12.2195 9.0871 13.6522 9.01741 15.3714C9.01741 16.3027 8.5993 17.1623 7.90243 17.8071C7.27526 18.3085 6.50871 18.5951 5.74216 18.5234H4V12.1478ZM5.53311 17.4489C6.0906 17.5205 6.71778 17.3056 7.13589 16.9474C7.55401 16.5176 7.76307 15.9445 7.76307 15.2998C7.76307 14.7267 7.55401 14.1536 7.13589 13.7238C6.71778 13.3656 6.0906 13.1507 5.53311 13.2223H5.18468V17.4489H5.53311Z"
                          fill="#2E2E2E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.9302 12C22.188 12 20.7246 13.4327 20.7246 15.2953C20.7246 17.0862 22.1183 18.5905 23.9302 18.6621C25.742 18.7338 27.1357 17.2294 27.2054 15.3669C27.1357 13.5044 25.742 12 23.9302 12V12Z"
                          fill="#FD6020"
                        />
                      </svg>

                      <span className="text-gray-400">Savings (4234)</span>
                    </div>
                  </li>
                </ul>
              </div>
              <span className="text-gray-400 underline underline-offset-2 self-center">
                Edit
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
