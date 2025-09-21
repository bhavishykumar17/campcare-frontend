import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
