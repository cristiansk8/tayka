'use client';

import Link from 'next/link';

export default function CTAButton() {
  return (
    <Link
      href="/search"
      className="inline-block font-inter text-lg font-semibold px-10 py-5 transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, #4A6FA5 0%, #8FAAD1 100%)',
        color: 'white',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 4px 12px rgba(74, 111, 165, 0.4)',
        letterSpacing: '0.3px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(74, 111, 165, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 111, 165, 0.4)';
      }}
    >
      Browse Workshops →
    </Link>
  );
}
