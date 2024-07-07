import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton, SignIn, SignUp } from "@clerk/clerk-react";
import { useState } from "react";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/">Dashboard</Link>
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </div>
        <SignedIn>
          <FinancialRecordsProvider>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </FinancialRecordsProvider>
        </SignedIn>
        <SignedOut>
          {!showSignIn && !showSignUp && (
            <div className="welcome-container">
              <h1>Welcome! Use our Finance Tracker</h1>
              <button onClick={handleSignInClick}>Sign In</button>
              <button onClick={handleSignUpClick}>Sign Up</button>
            </div>
          )}
          {showSignIn && <SignIn path="/" routing="path" />}
          {showSignUp && <SignUp path="/" routing="path" />}
        </SignedOut>
      </div>
    </Router>
  );
}

export default App;
