import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from '../assets/Badge.png'

interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
    hint: string;
}

const MortQuiz = () => {
    const questions: Question[] = [
        {
            question: '1. What is the purpose of a down payment on a house?',
            options: ['To cover the entire cost of the home upfront', 'To reduce the amount borowed and secure the loan', 'To reduce the cost of property tax in the future', 'Stuck?: Use a hint.'],
            correctAnswer: 'To reduce the amount borowed and secure the loan',
            hint: '💡 A down payment is made to lessen the amount of this type of financial agreement',
        },
        {
            question: '2. What is a credit score used for in loan applications?',
            options: ['To determine the amount of interest the bank will earn', 'To better understand the applicant\'s purchase history', 'To assess the borrower\'s credit worthiness', 'Stuck?: Use a hint.'],
            correctAnswer: 'To assess the borrower\'s credit worthiness',
            hint: '💡 How would a loaner know that they could trust you to pay them back?',
        },
    ];

    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showFeedback, setShowFeedback] = useState<boolean>(false);
    const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
    const [showHint, setShowHint] = useState<boolean>(false);
    const [successAlert, setSuccessAlert] = useState<boolean>(false);
    const [incorrectAlert, setIncorrectAlert] = useState<boolean>(false);
    const [showSubmitButton, setShowSubmitButton] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);




    // Handle moving to next question
    const handleNextQuestion = () => {
        setShowFeedback(false);
        setShowHint(false);
        setSuccessAlert(false);
        setIncorrectAlert(false);
        setShowSubmitButton(false);

        // move to next question or complete quiz
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setQuizSubmitted(true);
        }
    };

    // Handle selecting an answer
    const handleAnswerSelect = (selectedOption: string) => {
        setSelectedOption(selectedOption);
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = selectedOption;
        setAnswers(updatedAnswers);
        setShowSubmitButton(true);
    };


    // Handling submitting an answer
    const handleSubmitAnswer = () => {
        setShowFeedback(true);

        // Show feedback based on answer
        if (selectedOption === questions[questionIndex].correctAnswer) {
            setSuccessAlert(true);
        } else {
            setIncorrectAlert(true);
        }

        setShowSubmitButton(false);
    };

    // Hint button
    const handleHintClick = () => {
        setShowHint(true);
    };

    // Calculate users score
    const calculateScore = () => {
        const correctAnswers = questions.filter((q, index) => q.correctAnswer === answers[index]);
        const percentage = (correctAnswers.length / questions.length) * 100;
        return percentage;
    };


    // Feedback message for user score
    const getFeedbackMessage = () => {
        const score = calculateScore();
        if (score === 100) {
            return 'You sure it\'s your first time?';
        } else if (score >= 50) {
            return 'Almost got it. Check out our resources!';
        } else {
            return 'That\'s okay, you\'re here to learn!';
        }
    };

    // Feedback message styling
    const feedbackMessageStyle: React.CSSProperties = {
        color: 'gray',
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '1.2rem',
    };


    // Progress bar styling
    const progressBarStyle = {
        width: `${((questionIndex + 1) / questions.length) * 100}%`,
        height: '18px',
        backgroundColor: 'blue',
        borderRadius: '15px',
        transition: 'width 0.5s ease',
    };



    // QuizPage
    return (
        <div className="mt- bg-gray-100 min-h-screen">
            <div className="flex justify-center">
                <div className="w-full md:w-1/2 pr-4">
                    <div className="flex items-left mb-4">
                        <Link to="/dashboard" className="absolute top-16 left-4 mt-4 ml-4 text-blue-500 flex items-center">
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
                            <span className="text-gray-400 text-2xl">Back</span>
                        </Link>
                        {/* Conditional rendering of title */}
                        {!quizSubmitted && (
                            <h2 className="text-3xl font-bold mb-10">Loans and Mortgages</h2>
                        )}
                    </div>
                    {!quizSubmitted && (
                        <div>
                            <h1 className="mb-3 text-md">Completion</h1>
                            <div style={{ marginBottom: '10px', backgroundColor: 'white', borderRadius: '15px' }}>
                                <div className="mb-14" style={progressBarStyle}></div>
                            </div>
                        </div>
                    )}
                    {/* Quiz Completion*/}
                    {quizSubmitted ? (
                        // completed Quiz screen 
                        <div>
                            <div className="text-left mt-9 mb-8 ml-2">
                                <p className="text-xl font-bold mb-2">Results</p>
                            </div>
                            <div className="flex justify-center mb-8">
                                <p className="mb-2" style={feedbackMessageStyle}>{getFeedbackMessage()}</p>
                            </div>
                            <div className="flex justify-center mb-8">
                                <p className="text-3xl font-bold">You Scored {calculateScore()}%</p>
                            </div>
                            <div className="flex justify-center mb-4">
                                <img src={Badge} alt="Score Image" className="mb-4" style={{ width: '530px', height: '650px' }} />
                            </div>
                            <div className="flex justify-center">
                                <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-full mt-5">Back to Home</Link>
                            </div>
                        </div>
                    ) : (
                        // Quiz questions and options
                        <div>
                            {/* Question */}
                            <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '20px' }}>{questions[questionIndex].question}</h3>
                            {/* Options */}
                            {questions[questionIndex].options.map((option, optionIndex) => (
                                <div key={optionIndex} className="flex items-center mb-2">
                                    {option.startsWith('Stuck?') ? (
                                        <button onClick={handleHintClick} style={{ background: 'transparent', border: 'none', color: 'blue', cursor: 'pointer' }}>
                                            <span className="mr-2">💡</span>Stuck? Use a  <span className="text-yellow-500">hint.</span>
                                        </button>
                                    ) : (
                                        <>
                                            <input
                                                type="radio"
                                                id={`option-${questionIndex + 1}-${optionIndex}`}
                                                name={`options-${questionIndex + 1}`}
                                                value={option}
                                                onClick={() => handleAnswerSelect(option)}
                                                style={{ display: 'none' }}
                                            />
                                            <label
                                                htmlFor={`option-${questionIndex + 1}-${optionIndex}`}
                                                className={`relative cursor-pointer inline-block px-4 py-2 rounded-full border border-white-500 flex-grow ${selectedOption === option ? 'bg-primary-500' : 'blue'}`}
                                                style={{
                                                    userSelect: 'none',
                                                    width: '300px',
                                                    background: answers[questionIndex] === option ? 'aliceblue' : 'white',
                                                    flexShrink: 1,
                                                    padding: '8px',
                                                }}
                                                onClick={() => handleAnswerSelect(option)}
                                            >
                                                <span
                                                    className={`w-4 h-4 inline-block mr-3 rounded-full border`}
                                                    style={{
                                                        backgroundColor: selectedOption === option ? 'blue' : 'transparent',
                                                        transition: 'background-color 0.2s ease',
                                                        borderColor: 'blue'
                                                    }}
                                                ></span>
                                                {option}
                                            </label>
                                        </>
                                    )}
                                </div>
                            ))}
                            {/* Submit Button */}
                            {showSubmitButton ? (
                                <div className="flex justify-center mt-4">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full" onClick={handleSubmitAnswer}>
                                        Submit
                                    </button>
                                </div>
                            ) : (
                                // Next Question button
                                <div className="flex justify-center mt-4">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full" onClick={handleNextQuestion}>
                                        {questionIndex === questions.length - 1 ? 'Submit' : 'Next'}
                                    </button>
                                </div>
                            )}
                            {/* feedback messages */}
                            {showFeedback && (
                                <div className="relative block w-full p-4 mb-4 text-base leading-5 font-regular">
                                {successAlert && (
                                    <div className="flex items-center justify-between bg-green-200 rounded-full py-2 px-4 mb-2 opacity-100">
                                        <div>
                                            {questionIndex === 0 ? (
                                                // Custom feedback for the first question
                                                "That’s Correct! “To reduce the amount borrowed and secure the loan."
                                            ) : (
                                                // Custom feedback for the second question
                                                "That’s Correct! To assess the borrower's credit worthiness."
                                            )}
                                        </div>
                                        <button onClick={() => setSuccessAlert(false)} className="text-white hover:text-gray-300 focus:outline-none" title="Close">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM8.293 8.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414L11.414 12l1.293 1.293a1 1 0 11-1.414 1.414L10 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 12 7.293 10.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                {incorrectAlert && (
                                    <div className="flex items-center justify-between bg-red-200 rounded-full py-2 px-4 mb-2 opacity-100">
                                        <div>
                                            {questionIndex === 0 ? (
                                                // Custom feedback for the first question
                                                "Not exactly, to reduce the amount borrowed and secure the loan, is the correct answer."
                                            ) : (
                                                // Custom feedback for the second question
                                                "Not quite, to assess the borrower's credit worthiness, is the correct answer."
                                            )}
                                        </div>
                                        <button onClick={() => setIncorrectAlert(false)} className="text-white hover:text-gray-300 focus:outline-none" title="Dismiss Incorrect Alert">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM8.293 8.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414L11.414 12l1.293 1.293a1 1 0 11-1.414 1.414L10 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 12 7.293 10.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                            
                            )}
                            {/* Hint message */}
                            {showHint && (
                                <div className="mt-4 bg-yellow-100 p-4 rounded-full relative">
                                    <button className="text-black hover:text-blue-700 absolute top-0 right-0 mt-2 mr-5" onClick={() => setShowHint(false)}>X</button>
                                    <p>{questions[questionIndex].hint}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default MortQuiz;
