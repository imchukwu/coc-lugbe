
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import MinisterCard from '@/components/MinisterCard';
import SermonCard from '@/components/SermonCard';

const Index = () => {
  // Sample data for ministers
  const ministers = [
    {
      name: "Evang. Ruper T. Kukwa",
      title: "Minister",
      email: "rkukwa@churchofchristlugbe.com",
      phone: "0803 400 6122",
      bio: `Evang. Rupert Kukwas has been a dedicated minister at the Church of Christ, Lugbe for over 7 years. 
He has consistently demonstrated a deep passion for teaching the Word of God with clarity, conviction, and compassion. 
His mission is to see lives transformed through sound biblical teaching, personal discipleship, and unwavering faith in Christ.

He is known for his mentorship and his heart for spiritual growth within the church. He leads Bible studies, organizes youth development programs, 
and plays an active role in outreach initiatives that strengthen the church's impact in the community.

Beyond his ministry, he is a devoted family man, happily married to his lovely wife, Damaris Kukwa, and together they are blessed with a 16-year-old son, Makarios Kukwa. 
His family remains a strong pillar of support in his service to God and the church.`,
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      social: {
        facebook: "https://facebook.com/rupert.kukwa",
        twitter: "https://twitter.com/rupert_kukwa",
        linkedin: "https://linkedin.com/in/rupert-kukwa"
      }
    }
    
  ];

  // Sample data for recent sermons
  const recentSermons = [
    {
      title: "Walking in Faith",
      preacher: "Evang. Rupert T. Kukwa",
      date: "May 7, 2025",
      category: "Sunday Service",
      description: "In this powerful message, Pastor John explores the meaning of walking by faith and not by sight, and how we can apply this principle in our daily lives.",
      downloadUrl: "#"
    },
    {
      title: "The Power of Prayer",
      preacher: "Jimmy Michael",
      date: "April 30, 2025",
      category: "Midweek Teaching",
      description: "Bro. Jimmy shares insights on building a strong prayer life and how consistent prayer can transform our relationship with God.",
      downloadUrl: "#"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative h-[70vh] flex items-center justify-center">
        <div className="container mx-auto text-center text-white px-4 z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-6">Welcome to the Church of Christ</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Join us in worship, fellowship, and service as we grow together in faith and love.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-cinzel font-bold mb-6 section-title">Service Times</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-cinzel font-bold mb-3">Sunday Morning</h3>
              <p className="text-gray-600">Worship Service: 8:00 AM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-cinzel font-bold mb-3">Wednesday</h3>
              <p className="text-gray-600">Bible Study: 5:00 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-cinzel font-bold mb-3">Thursday</h3>
              <p className="text-gray-600">House Fellowship: 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sermons Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-cinzel font-bold mb-6 section-title">Recent Sermons</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Missed a service? Catch up on our recent sermons and teachings.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
            {recentSermons.map((sermon, index) => (
              <SermonCard key={index} {...sermon} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ministers Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-cinzel font-bold mb-4 section-title">Our Minister</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Meet the dedicated leader who guide our church community with wisdom and compassion.</p>
            </div>

            <div className="space-y-16">
              {ministers.map((minister, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-xl overflow-hidden">
                  {/* Minister Image */}
                  <div className="lg:w-1/2 w-full h-96 lg:h-auto">
                    <img src={minister.image} alt={minister.name} className="object-cover w-full h-full" />
                  </div>

                  {/* Minister Info */}
                  <div className="lg:w-1/2 w-full p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{minister.name}</h3>
                    <p className="text-gray-600 mb-4">{minister.title}</p>
                    <p className="text-gray-700 mb-6">{minister.bio}</p>

                    {/* Contact Info */}
                    <div className="text-sm text-gray-500 space-y-1">
                      {minister.phone && <p><strong>Phone:</strong> {minister.phone}</p>}
                      {minister.email && <p><strong>Email:</strong> {minister.email}</p>}
                      {minister.social && (
                        <p className="flex space-x-4">
                          {minister.social.facebook && <a href={minister.social.facebook} className="hover:text-blue-600">Facebook</a>}
                          {minister.social.twitter && <a href={minister.social.twitter} className="hover:text-blue-400">Twitter</a>}
                          {minister.social.linkedin && <a href={minister.social.linkedin} className="hover:text-blue-700">LinkedIn</a>}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-cinzel font-bold mb-6">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">We'd love to welcome you to our church family. Come experience the love, fellowship, and teaching at Church of Christ.</p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contact">Plan Your Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
