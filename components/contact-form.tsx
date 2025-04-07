'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PhoneCall, Mail, MapPin, Instagram, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { sendEmail } from '@/app/actions/send-email';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null); // To display feedback message

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [messageText, setMessageText] = useState('');

  // Handle form submission
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // Prevent default form submit

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const messageText = formData.get('message') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;

    setIsSubmitting(true); // Start submission

    try {
      // Call the server-side action
      const result = await sendEmail(name, email, phone, service, messageText);

      if (result.success) {
        setMessage('Email sent successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setService('');
        setMessageText('');
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Neem Contact Op
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen of wilt u een afspraak maken? Vul het onderstaande
            formulier in en wij nemen zo snel mogelijk contact met u op.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-t-4 border-t-primary shadow-lg">
            <CardHeader>
              <CardTitle>Stuur ons een bericht</CardTitle>
              <CardDescription>
                Vul het formulier in en we nemen binnen 24 uur contact met u op.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Uw naam"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="uw@email.nl"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Uw telefoonnummer"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Gewenste Service</Label>
                    <Select value={service} onValueChange={setService} required>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Selecteer een service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="polijsten">
                          Lakcorrectie (Polijsten)
                        </SelectItem>
                        <SelectItem value="glascoating">Glascoating</SelectItem>
                        <SelectItem value="interieur">
                          Interieur Reiniging
                        </SelectItem>
                        <SelectItem value="exterieur">
                          Exterieur Reiniging
                        </SelectItem>
                        <SelectItem value="anders">
                          Anders / Weet ik niet
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Vertel ons over uw auto en wensen..."
                    rows={4}
                    required
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <span className="font-bold">LET OP:</span> Voor wassen
                        op locatie is een goede water- en stroomaansluiting in
                        de buurt van het voertuig essentieel! Twijfelt u of uw
                        water- of stroomaansluiting goed/bereikbaar is? Neem
                        gerust contact met ons op via WhatsApp of e-mail.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Informatie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <PhoneCall className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Telefoon</h3>
                    <p>06-12402936</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <p>info@edensautodetailing.nl</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Werkgebied</h3>
                    <p>Amsterdam en omgeving</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Instagram</h3>
                    <Link
                      href="https://www.instagram.com/edensautodetailingnl"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @edensautodetailingnl
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Onze Unieke Voordelen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                    <span>Gratis inspectie en advies vooraf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                    <span>Gebruik van hoogwaardige producten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                    <span>Ervaren en professionele medewerkers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        {message && <p className="text-center mt-4 text-xl">{message}</p>}{' '}
        {/* Feedback message */}
      </div>
    </section>
  );
};

export default ContactForm;
