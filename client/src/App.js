import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/Home/HomePage";
import LoginPage from "scenes/Login/LoginPage";
import ProfilePage from "scenes/Profile/ProfilePage";
import NavBar from "scenes/NavBar/NavBar";

function App() {

  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/profile/:userId' element={<ProfilePage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
