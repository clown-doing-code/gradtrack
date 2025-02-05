import Banner from "@/components/website/banner";
import FAQ from "@/components/website/faq";
import Features from "@/components/website/features";
import Footer from "@/components/website/footer";
import Navbar from "@/components/website/navbar";
import Pricing from "@/components/website/pricing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
