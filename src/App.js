import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Customcarousel from "./components/carousel/Carousel";
import HomeContainer from "./components/container/homecontainer";
import WhiteboardContainer from "./components/container/whiteboardcontainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header></Header> */}
        {/* <Customcarousel></Customcarousel> */}
        <div className="">
          <Routes>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route path="/whiteboard" element={<WhiteboardContainer />}></Route>
          </Routes>
       
        </div>
      </div>
    </Router>
  );
}

export default App;
