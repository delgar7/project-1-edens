import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/DSC_0161.JPEG')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <span className="text-lg uppercase tracking-widest text-white/80 mb-2">
          Welkom bij Edens Auto Detailing
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Premium Auto Detailing
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Geef uw auto de zorg die hij verdient! Plan vandaag nog uw exclusieve
          auto detailing behandeling in.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="text-lg bg-white hover:bg-gray-100 text-gray-900 shadow-lg transition-all duration-300 transform hover:scale-105 font-medium group"
          >
            <Link href="/#diensten" className="flex items-center gap-2">
              Onze Diensten
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="text-lg bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 hover:from-zinc-800 hover:via-zinc-700 hover:to-zinc-800 text-white border border-zinc-700 shadow-lg shadow-black/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-zinc-600 group"
          >
            <a
              href="https://edensautodetailing.zohobookings.eu/#/edensautodetailing"
              target="_blank"
              className="flex items-center gap-2"
            >
              Afspraak Maken
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
