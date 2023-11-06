import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstGamePage from "./pages/FirstGamePage";
import Layout from "./components/layout";
import BgText from "./components/card/BgText";
import GlobalPage from "./pages/GlobalPage";
import WelcomePage from "./pages/WelcomePage";

import './App.scss'
import SecoundGamePage from "./pages/SecoundGamePage";
import ThirdGamePage from "./pages/ThirdGamePage";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5900);


    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      {showWelcome && <WelcomePage />}
      {!showWelcome && (
        <>
          <Layout />
          <BgText />
          <Routes>
            <Route path="/" element={<GlobalPage />} />
            <Route path="/FirstGame" element={<FirstGamePage />} />
            <Route path="/SecondGame" element={<SecoundGamePage />} />
            <Route path="/ThirdGame" element={<ThirdGamePage />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;