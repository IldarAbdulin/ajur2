import React from 'react';

export default function HeaderSwiper({ img, alt, h2, p1, p2 }) {
  return (
    <>
      {' '}
      <div className="swiper-image">
        <div className="swiper-shadow"> </div>
        <img src={img} alt={alt} />
      </div>
      <div className="swiper-title">
        <h2>{h2}</h2>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </>
  );
}
