import { StockTicker } from './components/StockTicker';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatusBar } from './components/StatusBar';
import { FeatureGrid } from './components/FeatureGrid';
import { PremiumSection } from './components/PremiumSection';
import { LinksSection } from './components/LinksSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StockTicker />
      <Navbar />
      <HeroSection />
      <StatusBar />
      <FeatureGrid />
      <PremiumSection />
      <LinksSection />
      <Footer />
    </div>
  );
}

export default App;
