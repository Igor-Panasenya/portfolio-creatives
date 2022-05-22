import Header from "./components/header/Header";
import Agency from "./components/agency/Agency";
import Akita from "./components/akita/Akita";
import Blog from "./components/blog/Blog";
import AkitaInu from "./components/akitaInu/AkitaInu";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Agency />
        <Akita />
        <Blog />
        <AkitaInu />
        <Team />
        <Contact />
        <Footer />

    </div>
  );
}

export default App;
