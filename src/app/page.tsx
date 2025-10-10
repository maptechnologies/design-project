
// import header from "./components/Header";/

import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Coursol from "./components/Coursol";
import Digital from "./components/Digital";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
// import Slider from "./components/Herosection";/
import Herosection from "./components/Herosection";
import StatsSection from "./components/Hitting";
// import Hitting from "./components/Hitting";/
import Package from "./components/Package";
import PackagesData from "./components/PackagesData";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial";
import Text from "./components/Text";
// import ServicesGrid from "./service/page";/








export default function () {
  return (
    <div>

      {/* <Header/> */}
      <Herosection />
      <Text />
      {/* <Slider/>  */}
      <Coursol />
      <PackagesData />
      <Package />
      {/* <Hitting/> */}
      <Process />
      < Awards />
      <Portfolio />
      <Digital />
      <Testimonial />
      < Form />
      <Contact />
      {/* <StatsSection/>/ */}
      <Footer />
      {/* <ServicesGrid/> */}







    </div>

  );

}