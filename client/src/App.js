import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/Home/HomePage";
import LoginPage from "scenes/Login/LoginPage";
import ProfilePage from "scenes/Profile/ProfilePage";
import NavBar from "scenes/NavBar/NavBar";
import { useMemo } from "react";
import { UseSelector, useSelector } from "react-redux/";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "Theme";

function App() {

  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/profile/:userId' element={<ProfilePage />} />
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
