import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Wat is het verschil tussen detailen en een normale wasbeurt?',
    answer:
      'Detailen gaat veel verder dan een normale wasbeurt. Het omvat een grondige reiniging, correctie en bescherming van zowel het interieur als exterieur van uw auto. Bij detailen worden ook kleine imperfecties aangepakt en wordt er veel aandacht besteed aan details die bij een normale wasbeurt worden overgeslagen.',
  },
  {
    question: 'Moet ik mijn auto voor een detailingbeurt voorbereiden?',
    answer:
      'Het is meestal niet nodig om je auto voor te bereiden, maar het kan helpen om het voertuig leeg te maken van persoonlijke spullen, zodat de binnenkant grondig gereinigd kan worden.',
  },
  {
    question: 'Hoe lang duurt een detailingbeurt?',
    answer:
      'Dit hangt af van de omvang van de werkzaamheden. Een standaard detailing kan tussen de 2 en 6 uur duren, terwijl een diepere behandeling, zoals een volledige interieur- en exterieurbehandeling, langer kan duren',
  },
  {
    question: 'Komen jullie ook aan huis of op locatie?',
    answer:
      'Ja, wij bieden een mobiele service aan waarbij we bij u thuis of op een andere locatie naar keuze komen. Hiervoor rekenen we een kleine toeslag afhankelijk van de afstand. Neem contact met ons op voor meer informatie.',
  },
  {
    question: 'Hoe vaak moet ik mijn auto laten detailen?',
    answer:
      'Voor optimale resultaten raden we aan om uw auto elke 3-4 maanden te laten detailen. Als u een glascoating heeft laten aanbrengen, kan dit interval worden verlengd tot 6-12 maanden, afhankelijk van de gebruiksomstandigheden en hoe goed u de auto onderhoudt.',
  },
  {
    question: 'Waarom polijsten en glascoaten?',
    answer:
      'Polijsten verwijdert krassen en oxidatie, waardoor de lak van je auto een diepe glans en frissere kleur krijgt. Dit verbetert de uitstraling en helpt de lak in topconditie te houden Na het polijsten biedt een glas coating een sterke bescherming tegen vuil, UV-stralen en weersinvloeden. Het creëert een duurzame, waterafstotende laag die de lak beschermt en voorkomt dat deze veroudert of beschadigt. Door deze bescherming blijft de waarde van je voertuig behouden, aangezien de lak langer mooi blijft. Polijsten en glas coaten zijn daarom cruciaal voor het behoud van zowel de esthetiek als de waarde van je auto op de lange termijn.',
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze autodetailing
            service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left faq-font">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
