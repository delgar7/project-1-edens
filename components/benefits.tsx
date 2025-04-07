import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Clock, Sparkles, ThumbsUp, Droplets, Banknote } from "lucide-react"

const benefits = [
  {
    title: "Langdurige Bescherming",
    description: "Onze behandelingen bieden langdurige bescherming tegen vuil, UV-straling en oxidatie.",
    icon: ShieldCheck,
  },
  {
    title: "Tijdsbesparing",
    description: "Laat het werk aan ons over en besteed uw kostbare tijd aan andere zaken.",
    icon: Clock,
  },
  {
    title: "Verhoogde Waarde",
    description: "Een goed onderhouden auto behoudt zijn waarde beter en is makkelijker te verkopen.",
    icon: Banknote,
  },
  {
    title: "Professionele Resultaten",
    description: "Onze expertise en professionele producten zorgen voor resultaten die u zelf niet kunt bereiken.",
    icon: ThumbsUp,
  },
  {
    title: "Dieptereiniging",
    description: "We reinigen ook op plekken die bij een normale wasbeurt worden overgeslagen.",
    icon: Droplets,
  },
  {
    title: "Showroom Glans",
    description: "Geef uw auto die showroom glans terug en laat hem er weer als nieuw uitzien.",
    icon: Sparkles,
  },
]

const Benefits = () => {
  return (
    <section id="voordelen" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Waarom Uw Auto Laten Detailen?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Een professionele detailbehandeling biedt veel meer voordelen dan alleen een schone auto.
            Ontdek waarom u zou moeten kiezen voor een professionele detailer in plaats van de wasstraat.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full border-t-4 border-t-primary/20 hover:border-t-primary transition-colors duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-card rounded-lg p-6 md:p-8 border shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Waarom een Professionele Detailer in plaats van de Wasstraat?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">De Wasstraat:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Gebruikt harde borstels die microscopische krassen veroorzaken</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Gebruikt agressieve chemicaliën die de lak kunnen beschadigen</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Reinigt oppervlakkig en mist veel details</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Biedt geen langdurige bescherming</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Professionele Detailer:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Handmatige reiniging met zachte materialen die de lak beschermen</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gebruikt hoogwaardige producten specifiek voor uw type auto</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Grondige reiniging van alle details, binnen en buiten</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Biedt langdurige bescherming met wax of keramische coating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits