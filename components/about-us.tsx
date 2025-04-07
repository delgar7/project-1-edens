import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section id="over-ons" className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/DSC_0146.JPEG"
              alt="Auto detailing"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Over Edens Auto Detailing
            </h2>
            <p className="text-lg mb-5">
              Edens Auto Detailing is in januari 2024 opgericht door Tim Edens,
              een autoliefhebber in hart en nieren. Van jongs af aan had ik een
              fascinatie voor auto's, wat uiteindelijk leidde tot het combineren
              van mijn passie met ondernemerschap.
            </p>
            <p className="text-lg mb-5">
              Mijn perfectionisme en oog voor detail zorgen ervoor dat elke auto
              de aandacht krijgt die het verdient. Ik geloof in vakmanschap en
              werk met precisie om voertuigen in topconditie te brengen.
              Daarnaast gebruik ik zoveel mogelijk milieuvriendelijke producten,
              omdat kwaliteit en duurzaamheid hand in hand gaan.
            </p>
            <p className="text-lg mb-6">
              Wat mij het meest motiveert? Een volledige A-Z behandeling. Van
              interieur- en exterieurreiniging tot polijsten en het aanbrengen
              van een glascoating—het complete plaatje. Dat is waar ik het meest
              van geniet en waar Edens Auto Detailing voor staat: Kwaliteit,
              Passie en in Detail.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">
                    Vakmanschap tot in het kleinste detail
                  </h3>
                  <p className="text-muted-foreground">
                    Ik werk met passie en precisie om uw auto weer in de best
                    mogelijke staat te brengen. Geen standaard wasbeurt, maar
                    maatwerk.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Persoonlijke aanpak</h3>
                  <p className="text-muted-foreground">
                    Samen bepalen we de juiste verzorging voor uw auto, met
                    eerlijk advies en de beste oplossing voor optimaal
                    resultaat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <svg
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Klanttevredenheid voorop</h3>
                  <p className="text-muted-foreground">
                    Mijn doel is pas bereikt als u 100% tevreden bent met het
                    eindresultaat.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="mt-8">
              <Link href="/#contact">Neem Contact Op</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
