import Banner from "@/components/website/banner";
import Features from "@/components/website/features";
import Footer from "@/components/website/footer";
import Navbar from "@/components/website/navbar";
import Pricing from "@/components/website/pricing";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const isAuthenticated = user !== null;

  return (
    <main>
      <Navbar isAuthenticated={isAuthenticated} />
      <Banner />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
