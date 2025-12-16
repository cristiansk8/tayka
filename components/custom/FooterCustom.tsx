'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail } from "lucide-react";
import { newsletterSchema } from '@/lib/validations/forms';
import { toast } from 'sonner';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación con Zod
    const result = newsletterSchema.safeParse({ email });

    if (!result.success) {
      const errorMessage = result.error.issues[0]?.message || 'Error de validación';
      toast.error(errorMessage);
      return;
    }

    setIsSubmitting(true);

    // TODO: Integrar con servicio de email marketing
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('¡Gracias por suscribirte! Recibirás noticias sobre nuestros talleres.');
      setEmail('');
    }, 1200);
  };

  return (
    <footer
      style={{
        background: 'var(--navy-blue)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div
              className="font-nunito font-semibold text-3xl mb-4"
              style={{
                color: 'var(--warm-cream)',
              }}
            >
              Tayka
            </div>
            <p
              className="font-source text-sm leading-relaxed mb-6"
              style={{
                color: 'var(--warm-cream)',
                opacity: 0.8,
              }}
            >
              Talleres PDF para el desarrollo infantil. Recursos profesionales para padres, educadores y cuidadores.
            </p>
          </div>

          {/* Talleres */}
          <div>
            <h4
              className="font-inter font-semibold text-base mb-6"
              style={{
                color: 'var(--warm-cream)',
              }}
            >
              Talleres
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/search/0-3-años"
                  className="font-source text-sm transition-colors duration-200"
                  style={{
                    color: 'var(--warm-cream)',
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--mint-green)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--warm-cream)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  0-3 años
                </Link>
              </li>
              <li>
                <Link
                  href="/search/3-6-años"
                  className="font-source text-sm transition-colors duration-200"
                  style={{
                    color: 'var(--warm-cream)',
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--mint-green)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--warm-cream)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  3-6 años
                </Link>
              </li>
              <li>
                <Link
                  href="/search/6-mas-años"
                  className="font-source text-sm transition-colors duration-200"
                  style={{
                    color: 'var(--warm-cream)',
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--mint-green)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--warm-cream)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  6+ años
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="font-source text-sm transition-colors duration-200"
                  style={{
                    color: 'var(--warm-cream)',
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--mint-green)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--warm-cream)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  Ver todos
                </Link>
              </li>
            </ul>
          </div>

          {/* Soporte & Legal */}
          <div>
            <h4
              className="font-inter font-semibold text-base mb-6"
              style={{
                color: 'var(--warm-cream)',
              }}
            >
              Soporte y Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terminos-del-servicio"
                  className="font-source text-sm transition-colors duration-200"
                  style={{
                    color: 'var(--warm-cream)',
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--mint-green)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--warm-cream)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  Términos del servicio
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-proteccion-datos"
                  className="font-source text-sm transition-colors duration-200"
                  style={{
                    color: 'var(--warm-cream)',
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--mint-green)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--warm-cream)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-reembolso"
                  className="font-source text-sm transition-colors duration-200"
                  style={{
                    color: 'var(--warm-cream)',
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--mint-green)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--warm-cream)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  Reembolsos
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="font-source text-sm transition-colors duration-200"
                  style={{
                    color: 'var(--warm-cream)',
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--mint-green)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--warm-cream)';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="font-inter font-semibold text-base mb-6"
              style={{
                color: 'var(--warm-cream)',
              }}
            >
              Newsletter
            </h4>
            <p
              className="font-source text-sm mb-4 leading-relaxed"
              style={{
                color: 'var(--warm-cream)',
                opacity: 0.8,
              }}
            >
              Recibe novedades sobre nuevos talleres y descuentos exclusivos.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="font-source px-4 py-2 rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 transition-all"
                  style={{
                    background: 'rgba(255, 248, 231, 0.1)',
                    color: 'var(--warm-cream)',
                    border: '1px solid rgba(255, 248, 231, 0.3)',
                  }}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-inter font-medium px-4 py-2 rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'var(--calm-blue)',
                    color: 'white',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = 'var(--mint-green)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--calm-blue)';
                  }}
                >
                  {isSubmitting ? 'Suscribiendo...' : 'Suscribirse'}
                </button>
              </div>
            </form>
            <div className="flex items-center space-x-2">
              <Mail
                className="h-4 w-4 flex-shrink-0"
                style={{
                  color: 'var(--warm-cream)',
                  opacity: 0.6,
                }}
              />
              <a
                href="mailto:contacto@tayka.com"
                className="font-source text-sm transition-colors duration-200"
                style={{
                  color: 'var(--warm-cream)',
                  opacity: 0.7,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--mint-green)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--warm-cream)';
                  e.currentTarget.style.opacity = '0.7';
                }}
              >
                contacto@tayka.com
              </a>
            </div>
          </div>
        </div>

        <hr
          className="mb-8"
          style={{
            borderColor: 'rgba(255, 248, 231, 0.2)',
          }}
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p
              className="font-source text-xs"
              style={{
                color: 'var(--warm-cream)',
                opacity: 0.6,
              }}
            >
              © {new Date().getFullYear()} Tayka. Talleres educativos PDF.
            </p>
            <span
              className="font-source text-xs"
              style={{
                color: 'var(--warm-cream)',
                opacity: 0.6,
              }}
            >
              Colombia (COP $)
            </span>
          </div>
          <p
            className="font-source text-xs"
            style={{
              color: 'var(--warm-cream)',
              opacity: 0.5,
            }}
          >
            Productos digitales • Descarga inmediata
          </p>
        </div>
      </div>
    </footer>
  );
}
