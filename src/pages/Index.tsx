
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Menu, 
  X, 
  Calendar, 
  Users, 
  Star, 
  MessageSquare, 
  ArrowDown,
  Clock,
  MapPin,
  User,
  Briefcase,
  Mail
} from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Volunteers', href: '#volunteers', icon: Users },
    { name: 'Sponsors', href: '#sponsors', icon: Star },
    { name: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  const heroStats = [
    { icon: Calendar, label: 'Events Organized', value: '500+' },
    { icon: Users, label: 'Active Volunteers', value: '10K+' },
    { icon: Star, label: 'University Partners', value: '50+' },
  ];

  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description: "Empowering young minds with cutting-edge technology and innovation workshops",
      date: "2024-07-15",
      time: "09:00 AM",
      location: "LUMS, Lahore",
      attendees: 250,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Youth Leadership Conference",
      description: "Building tomorrow's leaders through interactive sessions and mentorship",
      date: "2024-07-22",
      time: "10:00 AM",
      location: "IBA, Karachi",
      attendees: 180,
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Sustainable Future Expo",
      description: "Showcasing eco-friendly innovations and sustainable business practices",
      date: "2024-08-05",
      time: "11:00 AM",
      location: "NUST, Islamabad",
      attendees: 320,
      category: "Environment",
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=400&h=250&fit=crop"
    }
  ];

  const roles = [
    {
      icon: Calendar,
      title: "Event Organizers",
      description: "Plan, coordinate, and execute impactful events with our comprehensive management tools",
      features: ["Smart Event Creator", "Budget Planning", "Volunteer Management", "Timeline Visualization"],
      cta: "Start Organizing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Volunteers",
      description: "Join a community of passionate youth making a difference across Pakistan",
      features: ["Skill-based Matching", "Achievement Tracking", "Certificate Generation", "Task Management"],
      cta: "Join as Volunteer",
      color: "from-festivo-violet to-purple-600"
    },
    {
      icon: Star,
      title: "Sponsors & Partners",
      description: "Connect with youth-driven initiatives and amplify your brand's community impact",
      features: ["Tier Recognition", "Analytics Dashboard", "Partnership History", "Direct Communication"],
      cta: "Become a Sponsor",
      color: "from-festivo-seafoam to-green-600"
    },
    {
      icon: MessageSquare,
      title: "University Admins",
      description: "Streamline event approvals and enhance student engagement on your campus",
      features: ["Proposal Tracking", "Calendar Sync", "Student Analytics", "Direct Messaging"],
      cta: "Connect Institution",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Briefcase,
      title: "Investors",
      description: "Explore opportunities in Pakistan's growing youth empowerment ecosystem",
      features: ["Pitch Deck Access", "ROI Simulations", "Performance Insights", "Meeting Scheduler"],
      cta: "Investor Portal",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: User,
      title: "General Public",
      description: "Stay updated with the latest events and youth initiatives in your area",
      features: ["Event Discovery", "News Portal", "Community Updates", "Social Sharing"],
      cta: "Explore Events",
      color: "from-gray-600 to-gray-800"
    }
  ];

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
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
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

      {/* Hero Section */}
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
              {heroStats.map((stat, index) => (
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

      {/* Featured Events */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover upcoming events that are shaping Pakistan's youth landscape. 
              From tech summits to leadership conferences, find your next opportunity to grow.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={event.id} className={`group hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in ${event.featured ? 'ring-2 ring-festivo-violet' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.category === 'Technology' ? 'bg-blue-100 text-blue-800' :
                      event.category === 'Leadership' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  {event.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-festivo-violet to-festivo-seafoam text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-festivo-violet transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {event.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.attendees}+ attending
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-festivo-violet to-festivo-seafoam hover:from-festivo-violet-dark hover:to-festivo-seafoam text-white">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Events CTA */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-festivo-violet text-festivo-violet hover:bg-festivo-violet hover:text-white px-8">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section id="volunteers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Built for Every Role
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Festivo brings together diverse stakeholders in Pakistan's youth ecosystem. 
              Whether you're organizing events, volunteering, sponsoring, or investing - we have tools designed for you.
            </p>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <Card key={role.title} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in border-0 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-festivo-violet transition-colors">
                    {role.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {role.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {role.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-festivo-violet rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full bg-gradient-to-r ${role.color} hover:opacity-90 text-white transition-all duration-300`}>
                    {role.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-festivo-violet/10 to-festivo-seafoam/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Youth Engagement?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of organizers, volunteers, and institutions already using Festivo 
              to create meaningful impact across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-festivo-violet to-festivo-seafoam hover:from-festivo-violet-dark hover:to-festivo-seafoam text-white px-8">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-festivo-violet text-festivo-violet hover:bg-festivo-violet hover:text-white px-8">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
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
    </div>
  );
};

export default Index;
