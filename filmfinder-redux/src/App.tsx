import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./Views/LoginPage/LoginPage";
import { RegisterPage } from "./Views/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
