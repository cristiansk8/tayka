'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CartModal from 'components/cart/modal';
import { Suspense } from 'react';
import { Search, User, ChevronDown } from 'lucide-react';

export default function TaykaNavbar() {
  const [showAgeDropdown, setShowAgeDropdown] = useState(false);
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
    { href: '/', label: 'Inicio' },
    { href: '/search', label: 'Talleres' },
  ];

  const ageCategories = [
    { href: '/search/0-3-años', label: '0-3 años', description: 'Estimulación temprana' },
    { href: '/search/3-6-años', label: '3-6 años', description: 'Preescolar' },
    { href: '/search/6-mas-años', label: '6+ años', description: 'Escolar' },
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
          <div className="flex items-center justify-between h-16">
            {/* Logo - Image with Editorial Minimalism */}
            <Link
              href="/"
              className="flex items-center group relative"
            >
              <div
                className="relative transition-all duration-500 ease-out"
                style={{
                  width: '140px',
                  height: '48px',
                }}
              >
                <Image
                  src="/logo-taika.png"
                  alt="Tayka - Talleres PDF para el Desarrollo Infantil"
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

              {/* Dropdown - Por Edad */}
              <div
                className="relative"
                onMouseEnter={() => setShowAgeDropdown(true)}
                onMouseLeave={() => setShowAgeDropdown(false)}
              >
                <button
                  className="font-inter font-medium text-base transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-md"
                  style={{
                    color: scrolled ? 'var(--white)' : 'var(--text-primary)',
                    background: showAgeDropdown
                      ? (scrolled ? 'rgba(255, 255, 255, 0.15)' : 'var(--warm-sand)')
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!showAgeDropdown) {
                      e.currentTarget.style.background = scrolled ? 'rgba(255, 255, 255, 0.15)' : 'var(--warm-sand)';
                      e.currentTarget.style.color = scrolled ? 'var(--warm-sand)' : 'var(--primary-dark)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!showAgeDropdown) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = scrolled ? 'var(--white)' : 'var(--text-primary)';
                    }
                  }}
                >
                  Por Edad
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${showAgeDropdown ? 'rotate-180' : ''}`}
                    style={{ color: showAgeDropdown && !scrolled ? 'var(--primary-dark)' : 'inherit' }}
                  />
                </button>

                {/* Dropdown Menu */}
                {showAgeDropdown && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 overflow-hidden animate-slideDownFade"
                    style={{
                      background: 'var(--white)',
                      border: '1px solid var(--soft-gray)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    {ageCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-4 py-3 transition-colors duration-200 border-b last:border-b-0"
                        style={{
                          color: 'var(--text-primary)',
                          borderColor: 'var(--soft-gray)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--warm-sand)';
                          e.currentTarget.style.color = 'var(--primary-dark)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                      >
                        <div className="font-inter font-medium text-sm">
                          {category.label}
                        </div>
                        <div
                          className="font-source text-xs mt-1"
                          style={{
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {category.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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

              {/* Mobile Dropdown for Age */}
              <div className="relative">
                <button
                  onClick={() => setShowAgeDropdown(!showAgeDropdown)}
                  className="font-inter font-medium text-sm px-4 py-2 transition-colors duration-300 flex items-center gap-1"
                  style={{
                    color: 'var(--text-primary)',
                    background: showAgeDropdown ? 'var(--off-white)' : 'transparent',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  Por Edad
                  <ChevronDown className={`w-3 h-3 transition-transform ${showAgeDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showAgeDropdown && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 overflow-hidden z-50"
                    style={{
                      background: 'var(--white)',
                      border: '1px solid var(--soft-gray)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    {ageCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-4 py-2 font-inter text-sm border-b last:border-b-0"
                        style={{
                          color: 'var(--text-primary)',
                          borderColor: 'var(--soft-gray)',
                        }}
                        onClick={() => setShowAgeDropdown(false)}
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-16" />
    </>
  );
}
