
import React from 'react';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-cinzel font-bold mb-4">About Our Church</h1>
          <p className="text-xl max-w-3xl mx-auto">Learn about our history, beliefs, and mission to spread God's word.</p>
        </div>
      </section>

      {/* Church History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-cinzel font-bold mb-8 text-center section-title">Our History</h2>
            
            <div className="space-y-6 text-gray-700">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel malesuada eros. Etiam sagittis velit at mauris vulputate, in posuere augue malesuada.</p>

              <p>Integer vitae neque ut felis faucibus cursus. Vestibulum viverra ligula at risus feugiat, a laoreet justo viverra. Donec auctor lacinia facilisis.</p>

              <p>Sed at consequat justo. Duis feugiat est in quam volutpat, in ultrices enim imperdiet. Morbi vestibulum, tortor sed convallis fermentum, nisl justo porta sapien, nec malesuada risus nulla eget ex.</p>

              <p>Proin non dui in enim scelerisque cursus. Ut at leo fermentum, facilisis mi eget, ultrices ex. Vivamus et sem nec metus feugiat congue a sit amet nisi.</p>

              <p>Nam porttitor, purus sed facilisis tincidunt, arcu lorem vulputate erat, sed dictum ante nulla non felis. Aliquam erat volutpat. Suspendisse non libero ac odio malesuada finibus.</p>

              <p>Ut euismod, eros vel euismod lobortis, sapien urna sagittis justo, nec efficitur arcu turpis eget nulla. Curabitur at sapien feugiat, lacinia leo at, dictum metus.</p>

              <p>Donec non orci vitae orci finibus blandit. Maecenas bibendum urna in lorem porta, a blandit eros congue. Vivamus facilisis malesuada justo a fermentum.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-cinzel font-bold mb-8 text-center section-title">Our Beliefs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-cinzel font-bold mb-3">The Bible</h3>
                <p className="text-gray-700">We believe the Bible is the inspired Word of God, the complete revelation of His will for salvation, and the ultimate authority for Christian faith and life.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-cinzel font-bold mb-3">God</h3>
                <p className="text-gray-700">We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit, who created all things and by whom all things exist.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-cinzel font-bold mb-3">Jesus Christ</h3>
                <p className="text-gray-700">We believe in Jesus Christ, God's only Son, who was born of a virgin, lived a sinless life, died for our sins, rose from the dead, and now sits at the right hand of the Father.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-cinzel font-bold mb-3">Salvation</h3>
                <p className="text-gray-700">We believe salvation comes through faith in Jesus Christ, repentance of sins, confession of faith, and baptism by immersion for the remission of sins.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-cinzel font-bold mb-3">The Church</h3>
                <p className="text-gray-700">We believe the church is the body of Christ on earth, empowered by the Holy Spirit to continue the work of Jesus: preaching the gospel, making disciples, and serving others.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-cinzel font-bold mb-3">Christian Living</h3>
                <p className="text-gray-700">We believe Christians should live by the moral and ethical teachings of the New Testament, growing in the grace and knowledge of Jesus Christ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-cinzel font-bold mb-8 section-title">Our Mission</h2>
            
            <p className="text-xl mb-8">To know Christ and to make Him known.</p>
            
            <div className="space-y-6 text-gray-700 text-left">
              <p>At Church of Christ, our mission is to glorify God by making disciples who love God, love people, and serve the world. We strive to create an environment where people can encounter God, grow in their relationship with Jesus Christ, and find meaningful community.</p>
              
              <p>We are committed to:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold">Worship:</span> Engaging in authentic, Spirit-led worship that honors God.</li>
                <li><span className="font-bold">Discipleship:</span> Helping people grow in their knowledge and application of God's Word.</li>
                <li><span className="font-bold">Fellowship:</span> Building a loving community where people can find belonging and support.</li>
                <li><span className="font-bold">Service:</span> Meeting the needs of those in our church and community through acts of service.</li>
                <li><span className="font-bold">Evangelism:</span> Sharing the good news of Jesus Christ with our neighbors and the world.</li>
              </ul>
              
              <p>Through these commitments, we seek to fulfill the Great Commission (Matthew 28:19-20) and the Great Commandment (Matthew 22:37-40) as we follow Jesus together.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
