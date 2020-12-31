import React from "react"
import './App.css';
import Blog from "./components/blog/Blog";
import Company from "./components/company/Company";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";
import HomeBanner from "./components/homeBanner/HomeBanner";
import Navbar from "./components/navbar/Navbar";
 import Testimony from "./components/testimoy/Testimony";

function App() {
  return (
    <div className="App">
     <Navbar />
     <HomeBanner />
     <Company />
     <Testimony />
     <Events />
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
