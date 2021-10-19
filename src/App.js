// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./data-config";
function App() {
  return (
    <div className="">
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Testimonials resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
