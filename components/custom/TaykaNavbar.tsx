'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CartModal from 'components/cart/modal';
import { Suspense } from 'react';
import { Search, User } from 'lucide-react';

export default function TaykaNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Professional navigation - adult focused
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Workshops' },
  ];

  return (
    <>
      {/* Professional Navigation Bar - Editorial Minimalism with Scroll Effects */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-blue) 100%)'
            : 'var(--white)',
          borderBottom: scrolled ? 'none' : '1px solid var(--soft-gray)',
          boxShadow: scrolled ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Image with Editorial Minimalism */}
            <Link
              href="/"
              className="flex items-center group relative"
            >
              <div
                className="relative transition-all duration-500 ease-out"
                style={{
                  width: '280px',
                  height: '96px',
                }}
              >
                <Image
                  src="/logo-taika.png"
                  alt="Tayka - PDF Workshops for Child Development"
                  fill
                  className="object-contain transition-all duration-500"
                  style={{
                    filter: scrolled
                      ? 'brightness(0) invert(1)'
                      : 'none',
                    opacity: 1,
                  }}
                  priority
                />
              </div>
            </Link>

            {/* Main Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-inter font-medium text-base transition-all duration-300 relative group px-3 py-2 rounded-md"
                  style={{
                    color: scrolled ? 'var(--white)' : 'var(--text-primary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = scrolled ? 'rgba(255, 255, 255, 0.15)' : 'var(--warm-sand)';
                    e.currentTarget.style.color = scrolled ? 'var(--warm-sand)' : 'var(--primary-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = scrolled ? 'var(--white)' : 'var(--text-primary)';
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Actions - Icons Only */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <Link
                href="/search"
                className="p-2 transition-all duration-300 rounded-md"
                aria-label="Buscar talleres"
                style={{
                  color: scrolled ? 'var(--white)' : 'var(--text-primary)',
                  borderRadius: 'var(--radius-md)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = scrolled ? 'rgba(255, 255, 255, 0.2)' : 'var(--sage-green)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Search className="h-5 w-5" />
              </Link>

              {/* Account */}
              <Link
                href="/account"
                className="p-2 transition-all duration-300 rounded-md"
                aria-label="Mi cuenta"
                style={{
                  color: scrolled ? 'var(--white)' : 'var(--text-primary)',
                  borderRadius: 'var(--radius-md)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = scrolled ? 'rgba(255, 255, 255, 0.2)' : 'var(--secondary-blue)';
                  e.currentTarget.style.color = 'var(--white)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = scrolled ? 'var(--white)' : 'var(--text-primary)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <User className="h-5 w-5" />
              </Link>

              {/* Cart */}
              <div className="[&_svg]:h-5 [&_svg]:w-5" style={{ color: scrolled ? 'var(--white)' : 'var(--text-primary)' }}>
                <Suspense fallback={null}>
                  <CartModal />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-4 pt-2">
            <div className="flex items-center justify-around gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-inter font-medium text-sm px-4 py-2 transition-colors duration-300"
                  style={{
                    color: 'var(--text-primary)',
                    background: 'transparent',
                    borderRadius: 'var(--radius-md)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--off-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-24" />
    </>
  );
}
