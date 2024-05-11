import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import DashboardPage from './components/Dashboard';
import InvestmentsRetirementPage from './components/InvestmentsRetirementPage';
import LoansandMortgagespage from './components/LoansandMortgagespage';
import BuildingCreditpage from './components/BuildingCreditpage';
import SyncAccountPage from './components/SyncAccountPage';
import BankSync from './components/BankSync'
import Quiz from './components/InvestQuizPage';
import MortQuiz from './components/MortQuiz';
import CreditQuiz from './components/CreditQuiz';
import SyncedDashboard from './components/SyncedDashboard';
  

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route
            path="/investment_regiment"
            element={<InvestmentsRetirementPage />}
          />
          <Route path="/loans&mortgage" element={<LoansandMortgagespage />} />
          <Route path="/credit" element={<BuildingCreditpage/>} />
          <Route path="/sync" element={<SyncAccountPage/>} />
          <Route path='/bank-sync' element={<BankSync/>} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/mortquiz' element={<MortQuiz/>} />
          <Route path='/creditquiz' element={<CreditQuiz/>} />

          <Route path="/credit" element={<BuildingCreditpage />} />
          <Route path="/sync" element={<SyncAccountPage />} />
          <Route path="/bank-sync" element={<BankSync />} />
          <Route path="/synced-dashboard" element={<SyncedDashboard />} />
          f0c807181d1a7d34b82bc7ec3dea39e85694725f
        </Routes>
      </Router>
    </div>
  );
}

export default App;
