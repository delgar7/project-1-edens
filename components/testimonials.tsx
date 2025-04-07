'use client';
import { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-10 text-center bg-muted py-16 md:py-24">
      <h2 className="text-3xl font-bold mb-6">Wat Klanten Zeggen</h2>
      <div
        className="elfsight-app-0a41bd6c-4e01-41d3-825d-03be9b44ca89"
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default GoogleReviews;
