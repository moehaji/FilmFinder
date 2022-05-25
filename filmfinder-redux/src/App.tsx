import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./Views/LoginPage/LoginPage";
import { RegisterPage } from "./Views/RegisterPage/RegisterPage";
import { HomePage } from "./Views/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
