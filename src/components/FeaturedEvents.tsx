
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturedEvents = () => {
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

  return (
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
  );
};

export default FeaturedEvents;
