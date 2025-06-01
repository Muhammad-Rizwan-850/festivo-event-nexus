
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Calendar, Users, Star, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Volunteers', href: '#volunteers', icon: Users },
    { name: 'Sponsors', href: '#sponsors', icon: Star },
    { name: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-poppins bg-gradient-to-r from-festivo-violet to-festivo-seafoam bg-clip-text text-transparent">
              Festivo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-festivo-violet px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <item.icon size={16} />
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="text-festivo-violet border-festivo-violet hover:bg-festivo-violet hover:text-white">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-festivo-violet to-festivo-seafoam hover:from-festivo-violet-dark hover:to-festivo-seafoam text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-festivo-violet hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-festivo-violet"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-festivo-violet block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={16} />
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="text-festivo-violet border-festivo-violet hover:bg-festivo-violet hover:text-white w-full">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-festivo-violet to-festivo-seafoam hover:from-festivo-violet-dark hover:to-festivo-seafoam text-white w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
