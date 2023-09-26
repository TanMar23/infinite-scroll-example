import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1>Characters</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
