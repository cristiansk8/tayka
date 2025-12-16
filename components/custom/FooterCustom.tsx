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
        background: 'var(--primary-dark)',
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
                color: 'var(--white)',
              }}
            >
              Tayka
            </div>
            <p
              className="font-source text-sm leading-relaxed mb-6"
              style={{
                color: 'var(--white)',
                opacity: 0.75,
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
                color: 'var(--white)',
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
                    color: 'var(--white)',
                    opacity: 0.65,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--warm-sand)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.opacity = '0.65';
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
                    color: 'var(--white)',
                    opacity: 0.65,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--warm-sand)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.opacity = '0.65';
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
                    color: 'var(--white)',
                    opacity: 0.65,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--warm-sand)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.opacity = '0.65';
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
                    color: 'var(--white)',
                    opacity: 0.65,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--warm-sand)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.opacity = '0.65';
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
                color: 'var(--white)',
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
                    color: 'var(--white)',
                    opacity: 0.65,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--warm-sand)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.opacity = '0.65';
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
                    color: 'var(--white)',
                    opacity: 0.65,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--warm-sand)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.opacity = '0.65';
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
                    color: 'var(--white)',
                    opacity: 0.65,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--warm-sand)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.opacity = '0.65';
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
                    color: 'var(--white)',
                    opacity: 0.65,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--warm-sand)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.opacity = '0.65';
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
                color: 'var(--white)',
              }}
            >
              Newsletter
            </h4>
            <p
              className="font-source text-sm mb-4 leading-relaxed"
              style={{
                color: 'var(--white)',
                opacity: 0.75,
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
                  className="font-source px-4 py-2 focus:outline-none focus:ring-2 disabled:opacity-50 transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'var(--white)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 'var(--radius-md)',
                  }}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-inter font-medium px-4 py-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'var(--secondary-blue)',
                    color: 'white',
                    borderRadius: 'var(--radius-md)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = 'var(--sage-green)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--secondary-blue)';
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
                  color: 'var(--white)',
                  opacity: 0.5,
                }}
              />
              <a
                href="mailto:contacto@tayka.com"
                className="font-source text-sm transition-colors duration-200"
                style={{
                  color: 'var(--white)',
                  opacity: 0.65,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--warm-sand)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--white)';
                  e.currentTarget.style.opacity = '0.65';
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
            borderColor: 'rgba(255, 255, 255, 0.15)',
          }}
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p
              className="font-source text-xs"
              style={{
                color: 'var(--white)',
                opacity: 0.5,
              }}
            >
              © {new Date().getFullYear()} Tayka. Talleres educativos PDF.
            </p>
            <span
              className="font-source text-xs"
              style={{
                color: 'var(--white)',
                opacity: 0.5,
              }}
            >
              Colombia (COP $)
            </span>
          </div>
          <p
            className="font-source text-xs"
            style={{
              color: 'var(--white)',
              opacity: 0.4,
            }}
          >
            Productos digitales - Descarga inmediata
          </p>
        </div>
      </div>
    </footer>
  );
}
