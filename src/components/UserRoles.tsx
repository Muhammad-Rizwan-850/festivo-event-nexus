
import { Calendar, Users, Star, MessageSquare, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const UserRoles = () => {
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

  return (
    <section className="py-20 bg-white">
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
  );
};

export default UserRoles;
