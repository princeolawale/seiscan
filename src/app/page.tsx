import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TransactionFeed from "@/components/TransactionFeed";
import FeaturesSection from "@/components/FeaturesSection";
import SocialSection from "@/components/SocialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="layoutContainer bg-[#090a12]">
      <div className="mainContent">
        <Header />
        <HeroSection />
        <TransactionFeed />
        <FeaturesSection />
        <SocialSection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
