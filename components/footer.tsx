import Link from 'next/link';
import { PhoneCall, Mail, MapPin, Instagram, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6" />
              <h3 className="text-xl font-bold">Edens Auto Detailing</h3>
            </div>
            <p className="mb-4">
              Professionele autodetailing service voor een stralende en
              beschermde auto. Wij zorgen ervoor dat uw auto er weer als nieuw
              uitziet!
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.instagram.com/edensautodetailingnl?igsh=OTczNDBwYmFzbXR4&utm_source=qr"
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 flex-shrink-0" />
                <span>
                  <a href="tel:+31612402936">06-12402936</a>
                </span>
              </li>
              <li className="flex items-center gap-2 hover:underline">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>
                  <a href="mailto:info@edensautodetailing.nl">
                    info@edensautodetailing.nl
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Regio Amsterdam</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#diensten" className="hover:underline">
                  Onze Diensten
                </Link>
              </li>
              <li>
                <Link href="/#over-ons" className="hover:underline">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/#voordelen" className="hover:underline">
                  Waarom Edens Auto Detailing?
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>
            © {new Date().getFullYear()} Edens Auto Detailing. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
