import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { styles } from './Styles';
import { images } from './imageData';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Stunning Moments</h1>
        <p className={styles.subtitle}>
          Explore our curated collection of breathtaking photographs
        </p>
      </header>

      {/* Filter Buttons */}
      <div className={styles.filterContainer}>
        {['all', 'nature', 'architecture'].map((category) => (
          <button 
            key={category}
            onClick={() => setFilter(category)}
            className={styles.filterButton(filter === category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className={styles.gallery}>
        {filteredImages.map((image, index) => (
          <div 
            key={image.id} 
            className={styles.imageCard}
            onClick={() => openModal(image, index)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className={styles.image}
            />
            <div className={styles.imageOverlay}>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
              <div className={styles.imageInfo}>
                <h3 className={styles.imageTitle}>{image.title}</h3>
                <p className={styles.imageDescription}>{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            {/* Modal content */}
            {/* ... rest of your modal code ... */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;