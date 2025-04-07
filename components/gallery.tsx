'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from 'react-compare-slider';

const beforeAfterImages = [
  {
    before: '/images/before-after/image00007.jpeg',
    after: '/images/before-after/image00008.jpeg',
    title: 'Interieur Reiniging',
  },
  {
    before: '/images/before-after/image00012.jpeg',
    after: '/images/before-after/image00013.jpeg',
    title: 'Exterieur Detailing',
  },
  {
    before: '/images/before-after/image00005.jpeg',
    after: '/images/before-after/image00006.jpeg',
    title: 'Polijsten',
  },
];

const galleryImages = [
  {
    src: '/images/DSC_0139.JPEG',
    alt: 'Auto detailing resultaat 1',
  },
  {
    src: '/images/DSC_0438.JPEG',
    alt: 'Auto detailing resultaat 2',
  },
  {
    src: '/images/DSC_0328.JPEG',
    alt: 'Auto detailing resultaat 3',
  },
  {
    src: '/images/DSC_0246.JPEG',
    alt: 'Auto detailing resultaat 4',
  },
  {
    src: '/images/DSC_0412.JPEG',
    alt: 'Auto detailing resultaat 5',
  },
  {
    src: '/images/DSC_0113.JPEG',
    alt: 'Auto detailing resultaat 6',
  },
];

const Gallery = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ons Werk</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bekijk het verschil dat professionele autodetailing kan maken. Sleep
            de slider om het voor en na resultaat te zien.
          </p>
        </div>

        {/* Before/After Comparison Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {beforeAfterImages.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-[300px] w-full">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={image.before}
                      alt="Voor"
                      style={{ objectFit: 'cover' }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={image.after}
                      alt="Na"
                      style={{ objectFit: 'cover' }}
                    />
                  }
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        backdropFilter: 'none',
                        background: 'white',
                        border: 0,
                        color: '#666',
                      }}
                    />
                  }
                  style={{
                    height: '300px',
                    width: '100%',
                  }}
                  className="group"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-center">
                  {image.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Overige foto's</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
