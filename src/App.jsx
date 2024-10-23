import NavBar from "./Pages/NavBar";
import Content from "./Pages/Content";
import Spotify from "./Pages/Spotify";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Footer from "./Pages/Footer";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Content />
      <hr className="hr" />
      <Projects />
      <hr className="hr" />
      <Spotify />
      <hr className="hr" />
      <Contacts />
      <hr className="hr" style={{ marginTop: "16px", marginBottom: "10px" }} />
      <Footer />
    </>
  );
}

export default App;