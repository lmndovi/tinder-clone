import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Chats from "./components/Chats";
// import SwipeButtons from "./components/SwipeButtons";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TinderCards />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
