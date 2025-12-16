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
      {/* Professional Navigation Bar - Editorial Minimalism */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'var(--white)',
          borderBottom: '1px solid var(--soft-gray)',
          boxShadow: 'var(--shadow-sm)'
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
                  color: 'var(--primary-dark)',
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
                    color: 'var(--text-primary)',
                  }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{
                      background: 'var(--secondary-blue)',
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
                    color: 'var(--text-primary)',
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
                          e.currentTarget.style.background = 'var(--off-white)';
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
            <div className="flex items-center gap-4">
              {/* Search */}
              <Link
                href="/search"
                className="p-2 transition-all duration-300 hover:scale-110"
                aria-label="Buscar talleres"
                style={{
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <Search className="h-5 w-5" />
              </Link>

              {/* Account */}
              <Link
                href="/account"
                className="p-2 transition-all duration-300 hover:scale-110"
                aria-label="Mi cuenta"
                style={{
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <User className="h-5 w-5" />
              </Link>

              {/* Cart */}
              <div className="[&_svg]:h-5 [&_svg]:w-5" style={{ color: 'var(--text-primary)' }}>
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
