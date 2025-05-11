
import React from 'react';
import CommitteeCard from '@/components/CommitteeCard';

const Committees = () => {
  // Mock data for committees
  const committeeData = [
    {
      name: "Welfare Committee",
      chairman: "Bro. Joshua Alamba",
      description: "Responsible for identifying and meeting the welfare needs of church members and the broader community through various support programs.",
      email: "welfare@churchofchrist.org",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      name: "Edification Committee",
      chairman: "Bro. Francis Bassey",
      description: "Focuses on spiritual growth and education of church members through Bible studies, workshops, seminars, and other educational programs.",
      email: "edification@churchofchrist.org",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      name: "Evangelism Committee",
      chairman: "Bro. Chinonso Orji",
      description: "Leads the church's outreach efforts to spread the Gospel, including community events, missions, and other evangelistic activities.",
      email: "evangelism@churchofchrist.org",
      image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      name: "Media Committee",
      chairman: "Bro. Ikechukwu Chukwu",
      description: "Manages all church media including website, social media, service recordings, and technology needs for services and events.",
      email: "media@churchofchrist.org",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      name: "Security Committee",
      chairman: "Bro. Emmanuel Nwagbo",
      description: "Ensures the safety and security of the congregation during services and events, and maintains the security of church property.",
      email: "security@churchofchrist.org",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      name: "Finance Committee",
      chairman: "Bro. Joseph Effiong",
      description: "Manages church finances, budgeting, and ensures transparent stewardship of financial resources.",
      email: "finance@churchofchrist.org",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      name: "Works Committee",
      chairman: "Bro. Augustine Wilson",
      description: "Oversees the maintenance, improvement, and care of church buildings and grounds.",
      email: "facilities@churchofchrist.org",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      name: "Secretariate Committee",
      chairman: "Bro. Clement Clement",
      description: "Plans and coordinates all aspects of worship services including music, communion, and special services.",
      email: "secretariate@churchofchrist.org",
      image: "https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-cinzel font-bold mb-4">Church Committees</h1>
          <p className="text-xl max-w-3xl mx-auto">Meet our dedicated committees who work together to ensure the smooth operation and ministry of our church.</p>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-cinzel font-bold mb-6 section-title">Our Committees</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Our church operates through various committees, each dedicated to specific aspects of ministry and service. These committees are led by experienced chairpersons who guide their teams in fulfilling our collective mission.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {committeeData.map((committee, index) => (
                <CommitteeCard key={index} {...committee} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-cinzel font-bold mb-6">Get Involved</h2>
            <p className="text-xl mb-8">We encourage all members to participate in the work of the church through our committees. Your skills and talents can make a difference!</p>
            <p className="text-gray-600 mb-8">If you're interested in joining any of our committees, please speak with the committee chairman or contact the church office. We believe that everyone has gifts to share, and we welcome your participation.</p>
            <p className="text-gray-600">Committee meetings are typically held monthly, with specific schedules determined by each group. New members are always welcome to attend and learn more about how they can contribute.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committees;
