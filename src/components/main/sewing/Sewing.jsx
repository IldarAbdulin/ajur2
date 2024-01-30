import React from 'react';

export default function Sewing({ svg, p }) {
  return (
    <div className="sewing-item">
      {svg}
      <p>{p}</p>
    </div>
  );
}
