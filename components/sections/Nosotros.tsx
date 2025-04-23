import React, { useEffect } from 'react';

interface AboutUsProps {
  image1: string;
  image2: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ image1, image2 }) => {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <section id='Nosotros' className="about-section">
      <div className="about-container">
        <div className="image-group">
          <div 
            className="round-image main-image" 
            style={{ backgroundImage: `url(${image1})` }}
            role="img"
            aria-label="Our farm fields"
          />
          <div 
            className="round-image secondary-image" 
            style={{ backgroundImage: `url(${image2})` }}
            role="img"
            aria-label="Harvesting fresh produce"
          />
        </div>

        <div className="about-content">
          <h2 className="section-title">
            Cultivating Excellence Since 2005
          </h2>
          <p className="about-text">
            At [Your Business Name], we combine generations of farming wisdom 
            with modern sustainable practices. Our family-owned operation in 
            [Location] specializes in organic, nutrient-rich crops while 
            maintaining harmony with nature.
          </p>
          
          <div className="agricultural-values">
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>Sustainable Farming</h3>
              <p>100% organic practices, zero chemical additives</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">👨‍🌾</div>
              <h3>Expert Team</h3>
              <p>30+ years combined agricultural experience</p>
            </div>
          </div>
          
          <button className="cta-button">
            Learn About Our Practices
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = `
  .about-section {
    padding: 4rem 1rem;
    background: rgba(255, 255, 255, 0.95);
    position: relative;
  }

  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .image-group {
    position: relative;
    min-height: 500px;
  }

  .round-image {
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    position: absolute;
    border: 4px solid #fff;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .main-image {
    width: 380px;
    height: 380px;
    top: 50px;
    left: 0;
    z-index: 2;
  }

  .secondary-image {
    width: 320px;
    height: 320px;
    top: 0;
    left: 230px;
    z-index: 1;
  }

  .about-content {
    padding-left: 2rem;
  }

  .section-title {
    color: #2d5a27;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .about-text {
    color: #4a4a4a;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .agricultural-values {
    display: grid;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .value-item {
    display: flex;
    align-items: start;
    gap: 1rem;
  }

  .value-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .cta-button {
    background: #3a7d4a;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    background: #2d5a27;
  }

  @media (max-width: 768px) {
    .about-container {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .image-group {
      min-height: 300px;
    }

    .main-image {
      width: 250px;
      height: 250px;
      position: relative;
      margin: 0 auto;
    }

    .secondary-image {
      display: none;
    }

    .value-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

export default AboutUs;
