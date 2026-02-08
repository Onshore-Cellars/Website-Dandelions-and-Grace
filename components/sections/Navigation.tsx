"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "../ui/Container";

const navigation = [
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "Weddings", href: "/services/weddings" },
      { name: "Yacht Floristry", href: "/services/yacht-floristry" },
      { name: "Corporate Events", href: "/services/corporate-events" },
      { name: "Private Parties", href: "/services/private-parties" },
      { name: "Seasonal & Festive", href: "/services/seasonal" },
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-display tracking-tight text-stone-900 hover:text-stone-700 transition-colors"
          >
            Dandelions & Grace
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-stone-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-base text-stone-700 hover:text-stone-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-2 text-sm text-stone-600 hover:text-stone-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
};
