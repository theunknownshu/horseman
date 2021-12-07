import "./App.css";
import Header from "./components/header/Header";
import Introduce from "./components/introduce/Introduce";
import Roadmap from "./components/roadmap/Roadmap";
import Nftlist from "./components/nftlist/Nftlist";
import Faqaccordion from "./components/faq/Faq";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduce></Introduce>
      <Roadmap></Roadmap>
      <Faqaccordion></Faqaccordion>
      <Team></Team>
      <Footer></Footer>
      {/* <Nftlist></Nftlist> */}
      {/* <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
    </div>
  );
}

export default App;
