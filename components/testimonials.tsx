'use client';

import { useEffect } from 'react';
import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';

const GoogleReviews = () => {
  const featurableWidgetId = 'f6d1de90-3fba-489c-9c18-f053f975cdbd';

  useEffect(() => {
    console.log('ReactGoogleReviews mounted');
  }, []);

  return (
    <div className="my-10 text-center bg-muted py-16 md:py-24">
      <h2 className="text-3xl font-bold mb-6">Wat Klanten Zeggen</h2>
      <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
    </div>
  );
};

export default GoogleReviews;
