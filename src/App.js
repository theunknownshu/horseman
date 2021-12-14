import "./App.css";
import HomeContainer from "./components/container/homecontainer";
import WhiteboardContainer from "./components/container/whiteboardcontainer";
import TermsContainer from "./components/container/termscontainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DafeisContract,
  connectWallet,
  loadTotalMintCount,
  getCurrentWalletConnected,
  mintDafeisCount,
  Reserve,
  Pause
} from "./util/interact.js";
require("dotenv").config();

function App() {
  const [walletAddress, setWallet] = useState("");
  const [mintCount, setMintCount] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  }, []);
  return (
    <Router>
      <div className="App">
        {/* <Header></Header> */}
        {/* <Customcarousel></Customcarousel> */}
        
        <div className="">
          <Routes>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route path="/whitelist" element={<WhiteboardContainer walletAddress = {walletAddress}/>}></Route>
            <Route path="/terms" element={<TermsContainer/>}></Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
