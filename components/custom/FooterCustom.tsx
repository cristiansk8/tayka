'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail } from "lucide-react";

export default function Footer() {

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-blue) 100%)',
        borderTop: '3px solid var(--warm-sand)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <div className="relative mb-4" style={{ width: '140px', height: '48px' }}>
              <Image
                src="/logo-taika.png"
                alt="Tayka"
                fill
                className="object-contain"
                style={{
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.95,
                }}
              />
            </div>
            <p
              className="font-source text-sm leading-relaxed"
              style={{
                color: 'var(--white)',
                opacity: 0.85,
              }}
            >
              Talleres PDF profesionales para el desarrollo infantil
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4
              className="font-inter font-semibold text-sm mb-4"
              style={{
                color: 'var(--warm-sand)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Talleres
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/search/0-3-años', label: '0-3 años' },
                { href: '/search/3-6-años', label: '3-6 años' },
                { href: '/search/6-mas-años', label: '6+ años' },
                { href: '/search', label: 'Ver todos' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-source text-sm transition-all duration-200 inline-block"
                    style={{
                      color: 'var(--white)',
                      opacity: 0.75,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--warm-sand)';
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--white)';
                      e.currentTarget.style.opacity = '0.75';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4
              className="font-inter font-semibold text-sm mb-4"
              style={{
                color: 'var(--warm-sand)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/terminos-del-servicio', label: 'Términos' },
                { href: '/politica-proteccion-datos', label: 'Privacidad' },
                { href: '/politica-reembolso', label: 'Reembolsos' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-source text-sm transition-all duration-200 inline-block"
                    style={{
                      color: 'var(--white)',
                      opacity: 0.75,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--warm-sand)';
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--white)';
                      e.currentTarget.style.opacity = '0.75';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="mailto:contacto@tayka.com"
                className="font-source text-sm transition-all duration-200 flex items-center gap-2"
                style={{
                  color: 'var(--white)',
                  opacity: 0.75,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--warm-sand)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--white)';
                  e.currentTarget.style.opacity = '0.75';
                }}
              >
                <Mail className="h-4 w-4" />
                contacto@tayka.com
              </a>
            </div>
          </div>
        </div>

        <hr
          className="my-6"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.2)',
          }}
        />

        {/* Bottom Footer - Simplified */}
        <div className="text-center">
          <p
            className="font-source text-sm"
            style={{
              color: 'var(--white)',
              opacity: 0.7,
            }}
          >
            © {new Date().getFullYear()} Tayka · Talleres PDF para el Desarrollo Infantil · Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
