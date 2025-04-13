'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Diensten', href: '/#diensten' },
    { name: 'Over Ons', href: '/#over-ons' },
    { name: 'Waarom detailen', href: '/#voordelen' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src="/edens-logo.webp"
                alt="Edens Auto Detailing Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary/90 to-primary text-transparent bg-clip-text">
                Professionele
              </span>
              <span className="text-sm font-medium text-gray-600 tracking-wider">
                AUTO DETAILING
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-600 transition-colors hover:text-primary hover:underline hover:underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <a
              href="https://edensautodetailing.zohobookings.eu/#/edensautodetailing"
              target="_blank"
              className="text-white bg-primary px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-primary-dark transition-all"
            >
              Afspraak Maken
            </a>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    Afspraak Maken
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
