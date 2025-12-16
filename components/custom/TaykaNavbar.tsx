'use client';
import Link from 'next/link';
import { useState } from 'react';
import CartModal from 'components/cart/modal';
import { Suspense } from 'react';
import { Home, Gamepad2, Star, Heart, User } from 'lucide-react';

export default function TaykaNavbar() {
  const [hearts] = useState(3); // Lives - videogame style
  const [stars] = useState(0); // Points/stars

  // Nav items - videogame style
  const navItems = [
    { href: '/', icon: Home, label: 'Home', emoji: '🏠', color: 'var(--tayka-blue)' },
    { href: '/search', icon: Gamepad2, label: 'Play', emoji: '🎮', color: 'var(--tayka-green)' },
    { href: '/productos', icon: Star, label: 'Treasures', emoji: '⭐', color: 'var(--tayka-yellow)' },
    { href: '/favoritos', icon: Heart, label: 'Favorites', emoji: '💖', color: 'var(--tayka-coral)' }
  ];

  return (
    <>
      {/* Barra superior estilo videojuego */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-16 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, var(--tayka-blue) 0%, var(--tayka-purple) 100%)',
          borderBottom: '4px solid var(--tayka-purple)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo TAYKA - Estilo Pixel/Videojuego */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="text-5xl font-bold tracking-wider tayka-transition"
              style={{
                fontFamily: '"Fredoka", "Comic Sans MS", cursive',
                color: 'white',
                textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
                letterSpacing: '2px'
              }}
            >
              TAYKA
            </div>
            <div className="text-3xl gentle-pulse">🎨</div>
          </Link>

          {/* Barra de estado (vidas y puntos) */}
          <div className="hidden md:flex items-center gap-6">
            {/* Vidas/Corazones */}
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 tayka-rounded-md">
              <span className="text-white font-bold text-sm">Vidas:</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-2xl">
                    {i < hearts ? '❤️' : '🤍'}
                  </span>
                ))}
              </div>
            </div>

            {/* Estrellas/Puntos */}
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 tayka-rounded-md">
              <span className="text-3xl">⭐</span>
              <span className="text-white font-bold text-xl">{stars}</span>
            </div>
          </div>

          {/* Acciones de usuario */}
          <div className="flex items-center gap-3">
            {/* Cuenta de usuario */}
            <Link
              href="/account"
              className="tayka-btn-icon"
              aria-label="Mi cuenta"
            >
              <User className="h-6 w-6 text-white" />
            </Link>

            {/* Carrito */}
            <div className="[&_svg]:text-white">
              <Suspense fallback={null}>
                <CartModal />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal - Estilo botones de videojuego */}
      <nav
        className="fixed top-16 left-0 right-0 z-40 shadow-md"
        style={{
          background: 'var(--tayka-bg-main)',
          borderBottom: '3px solid var(--tayka-purple)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-3 md:gap-6 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="tayka-nav-button group"
                style={{
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                }}
              >
                {/* Emoji grande */}
                <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>

                {/* Label */}
                <span className="text-base md:text-lg font-bold text-white hidden sm:block">
                  {item.label}
                </span>

                {/* Efecto brillo al hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 tayka-rounded-md transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Espaciador para el contenido */}
      <div className="h-[136px]" />
    </>
  );
}
