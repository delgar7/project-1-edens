'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Car,
  SprayCan,
  Shield,
  Sparkles,
  Check,
  Info,
  CarFront,
  Truck,
  Sun as Suv,
} from 'lucide-react';
import Link from 'next/link';

const mainServices = [
  {
    title: 'Interieur Reiniging',
    description: 'Professionele interieur behandeling',
    price: '€69,95',
    features: [
      'Volledig uitzuigen auto (excl. hondenharen)',
      'Dashboard reinigen',
      'Stuur reinigen',
      'Deurpanelen & instaplijsten reinigen',
      'Dashboard UV en stofwerende bescherming',
      'Stoelen stofzuigen',
      'Matten reinigen',
      'Binnenzijde ramen reinigen',
      'Lichte vlekken verwijderen',
    ],
    image: '/images/DSC_0438.JPEG',
    icon: SprayCan,
    bookingUrl:
      'https://edensautodetailing.zohobookings.eu/#/edensautodetailing',
  },
  {
    title: 'Complete Behandeling',
    subtitle: 'Interieur + Exterieur',
    description: 'De ultieme verzorging voor uw auto, binnen én buiten',
    price: '€119,95',
    originalPrice: '€129,90',
    features: [
      'Korting op combideal!',
      'Alles van Interieur Reiniging',
      'Alles van Exterieur Reiniging',
      'Meest complete behandeling',
      'Rij weer met een geweldig gevoel in uw auto!',
    ],
    image: '/images/DSC_0142.JPEG',
    icon: Shield,
    bookingUrl:
      'https://edensautodetailing.zohobookings.eu/#/edensautodetailing',
    popular: true,
  },
  {
    title: 'Exterieur Reiniging',
    description: 'Professionele behandeling voor een stralende buitenkant',
    price: '€59,95',
    features: [
      'Voorwassen',
      'Hand wassen met premium shampoo',
      'Decontaminatie lak',
      'Wielkasten reinigen',
      'Tankdopruimte reinigen',
      'Buitenzijde ramen & raamrubbers',
      'Velgen reinigen',
      'Banden reinigen',
      'Banden glans',
      '3 maanden lakbescherming',
    ],
    image: '/images/DSC_0198.JPEG',
    icon: Car,
    bookingUrl:
      'https://edensautodetailing.zohobookings.eu/#/edensautodetailing',
  },
];

const premiumServices = [
  {
    title: 'Lakcorrectie (Polijsten)',
    description:
      'Professionele lakcorrectie voor het verwijderen van krassen en swirls',
    price: 'Op aanvraag',
    icon: Sparkles,
    contactLink: true,
  },
  {
    title: 'Glascoating',
    description: 'Langdurige bescherming met premium keramische coating',
    price: 'Op aanvraag',
    icon: Shield,
    contactLink: true,
  },
];

const extraServices = [
  {
    title: 'Leer Voeden',
    price: 'vanaf €30',
  },
  {
    title: 'Langdurige Waxlaag',
    price: 'vanaf €50',
  },
  {
    title: 'Hardnekkige Vlekken',
    price: 'op aanvraag',
  },
  {
    title: 'Motorruimte Reinigen',
    price: '€40',
  },
  {
    title: 'Hondenharen Verwijderen',
    price: 'vanaf €35',
  },
];

const vehicleSizes = [
  {
    type: "Middelgrote auto's",
    examples: 'Mercedes A-Klasse, Audi A3, BMW 1-serie',
    price: '+€10',
    icon: Car,
  },
  {
    type: "Grote SUV's / Luxe auto's",
    examples: 'Mercedes G-Wagon, BMW X5, Porsche Cayenne',
    price: '+€20',
    icon: CarFront,
  },
  {
    type: 'Bestelwagens / Campers',
    examples: 'Mercedes Vito, Ford Transit, VW Transporter',
    price: '+€30',
    icon: Truck,
  },
];

const Services = () => {
  return (
    <section id="diensten" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Diensten</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionele autodetailing op het hoogste niveau
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col ${
                service.popular
                  ? 'ring-2 ring-primary shadow-lg scale-[1.02] hover:scale-[1.04]'
                  : 'hover:scale-[1.02]'
              }`}
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`p-2 rounded-full ${
                        service.popular ? 'bg-primary' : 'bg-white/20'
                      }`}
                    >
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold leading-tight">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="text-white/90 font-medium">
                          {service.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-white/80">{service.description}</p>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Vanaf</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">
                        {service.price}
                      </span>
                      {service.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {service.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className={`border-2 shadow-lg px-6 py-3 transition-all ${
                      service.popular
                        ? 'border-primary text-primary font-semibold bg-transparent hover:bg-primary hover:text-white'
                        : 'bg-secondary text-secondary-foreground border-2 border-secondary-500 hover:bg-secondary-700 hover:text-secondary-foreground hover:border-secondary-700'
                    }`}
                  >
                    <Link href={service.bookingUrl} target="_blank">
                      {service.popular ? 'Direct Reserveren' : 'Reserveren'}
                    </Link>
                  </Button>
                </div>

                <div className="flex-1">
                  <div
                    className={`${
                      service.popular
                        ? 'bg-primary/5 rounded-lg p-4 border border-primary/10'
                        : ''
                    }`}
                  >
                    {!service.popular && (
                      <p className="font-medium mb-3">Inbegrepen services:</p>
                    )}
                    <ul
                      className={`grid gap-2 ${
                        service.popular ? 'space-y-3' : ''
                      }`}
                    >
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div
                            className={`rounded-full p-1 ${
                              service.popular ? 'bg-primary/10' : 'bg-secondary'
                            } ${!service.popular ? 'mt-0.5' : ''}`}
                          >
                            <Check
                              className={`h-3 w-3 ${
                                service.popular
                                  ? 'text-primary'
                                  : 'text-secondary-foreground'
                              }`}
                            />
                          </div>
                          <span
                            className={
                              service.popular ? 'font-medium' : 'text-sm'
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vehicle Size Notice */}
        <div className="mb-16 bg-card/50 border rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground/95">
                  De bovenstaande prijzen zijn gebaseerd op een voertuig met
                  normale vervuiling. Omdat elk voertuig anders is, kan de
                  uiteindelijke prijs variëren afhankelijk van de
                  vervuilingsgraad. Voor afspraken buiten Amsterdam-West rekenen
                  wij een voorrijkost van €0,30 per kilometer.
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-3">
                    Toeslag per voertuigtype:
                  </p>
                  <div className="grid gap-2">
                    {vehicleSizes.map((vehicle, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm"
                      >
                        <vehicle.icon className="h-4 w-4 text-primary/70" />
                        <span className="font-medium">{vehicle.price}</span>
                        <span className="text-muted-foreground">
                          {vehicle.type}{' '}
                          <span className="text-muted-foreground/70">
                            ({vehicle.examples})
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Services */}
        <div className="bg-card rounded-lg p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold mb-6">Premium Diensten</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {premiumServices.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">{service.title}</h4>
                  <p className="text-muted-foreground/95 mb-2">
                    {service.description}
                  </p>
                  <p className="font-medium mb-3">{service.price}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-zinc-100 border-zinc-300"
                  >
                    <Link href="/#contact">Vraag Offerte Aan</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Services */}
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Extra Opties</h3>
          <p className="text-muted-foreground/95 mb-6">
            Deze extra services kunt u selecteren tijdens het boeken van een
            hoofdbehandeling:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {extraServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted rounded-lg"
              >
                <span className="font-medium">{service.title}</span>
                <span className="text-primary font-bold">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
