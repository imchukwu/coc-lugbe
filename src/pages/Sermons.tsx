
import React, { useState } from 'react';
import SermonCard from '@/components/SermonCard';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Sermons = () => {
  // Mock data for sermons
  const sermonData = [
    {
      title: "Walking in Faith",
      preacher: "Pastor John Smith",
      date: "May 7, 2023",
      category: "Sunday Service",
      description: "In this powerful message, Pastor John explores the meaning of walking by faith and not by sight, and how we can apply this principle in our daily lives.",
      downloadUrl: "#"
    },
    {
      title: "The Power of Prayer",
      preacher: "Pastor David Johnson",
      date: "April 30, 2023",
      category: "Midweek Teaching",
      description: "Pastor David shares insights on building a strong prayer life and how consistent prayer can transform our relationship with God.",
      downloadUrl: "#"
    },
    {
      title: "Understanding God's Grace",
      preacher: "Pastor John Smith",
      date: "April 23, 2023",
      category: "Sunday Service",
      description: "This sermon delves into the profound concept of God's grace and how it impacts every aspect of a believer's life.",
      downloadUrl: "#"
    },
    {
      title: "The Beatitudes: Path to True Happiness",
      preacher: "Minister Sarah Williams",
      date: "April 19, 2023",
      category: "Midweek Teaching",
      description: "Minister Sarah examines Jesus's teachings in the Beatitudes and reveals how they provide a roadmap to genuine happiness and fulfillment.",
      downloadUrl: "#"
    },
    {
      title: "Living a Life of Purpose",
      preacher: "Pastor David Johnson",
      date: "April 16, 2023",
      category: "Sunday Service",
      description: "Discover how to identify and fulfill your God-given purpose in this encouraging message from Pastor David.",
      downloadUrl: "#"
    },
    {
      title: "Spiritual Disciplines for Everyday Life",
      preacher: "Pastor John Smith",
      date: "April 12, 2023",
      category: "Midweek Teaching",
      description: "Pastor John provides practical guidance on incorporating spiritual disciplines into your daily routine to foster growth and connection with God.",
      downloadUrl: "#"
    },
    {
      title: "Overcoming Trials and Tribulations",
      preacher: "Pastor John Smith",
      date: "April 9, 2023",
      category: "Sunday Service",
      description: "A message of hope and encouragement for believers facing difficulties, with biblical strategies for overcoming life's challenges.",
      downloadUrl: "#"
    },
    {
      title: "The Fruit of the Spirit",
      preacher: "Minister Sarah Williams",
      date: "April 5, 2023",
      category: "Midweek Teaching",
      description: "Minister Sarah explores each aspect of the fruit of the Spirit and how these qualities should be evident in the life of every believer.",
      downloadUrl: "#"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSermons = selectedCategory === "all" 
    ? sermonData 
    : sermonData.filter(sermon => 
        sermon.category === (selectedCategory === "sunday" ? "Sunday Service" : "Midweek Teaching"));

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-cinzel font-bold mb-4">Sermons & Teachings</h1>
          <p className="text-xl max-w-3xl mx-auto">Access our library of sermons and teachings to grow in your faith and understanding of God's Word.</p>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="mb-10">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>All Teachings</TabsTrigger>
                  <TabsTrigger value="sunday" onClick={() => setSelectedCategory("sunday")}>Sunday Services</TabsTrigger>
                  <TabsTrigger value="midweek" onClick={() => setSelectedCategory("midweek")}>Midweek Teachings</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSermons.map((sermon, index) => (
                    <SermonCard key={index} {...sermon} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sunday">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSermons.map((sermon, index) => (
                    <SermonCard key={index} {...sermon} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="midweek">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSermons.map((sermon, index) => (
                    <SermonCard key={index} {...sermon} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Pagination - for future implementation */}
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="mr-2">Previous</Button>
              <Button variant="outline">Next</Button>
            </div>

            {/* Sermon Subscription */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-cinzel font-bold mb-4">Subscribe to Our Sermon Podcast</h3>
              <p className="text-gray-600 mb-6">Never miss a sermon. Get our latest teachings delivered directly to your favorite podcast app.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M4 12a8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8Z"></path><path d="M7 12a5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5Z"></path><circle cx="12" cy="12" r="2"></circle></svg>
                  Apple Podcasts
                </Button>
                <Button variant="outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M12 3v12"></path><path d="M19 10L5 18"></path><path d="M5 10l14 8"></path></svg>
                  Spotify
                </Button>
                <Button variant="outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M19 4v16H5V4h14Z"></path><path d="M12 8v8"></path><path d="M8 10v4"></path><path d="M16 10v4"></path></svg>
                  Google Podcasts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
