
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedEvents from '@/components/FeaturedEvents';
import UserRoles from '@/components/UserRoles';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <HeroSection />
      <FeaturedEvents />
      <UserRoles />
      <Footer />
    </div>
  );
};

export default Index;
