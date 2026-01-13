import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Topbar from "./components/Topbar/Topbar";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
// import ServiceAreas from "./pages/ServiceAreas";
// import Reservation from "./pages/Reservation";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BookRideCTA from "./components/BookRideCTA/BookRideCTA";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Topbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/service-areas" element={<ServiceAreas />} /> 
          <Route path="/reservation" element={<Reservation />} />  */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <BookRideCTA/>
        <Footer/>
        <ScrollToTop/>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
