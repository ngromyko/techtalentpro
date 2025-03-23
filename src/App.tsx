import NavBar from "./components/NavBar";
import PromoSection from "./components/PromoSection";
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import StaffAugmentationSection from "./components/StaffAugmentationSection";
import TechnologiesSection from "./components/TechnologiesSection";
import WhyUsSection from "./components/WhyUsSection";
import ContactUsSection from "./components/ContactUsSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <div id="content-container">
        <PromoSection />
        <AboutUsSection />
        <ServicesSection />
        <StaffAugmentationSection />
        <TechnologiesSection />
        <WhyUsSection />
        <ContactUsSection />
      </div>

      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export default App;
