'use client';
import Link from 'next/link';
import { useState } from 'react';
import CartModal from 'components/cart/modal';
import { Suspense } from 'react';
import { Search, User, ChevronDown } from 'lucide-react';

export default function TaykaNavbar() {
  const [showAgeDropdown, setShowAgeDropdown] = useState(false);

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
      {/* Professional Navigation Bar - Discovery Kids Inspired */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 shadow-sm"
        style={{
          background: 'var(--warm-cream)',
          borderBottom: '1px solid rgba(91, 143, 163, 0.15)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Nunito SemiBold, Text Only */}
            <Link
              href="/"
              className="flex items-center group"
            >
              <div
                className="font-nunito font-semibold text-3xl tracking-tight transition-colors duration-300"
                style={{
                  color: 'var(--calm-blue)',
                }}
              >
                Tayka
              </div>
            </Link>

            {/* Main Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-inter font-medium text-base transition-all duration-300 relative group"
                  style={{
                    color: 'var(--navy-blue)',
                  }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{
                      background: 'var(--butter-yellow)',
                    }}
                  />
                </Link>
              ))}

              {/* Dropdown - Por Edad */}
              <div
                className="relative"
                onMouseEnter={() => setShowAgeDropdown(true)}
                onMouseLeave={() => setShowAgeDropdown(false)}
              >
                <button
                  className="font-inter font-medium text-base transition-all duration-300 flex items-center gap-1"
                  style={{
                    color: 'var(--navy-blue)',
                  }}
                >
                  Por Edad
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${showAgeDropdown ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {showAgeDropdown && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg overflow-hidden animate-slideDownFade"
                    style={{
                      background: 'var(--white)',
                      border: '1px solid rgba(91, 143, 163, 0.15)',
                    }}
                  >
                    {ageCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-4 py-3 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        style={{
                          color: 'var(--navy-blue)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--light-cream)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <div className="font-inter font-medium text-sm">
                          {category.label}
                        </div>
                        <div
                          className="font-source text-xs mt-1"
                          style={{
                            color: 'var(--warm-gray)',
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
            <div className="flex items-center gap-4">
              {/* Search */}
              <Link
                href="/search"
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Buscar talleres"
                style={{
                  color: 'var(--calm-blue)',
                }}
              >
                <Search className="h-5 w-5" />
              </Link>

              {/* Account */}
              <Link
                href="/account"
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Mi cuenta"
                style={{
                  color: 'var(--calm-blue)',
                }}
              >
                <User className="h-5 w-5" />
              </Link>

              {/* Cart */}
              <div className="[&_svg]:h-5 [&_svg]:w-5" style={{ color: 'var(--calm-blue)' }}>
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
                  className="font-inter font-medium text-sm px-4 py-2 rounded-md transition-colors duration-300"
                  style={{
                    color: 'var(--navy-blue)',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--light-cream)';
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
                  className="font-inter font-medium text-sm px-4 py-2 rounded-md transition-colors duration-300 flex items-center gap-1"
                  style={{
                    color: 'var(--navy-blue)',
                    background: showAgeDropdown ? 'var(--light-cream)' : 'transparent',
                  }}
                >
                  Por Edad
                  <ChevronDown className={`w-3 h-3 transition-transform ${showAgeDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showAgeDropdown && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden z-50"
                    style={{
                      background: 'var(--white)',
                      border: '1px solid rgba(91, 143, 163, 0.15)',
                    }}
                  >
                    {ageCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block px-4 py-2 font-inter text-sm border-b border-gray-100 last:border-b-0"
                        style={{
                          color: 'var(--navy-blue)',
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
