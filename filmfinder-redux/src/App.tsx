import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { MainPage } from "./Views/MainPage/MainPage";
import { LoginPage } from "./Views/LoginPage/LoginPage";
import { RegisterPage } from "./Views/RegisterPage/RegisterPage";
import { HomePage } from "./Views/HomePage/HomePage";
import { SearchPage } from "./Views/SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="" replace />} />
        <Route path="" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
