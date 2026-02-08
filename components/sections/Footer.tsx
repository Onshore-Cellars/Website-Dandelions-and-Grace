import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { Container } from "../ui/Container";

const locations = [
  "Cannes",
  "Monaco",
  "Antibes",
  "Nice",
  "Saint-Tropez",
  "Mougins",
];

const services = [
  { name: "Weddings", href: "/services/weddings" },
  { name: "Yacht Floristry", href: "/services/yacht-floristry" },
  { name: "Corporate Events", href: "/services/corporate-events" },
  { name: "Private Parties", href: "/services/private-parties" },
];

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-display text-white mb-4">
                Dandelions & Grace
              </h3>
              <p className="text-sm leading-relaxed mb-6">
                Luxury floral design for weddings, yachts, and events in the South of France.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/dandelionsandgrace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info@dandelionsandgrace.fr"
                  className="hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="tel:+33000000000"
                  className="hover:text-white transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">
                Services
              </h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">
                Serving
              </h4>
              <ul className="space-y-2">
                {locations.map((location) => (
                  <li key={location}>
                    <Link
                      href={`/locations/${location.toLowerCase()}`}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {location}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">
                Get in Touch
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:info@dandelionsandgrace.fr"
                    className="hover:text-white transition-colors"
                  >
                    info@dandelionsandgrace.fr
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+33000000000"
                    className="hover:text-white transition-colors"
                  >
                    +33 (0) 00 00 00 00
                  </a>
                </li>
                <li className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 bg-white text-stone-900 hover:bg-stone-100 transition-colors"
                  >
                    Enquire Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {new Date().getFullYear()} Dandelions & Grace. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
