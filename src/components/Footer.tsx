
import { Calendar, Users, Star, MessageSquare, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'Event Management', href: '#' },
      { name: 'Volunteer Portal', href: '#' },
      { name: 'Sponsor Hub', href: '#' },
      { name: 'University Dashboard', href: '#' }
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'API Documentation', href: '#' },
      { name: 'Event Templates', href: '#' },
      { name: 'Best Practices', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Mission', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Data Protection', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-poppins bg-gradient-to-r from-festivo-violet to-festivo-seafoam bg-clip-text text-transparent mb-4">
              Festivo
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Pakistan's youth through innovative event management and 
              volunteer engagement. Building communities, one event at a time.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>hello@festivo.pk</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-festivo-seafoam transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-festivo-seafoam transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-festivo-seafoam transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-festivo-seafoam transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-festivo-violet">500+</div>
              <div className="text-gray-400 text-sm">Events Organized</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-festivo-seafoam">10K+</div>
              <div className="text-gray-400 text-sm">Active Volunteers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">50+</div>
              <div className="text-gray-400 text-sm">University Partners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">100+</div>
              <div className="text-gray-400 text-sm">Sponsors & Partners</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Festivo. All rights reserved. Made with ❤️ in Pakistan.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-festivo-seafoam transition-colors duration-200 text-sm"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
