import React from 'react'
import '../../style/AboutPage.css'

// import aboutHero from './images/about-hero.jpg';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      bio: 'With 15 years in the travel industry, Priya founded TravelEase to revolutionize how people experience travel.',
      image:
        'https://imgs.search.brave.com/On1jUTlYXU0nMnY-dqmpNg0PIqUoPv_J_lcSWebc9bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTQyMDM0My9waG90/by9zbWlsaW5nLW1h/bi1vdXRkb29ycy1p/bi10aGUtY2l0eS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OGwtZ09ib0dFRlN5/Q0ZYcjA5RWd1RG1W/MEUwYkZUNXVzQW1z/MXd5RkJoOD0'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Chief Technology Officer',
      bio: 'Tech visionary with expertise in building scalable travel platforms that enhance user experiences.',
      image:
        'https://imgs.search.brave.com/0dzCxLFVAhswBMUyAIUtvRwqVzSbzZQ8WejNrY8Ycww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zZW5pb3ItYnVz/aW5lc3MtdGVhbS1s/ZWFkZXItYWdncmVz/c2l2ZS1tb3RpdmF0/ZWQtbG9vay1pbi1i/dXNpbmVzcy1tYW4t/c3VpdC1mcmVlLXBo/b3RvLmpwZz93PTYw/MCZxdWFsaXR5PTgw'
    },
    {
      id: 3,
      name: 'Ananya Patel',
      role: 'Head of Customer Experience',
      bio: 'Passionate about creating memorable journeys and ensuring every customer feels valued.',
      image:
        'https://imgs.search.brave.com/0dzCxLFVAhswBMUyAIUtvRwqVzSbzZQ8WejNrY8Ycww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zZW5pb3ItYnVz/aW5lc3MtdGVhbS1s/ZWFkZXItYWdncmVz/c2l2ZS1tb3RpdmF0/ZWQtbG9vay1pbi1i/dXNpbmVzcy1tYW4t/c3VpdC1mcmVlLXBo/b3RvLmpwZz93PTYw/MCZxdWFsaXR5PTgw'
    }
  ]

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '100+', label: 'Destinations' },
    { number: '24/7', label: 'Customer Support' },
    { number: '10+', label: 'Years Experience' }
  ]

  return (
    <div className='about-page'>
      {/* Hero Section */}
      <section className='about-hero'>
        <div className='hero-image'>
          <img
            src={
              'https://imgak.mmtcdn.com/seo/cms-staticpages/sites/all/themes/custom/makemytrip/images/aboutus/topimg.jpg'
            }
            alt='Travel experiences'
          />
        </div>
        <div className='hero-content'>
          <h1>Our Story</h1>
          <p>
            Discover the journey behind TravelEase and our passion for creating
            unforgettable travel experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='mission-section'>
        <div className='container'>
          <div className='mission-content'>
            <h2>Our Mission</h2>
            <p>
              At TravelEase, we believe travel should be effortless, enjoyable,
              and accessible to everyone. Our mission is to simplify travel
              planning while delivering exceptional experiences that create
              lifelong memories.
            </p>
            <p>
              Founded in 2012, we've grown from a small startup to one of
              India's leading travel platforms, serving thousands of customers
              each year with personalized travel solutions.
            </p>
          </div>
          <div className='mission-image'>
            <div className='image-frame'></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='stats-section'>
        <div className='container'>
          {stats.map((stat, index) => (
            <div key={index} className='stat-item'>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className='team-section'>
        <div className='container'>
          <h2>Meet Our Team</h2>
          <p className='section-subtitle'>
            The passionate individuals who make TravelEase possible
          </p>
          <div className='team-grid'>
            {teamMembers.map(member => (
              <div key={member.id} className='team-card'>
                <div className='team-image'>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className='team-info'>
                  <h3>{member.name}</h3>
                  <p className='role'>{member.role}</p>
                  <p className='bio'>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='values-section'>
        <div className='container'>
          <h2>Our Core Values</h2>
          <div className='values-grid'>
            <div className='value-card'>
              <div className='value-icon'>✈️</div>
              <h3>Customer First</h3>
              <p>
                We prioritize our customers' needs and strive to exceed their
                expectations at every touchpoint.
              </p>
            </div>
            <div className='value-card'>
              <div className='value-icon'>🌍</div>
              <h3>Authentic Experiences</h3>
              <p>
                We curate genuine travel experiences that connect people with
                local cultures and communities.
              </p>
            </div>
            <div className='value-card'>
              <div className='value-icon'>💡</div>
              <h3>Innovation</h3>
              <p>
                We continuously evolve our services to leverage technology that
                simplifies travel planning.
              </p>
            </div>
            <div className='value-card'>
              <div className='value-icon'>🤝</div>
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty, transparency, and respect
                for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='cta-section'>
        <div className='container'>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Let us help you plan your perfect trip with personalized
            recommendations and expert support.
          </p>
          <button className='cta-button'>Explore Destinations</button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
