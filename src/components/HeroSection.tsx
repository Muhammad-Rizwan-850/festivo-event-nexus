
import { Button } from '@/components/ui/button';
import { Calendar, Users, Star, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Calendar, label: 'Events Organized', value: '500+' },
    { icon: Users, label: 'Active Volunteers', value: '10K+' },
    { icon: Star, label: 'University Partners', value: '50+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-festivo-violet/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-festivo-seafoam/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-gray-900 mb-6 leading-tight">
              Revolutionizing
              <span className="block bg-gradient-to-r from-festivo-violet via-purple-600 to-festivo-seafoam bg-clip-text text-transparent">
                Youth Event Management
              </span>
              in Pakistan
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-inter leading-relaxed">
              Empowering the next generation through seamless event coordination, 
              volunteer engagement, and community impact. Join Pakistan's premier 
              platform for youth-driven events.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-gradient-to-r from-festivo-violet to-festivo-seafoam hover:from-festivo-violet-dark hover:to-festivo-seafoam text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Event Journey
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-festivo-violet text-festivo-violet hover:bg-festivo-violet hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
              Become a Volunteer
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-festivo-violet to-festivo-seafoam rounded-full">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold font-poppins text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm font-medium mb-2">Explore More</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
