
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const News = () => {
  // Mock data for news and events
  const newsData = [
    {
      title: "Annual Church Retreat",
      date: "June 15-17, 2023",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      content: "Join us for our annual church retreat at Mountain View Retreat Center. This year's theme is 'Renewed in Spirit' with guest speaker Dr. Michael Johnson. Registration is now open with early bird pricing until May 20th. Activities include worship sessions, breakout groups, hiking, swimming, and evening fellowship around the campfire."
    },
    {
      title: "Community Outreach Day",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      content: "Our monthly Community Outreach Day will take place on the last Saturday of May. We'll be serving at the Downtown Homeless Shelter from 9 AM to 2 PM, providing meals and essential items. Volunteers are needed for food preparation, serving, and distribution of clothing and toiletries. Please sign up at the welcome desk or contact the Evangelism Committee."
    },
    {
      title: "Vacation Bible School",
      date: "July 10-14, 2023",
      image: "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      content: "Registration is now open for our Vacation Bible School! This year's theme is 'Ocean Adventures: Diving Into God's Word.' Children ages 5-12 are invited to join us for a week of Bible stories, crafts, games, and snacks. We're also looking for adult and teen volunteers. Contact the Children's Ministry coordinator to register or volunteer."
    },
    {
      title: "New Bible Study Series",
      date: "Starting May 3, 2023",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      content: "Pastor John will begin a new Wednesday night Bible study series on the Book of Romans. This in-depth study will explore Paul's teachings on salvation, righteousness, and living the Christian life. Study guides will be available at the first session. Everyone is welcome to join, no prior study experience required."
    },
    {
      title: "Youth Group Mission Trip",
      date: "August 5-12, 2023",
      image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      content: "Our youth group will be traveling to Guatemala for their summer mission trip. They'll be working with local ministries to build homes for families in need and host a children's program at a local orphanage. Please keep them in your prayers and consider supporting them through the fundraising dinner on June 23rd."
    },
    {
      title: "Church Workday",
      date: "May 20, 2023",
      image: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      content: "Join us for our spring church workday from 8 AM to 12 PM. We'll be cleaning the sanctuary, maintaining the grounds, and making minor repairs. Lunch will be provided for all volunteers. Please bring work gloves and any tools you think might be helpful. All ages and skill levels welcome!"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-cinzel font-bold mb-4">News & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">Stay informed about the latest happenings and upcoming events at Church of Christ.</p>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {newsData.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-cinzel font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Calendar Promotion */}
            <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-cinzel font-bold mb-4">View Our Full Calendar</h3>
              <p className="text-gray-600 mb-6">For a complete listing of all church events, services, meetings, and activities, please visit our online calendar.</p>
              <a href="#" className="inline-block bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                Church Calendar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
