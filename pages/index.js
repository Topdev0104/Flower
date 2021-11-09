import { useWeb3React } from "@web3-react/core";

import useEagerConnect from "../hooks/web3/useEagerConnect";

import Layout from "../components/Common/Layout";
import HomeHeroSection from "../sections/home/Hero";
import HomeSlideshowSection from "../sections/home/Slideshow";
import HomeShowcaseSection from "../sections/home/Showcase";
import HomeAboutSection from "../sections/home/About";
import Footer from "../components/HomePage/Footer";

export default function Home() {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <Layout title="Home |" triedToEagerConnect={triedToEagerConnect}>
      <main className="bg-background">
        <HomeHeroSection isConnected={isConnected} />
        <HomeSlideshowSection />
        <HomeShowcaseSection />
        <HomeAboutSection />
      </main>
      <Footer />
    </Layout>
  );
}
