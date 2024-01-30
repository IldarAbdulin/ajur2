import React from 'react';

export default function ParallaxEffect({ image, alt }) {
  return (
    <div className="parallax-item">
      <img src={image} alt={alt} />
    </div>
  );
}
