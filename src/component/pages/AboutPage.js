import React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
// import '../../style/AboutPage.css';
import PublicImage from '../../utils/PublicImage';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { transform: scale(0.95); }
  to { transform: scale(1); }
`;

// Styled Components
const AboutContainer = styled('div')({
  marginTop: '70px',
  fontFamily: "'Poppins', sans-serif",
  color: '#333',
  lineHeight: '1.6'
});

const SectionContainer = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
});

const HeroSection = styled('section')({
  position: 'relative',
  height: '80vh',
  minHeight: '500px',
  maxHeight: '800px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.7)'
  }
});

const HeroContent = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  width: '80%',
  maxWidth: '800px',
  animation: `${fadeIn} 0.8s ease-out`
});

const HeroTitle = styled('h1')({
  fontSize: '3.5rem',
  marginBottom: '20px',
  fontWeight: '700',
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
});

const HeroSubtitle = styled('p')({
  fontSize: '1.3rem',
  marginBottom: '30px',
  textShadow: '0 1px 3px rgba(0,0,0,0.3)'
});

const MissionSection = styled('section')({
  padding: '100px 0',
  background: 'linear-gradient(to bottom, #f9f9f9, #ffffff)'
});

const MissionFlex = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '60px',
  '@media (max-width: 768px)': {
    flexDirection: 'column'
  }
});

const MissionContent = styled('div')({
  flex: '1',
  animation: `${fadeIn} 0.8s ease-out 0.2s both`
});

const MissionTitle = styled('h2')({
  fontSize: '2.5rem',
  marginBottom: '25px',
  color: '#2c3e50',
  fontWeight: '600',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '0',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #3498db, #2c3e50)',
    borderRadius: '2px'
  }
});

const MissionText = styled('p')({
  fontSize: '1.1rem',
  marginBottom: '20px',
  color: '#555'
});

const MissionImage = styled('div')({
  flex: '1',
  position: 'relative',
  minHeight: '400px',
  animation: `${scaleIn} 0.8s ease-out`,
  '@media (max-width: 768px)': {
    minHeight: '300px',
    width: '100%'
  }
});

const ImageFrame = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  border: '15px solid #3498db',
  borderRadius: '10px',
  backgroundImage: 'url(https://source.unsplash.com/random/800x600/?travel)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
  transform: 'rotate(-3deg)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(0deg)'
  }
});

const StatsSection = styled('section')({
  padding: '80px 0',
  background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
  color: 'white',
  textAlign: 'center',
  backgroundSize: '400% 400%',
  animation: 'gradientBG 15s ease infinite'
});

const StatsGrid = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px'
});

const StatItem = styled('div')({
  padding: '30px 20px',
  minWidth: '200px',
  animation: `${fadeIn} 0.8s ease-out`,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
});

const StatNumber = styled('h3')({
  fontSize: '3rem',
  marginBottom: '10px',
  fontWeight: '700',
  color: 'white'
});

const StatLabel = styled('p')({
  fontSize: '1.2rem',
  fontWeight: '500',
  opacity: '0.9'
});

const TeamSection = styled('section')({
  padding: '100px 0',
  backgroundColor: 'white',
  textAlign: 'center'
});

const SectionTitle = styled('h2')({
  fontSize: '2.5rem',
  marginBottom: '15px',
  color: '#2c3e50',
  fontWeight: '600'
});

const SectionSubtitle = styled('p')({
  color: '#7f8c8d',
  marginBottom: '50px',
  fontSize: '1.1rem',
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto'
});

const TeamGrid = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '40px',
  marginTop: '40px'
});

const TeamCard = styled('div')({
  backgroundColor: 'white',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  width: '320px',
  transition: 'all 0.3s ease',
  animation: `${fadeIn} 0.8s ease-out`,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
  }
});

const TeamImage = styled('div')({
  height: '350px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  '&:hover img': {
    transform: 'scale(1.1)'
  }
});

const TeamInfo = styled('div')({
  padding: '25px'
});

const TeamName = styled('h3')({
  marginBottom: '8px',
  fontSize: '1.5rem',
  color: '#2c3e50'
});

const TeamRole = styled('p')({
  color: '#3498db',
  fontWeight: '600',
  marginBottom: '15px',
  fontSize: '1.1rem'
});

const TeamBio = styled('p')({
  color: '#7f8c8d',
  fontSize: '0.95rem'
});

const ValuesSection = styled('section')({
  padding: '100px 0',
  background: 'linear-gradient(to bottom, #ffffff, #f9f9f9)',
  textAlign: 'center'
});

const ValuesGrid = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '30px'
});

const ValueCard = styled('div')({
  backgroundColor: 'white',
  padding: '40px 30px',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  width: '260px',
  transition: 'all 0.3s ease',
  animation: `${fadeIn} 0.8s ease-out`,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)'
  }
});

const ValueIcon = styled('div')({
  fontSize: '3rem',
  marginBottom: '25px',
  display: 'inline-block',
  background: 'linear-gradient(135deg, #3498db, #2c3e50)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
});

const ValueTitle = styled('h3')({
  fontSize: '1.4rem',
  marginBottom: '15px',
  color: '#2c3e50'
});

const ValueDescription = styled('p')({
  color: '#7f8c8d',
  fontSize: '1rem'
});

const CtaSection = styled('section')({
  padding: '120px 0',
  background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://source.unsplash.com/random/1600x800/?vacation)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: 'white',
  textAlign: 'center'
});

const CtaTitle = styled('h2')({
  fontSize: '2.8rem',
  marginBottom: '20px',
  fontWeight: '700',
  color: 'white'
});

const CtaText = styled('p')({
  fontSize: '1.2rem',
  maxWidth: '700px',
  margin: '0 auto 40px',
  opacity: '0.9'
});

const CtaButton = styled('button')({
  background: 'linear-gradient(135deg, #3498db, #2c3e50)',
  color: 'white',
  border: 'none',
  padding: '16px 40px',
  fontSize: '1.1rem',
  fontWeight: '600',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
  }
});

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      bio: 'With 15 years in the travel industry, Priya founded TravelEase to revolutionize how people experience travel.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Chief Technology Officer',
      bio: 'Tech visionary with expertise in building scalable travel platforms that enhance user experiences.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 3,
      name: 'Ananya Patel',
      role: 'Head of Customer Experience',
      bio: 'Passionate about creating memorable journeys and ensuring every customer feels valued.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '100+', label: 'Destinations' },
    { number: '24/7', label: 'Customer Support' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <AboutContainer className='about-page'>
      {/* Hero Section */}
      <HeroSection className='about-hero'>
        <PublicImage
          src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1685&q=80'
          alt='Travel experiences'
        />
        <HeroContent className='hero-content'>
          <HeroTitle>Our Story</HeroTitle>
          <HeroSubtitle>
            Discover the journey behind TravelEase and our passion for creating
            unforgettable travel experiences.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* Mission Section */}
      <MissionSection className='mission-section'>
        <SectionContainer className='container'>
          <MissionFlex>
            <MissionContent className='mission-content'>
              <MissionTitle>Our Mission</MissionTitle>
              <MissionText>
                At TravelEase, we believe travel should be effortless, enjoyable,
                and accessible to everyone. Our mission is to simplify travel
                planning while delivering exceptional experiences that create
                lifelong memories.
              </MissionText>
              <MissionText>
                Founded in 2012, we've grown from a small startup to one of
                India's leading travel platforms, serving thousands of customers
                each year with personalized travel solutions.
              </MissionText>
            </MissionContent>
            <MissionImage className='mission-image'>
              <ImageFrame className='image-frame' />
            </MissionImage>
          </MissionFlex>
        </SectionContainer>
      </MissionSection>

      {/* Stats Section */}
      <StatsSection className='stats-section'>
        <SectionContainer className='container'>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index} className='stat-item'>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </SectionContainer>
      </StatsSection>

      {/* Team Section */}
      <TeamSection className='team-section'>
        <SectionContainer className='container'>
          <SectionTitle>Meet Our Team</SectionTitle>
          <SectionSubtitle>
            The passionate individuals who make TravelEase possible
          </SectionSubtitle>
          <TeamGrid className='team-grid'>
            {teamMembers.map(member => (
              <TeamCard key={member.id} className='team-card'>
                <TeamImage className='team-image'>
                  <PublicImage src={member.image} alt={member.name} />
                </TeamImage>
                <TeamInfo className='team-info'>
                  <TeamName>{member.name}</TeamName>
                  <TeamRole className='role'>{member.role}</TeamRole>
                  <TeamBio className='bio'>{member.bio}</TeamBio>
                </TeamInfo>
              </TeamCard>
            ))}
          </TeamGrid>
        </SectionContainer>
      </TeamSection>

      {/* Values Section */}
      <ValuesSection className='values-section'>
        <SectionContainer className='container'>
          <SectionTitle>Our Core Values</SectionTitle>
          <ValuesGrid className='values-grid'>
            <ValueCard className='value-card'>
              <ValueIcon>✈️</ValueIcon>
              <ValueTitle>Customer First</ValueTitle>
              <ValueDescription>
                We prioritize our customers' needs and strive to exceed their
                expectations at every touchpoint.
              </ValueDescription>
            </ValueCard>
            <ValueCard className='value-card'>
              <ValueIcon>🌍</ValueIcon>
              <ValueTitle>Authentic Experiences</ValueTitle>
              <ValueDescription>
                We curate genuine travel experiences that connect people with
                local cultures and communities.
              </ValueDescription>
            </ValueCard>
            <ValueCard className='value-card'>
              <ValueIcon>💡</ValueIcon>
              <ValueTitle>Innovation</ValueTitle>
              <ValueDescription>
                We continuously evolve our services to leverage technology that
                simplifies travel planning.
              </ValueDescription>
            </ValueCard>
            <ValueCard className='value-card'>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Integrity</ValueTitle>
              <ValueDescription>
                We conduct our business with honesty, transparency, and respect
                for all stakeholders.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </SectionContainer>
      </ValuesSection>

      {/* CTA Section */}
      <CtaSection className='cta-section'>
        <SectionContainer className='container'>
          <CtaTitle>Ready to Start Your Journey?</CtaTitle>
          <CtaText>
            Let us help you plan your perfect trip with personalized
            recommendations and expert support.
          </CtaText>
          <CtaButton className='cta-button'>Explore Destinations</CtaButton>
        </SectionContainer>
      </CtaSection>
    </AboutContainer>
  );
};

export default AboutPage;