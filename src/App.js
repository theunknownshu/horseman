import "./App.css";
import HomeContainer from "./components/container/homecontainer";
import WhiteboardContainer from "./components/container/whiteboardcontainer";
import TermsContainer from "./components/container/termscontainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Typography, Modal, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  getCurrentWalletBalance,
  connectWallet,
} from "./util/interact.js";
require("dotenv").config();
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");
  const [modalopen, setModalOpen] = useState(false);
  const [flag_checkMintable, setFlagCheckMintable] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  useEffect(async () => {
    const walletResponse = await connectWallet();

    
    if (walletResponse.success === true) {
      addWalletListener();
    } else {
      setStatus(walletResponse.status);
      setModalOpen(true);
    }
    setWalletAddress(walletResponse.address);
  }, []);

  // useEffect(() => {
  //   const checkMintable = {
  //     address: walletAddress
  //   };
  //   if (walletAddress !== "") {
  //     axios
  //       .post(
  //         process.env.REACT_APP_BASE_API_URL + "checkMintable",
  //         checkMintable
  //       )
  //       .then((response) => {
  //         // console.log("response=>", response);

  //         setFlagCheckMintable(response.data.success);
  //       });
  //     //  getCurrentWalletBalance(walletAddress);
  //   }

  // }, [walletAddress]);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWalletAddress("");
          setStatus("🦊 Connect to Metamask using the above button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
  return (
    <Router>
      <div className="App">
        {/* <Header></Header> */}
        {/* <Customcarousel></Customcarousel> */}

        <Modal
          open={modalopen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {status}
            </Typography>
          </Box>
        </Modal>
        <div className="">
          <Routes>
            <Route
              path="/"
              element={<HomeContainer checkMintable = {flag_checkMintable} walletAddress={walletAddress} />}
            ></Route>
            <Route
              path="/whitelist"
              element={<WhiteboardContainer walletAddress={walletAddress} />}
            ></Route>
            <Route path="/terms" element={<TermsContainer />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
