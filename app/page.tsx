import AboveFooter from "@/components/AboveFooter";
import ClientViews from "@/components/ClientViews";
import Crew from "@/components/Crew";
import Footer from "@/components/Footer";
import MainHome from "@/components/MainHome";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import TechServices from "@/components/TechServices";
import TrustedCompanies from "@/components/TrustedCompanies";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="max-w-[1440px]">
      <Navbar />
      <MainHome />
      <Services />
      <TechServices />
      <TrustedCompanies />
      <ClientViews />
      <WhyChooseUs />
      <Crew />
      <AboveFooter />
      <Footer />
      
    </main>
  );
}
