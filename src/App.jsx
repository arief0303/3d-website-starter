import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import Shipment from "./components/Shipment";
import WebgiViewer from "./components/WebgiViewer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Nav />
            <Jumbotron />
            <SoundSection />
            <DisplaySection />
            <WebgiViewer />
          </>} />
          <Route path="/payment" element={<>
            <Nav />
            <iframe
              src="https://codesandbox.io/embed/snap-basic-integration-demo-yfjjd?fontsize=14&hidenavigation=1&theme=dark&view=preview"
            />
          </>} />
          <Route path="/shipment" element={<>
            <Nav />
            <iframe
              src="https://3daddict.github.io/react-checkout-form/"
            />
            {/* <Shipment /> */}
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
