import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../style/App.css';

const FerrariConfigurator = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder images for carousel
  const carouselImages = [
    "Imagem Principal - Vista Lateral",
    "Imagem 2 - Vista Frontal", 
    "Imagem 3 - Vista Traseira",
    "Imagem 4 - Interior",
    "Imagem 5 - Detalhes"
  ];

  const engineOptions = [
    {
      id: 1,
      price: "R$ 100,00",
      priceValue: 100.00,
      acceleration: "5,9 s",
      accelerationLabel: "Aceleração 0-100 Km/h",
      power: "400 CV",
      powerLabel: "Potência Máx"
    },
    {
      id: 2,
      price: "R$ 150,00",
      priceValue: 150.00,
      acceleration: "4,5 s", 
      accelerationLabel: "Aceleração 0-100 Km/h",
      power: "440 CV",
      powerLabel: "Potência Máx"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const setImageIndex = (index) => {
    setCurrentImageIndex(index);
  };

  const calculateTotal = () => {
    const basePrice = 900.00;
    const selectedEngine = engineOptions.find(opt => opt.id === selectedOption);
    const enginePrice = selectedEngine.priceValue;
    return (basePrice + enginePrice).toFixed(2).replace('.', ',');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="container">
      {/* Main Content */}
      <div className="main-content">
        {/* Left Side - Carousel */}
        <div className="carousel-section">
          <div className="carousel-container">
            {/* Image Placeholder */}
            <div className="image-placeholder">
              {carouselImages[currentImageIndex]}
            </div>

            {/* Navigation Arrows */}
            <button className="nav-button prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            
            <button className="nav-button next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>

            {/* 360° Indicator */}
            <div className="indicator-360">360°</div>

            {/* Image Dots */}
            <div className="image-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Configuration */}
        <div className="config-section">
          <div className="config-header">
            <h1 className="config-title">FERRARI 458 ITALIA SPIDER</h1>
            <p className="config-step">Etapa 1 de 4</p>
            <h2 className="config-subtitle">Configuração de Motor</h2>
          </div>

          {/* Engine Options */}
          <div className="options-container">
            {engineOptions.map((option) => (
              <div
                key={option.id}
                className={`option-card ${selectedOption === option.id ? 'selected' : ''}`}
                onClick={() => setSelectedOption(option.id)}
              >
                <div className="option-header">
                  <div className={`radio-button ${selectedOption === option.id ? 'selected' : ''}`}></div>
                  <span className="option-label">Opção {option.id}</span>
                </div>
                
                <div className="option-details">
                  <p className="option-price">{option.price}</p>
                  <p className="option-spec">{option.acceleration}</p>
                  <p className="option-spec-label">{option.accelerationLabel}</p>
                  <p className="option-power">{option.power}</p>
                  <p className="option-spec-label">{option.powerLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <h1 className="bottom-title">FERRARI 458 ITALIA SPIDER</h1>
        
        <div className="bottom-right">
          <div className="price-section">
            <p className="price-label">Preço Total:</p>
            <p className="price-total">R$ {calculateTotal()}</p>
          </div>
          
          <button className="finalize-button">Finalizar</button>
        </div>
      </div>
    </div>
  );
};

export default FerrariConfigurator;