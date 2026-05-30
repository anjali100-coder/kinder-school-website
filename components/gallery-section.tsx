import React from 'react';

export function GallerySection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1580582932707-5289ed627546?q=80&w=800", title: "School Campus" },
    { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800", title: "Classroom Fun" },
    { src: "https://images.unsplash.com/photo-1509062522246-37ed59775024?q=80&w=800", title: "Creative Learning" }
  ];

  return (
    <section style={{ padding: '40px 20px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', color: '#1e3a8a', marginBottom: '30px' }}>Our Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {images.map((img, index) => (
          <div key={index} style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <img 
              src={img.src} 
              alt={img.title} 
              style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '15px', textAlign: 'center', background: 'white' }}>
              <h3 style={{ margin: '0', color: '#1e3a8a' }}>{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}