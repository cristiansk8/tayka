'use client';

import Link from 'next/link';

export default function CTAButton() {
  return (
    <Link
      href="/search"
      className="inline-block font-inter text-lg font-semibold px-10 py-5 transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, var(--warm-sand) 0%, #D4C4A8 100%)',
        color: 'var(--primary-dark)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 4px 12px rgba(230, 213, 184, 0.4)',
        letterSpacing: '0.3px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(230, 213, 184, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(230, 213, 184, 0.4)';
      }}
    >
      Browse Workshops →
    </Link>
  );
}
