import Hero from '@/components/hero';
import Services from '@/components/services';
import AboutUs from '@/components/about-us';
import Benefits from '@/components/benefits';
import Testimonials from '@/components/testimonials';
import ContactForm from '@/components/contact-form';
import Gallery from '@/components/gallery';
import FAQ from '@/components/faq';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <Benefits />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  );
}
