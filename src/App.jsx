import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
import ChatBot from "./components/ChatBot";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function App() {
  const [isAuth, setAuth] = useState(true);

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login setAuth={setAuth} />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAuth ? (
              <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-1">
                  <Sidebar />
                  <main className="flex-1 p-4">
                    <Dashboard />
                  </main>
                </div>
                <Footer />
                <ChatBot />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/about"
          element={isAuth ? <About /> : <Navigate to="/login" />}
        />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
