import { Suspense } from 'react';
import { getProducts } from 'lib/shopify';
import Link from 'next/link';
import Image from 'next/image';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Home',
  description:
    'Tayka - Games designed for unique minds. Pedagogical games specially designed for children with autism. Safe, clear and friendly shopping experience.',
  openGraph: {
    type: 'website',
    title: 'Tayka | Games designed for unique minds',
    description: 'Pedagogical games specially designed for children with autism'
  }
};

// Hero Banner with Background Image - Editorial Minimalism
function TaykaHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/profesor-de-vista-frontal-explicando-los-ninos.jpg"
          alt="Teacher explaining to children"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay for Text Readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(31, 42, 68, 0.85) 0%, rgba(74, 111, 165, 0.75) 50%, rgba(31, 42, 68, 0.85) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20">
        {/* Main Heading */}
        <h1
          className="font-inter text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{
            color: 'var(--white)',
            letterSpacing: '-0.5px',
            lineHeight: '1.1',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          Professional PDF Workshops
        </h1>

        {/* Subtitle */}
        <p
          className="font-source text-2xl md:text-3xl mb-4 font-medium"
          style={{
            color: 'var(--warm-sand)',
            lineHeight: '1.5',
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
          }}
        >
          For Child Development & Early Education
        </p>

        <p
          className="font-source text-lg md:text-xl mb-10 max-w-3xl mx-auto"
          style={{
            color: 'var(--off-white)',
            lineHeight: '1.6',
            opacity: 0.95,
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        >
          Expertly designed downloadable resources for educators, parents, and therapists
        </p>

        {/* CTA Button */}
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
      </div>
    </section>
  );
}

// Category Cards - DibuBaron Style
function CategoryCards() {
  const categories = [
    {
      emoji: '🎮',
      title: 'Games',
      color: 'var(--tayka-blue)',
      gradient: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)'
    },
    {
      emoji: '📚',
      title: 'Learning',
      color: 'var(--tayka-green)',
      gradient: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)'
    },
    {
      emoji: '🎨',
      title: 'Creativity',
      color: 'var(--tayka-coral)',
      gradient: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)'
    },
    {
      emoji: '🌙',
      title: 'Calm',
      color: 'var(--tayka-purple)',
      gradient: 'linear-gradient(135deg, #F3E5F5, #E1BEE7)'
    }
  ];

  return (
    <section className="py-16 px-6" style={{ background: 'var(--tayka-bg-main)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--tayka-text-dark)' }}
          >
            What would you like to see? 🤔
          </h2>
          <p
            className="text-xl md:text-2xl"
            style={{ color: 'var(--tayka-text-medium)' }}
          >
            Choose a category to start
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="tayka-card tayka-shadow-hover cursor-pointer"
              style={{
                background: category.gradient,
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Emoji Grande */}
              <div className="text-[80px] text-center mb-4">
                {category.emoji}
              </div>

              {/* Título */}
              <h3
                className="text-2xl md:text-3xl font-bold text-center"
                style={{ color: 'var(--tayka-text-dark)' }}
              >
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Grid with Friendly Design
async function ProductGrid() {
  const products = await getProducts({ sortKey: 'BEST_SELLING' });
  const featuredProducts = products.slice(0, 6);

  if (featuredProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-[80px] mb-4">🎁</div>
        <p className="text-2xl" style={{ color: 'var(--tayka-text-medium)' }}>
          Amazing products coming soon!
        </p>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 tayka-bg-learn">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="text-[60px] mb-4">⭐</div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--tayka-text-dark)' }}
          >
            Special Products
          </h2>
          <p
            className="text-xl md:text-2xl"
            style={{ color: 'var(--tayka-text-medium)' }}
          >
            Things we love
          </p>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.handle}`}
              className="tayka-card tayka-shadow-hover block"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Imagen del Producto */}
              <div className="relative w-full h-64 mb-6 tayka-rounded-md overflow-hidden bg-white">
                {product.featuredImage ? (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText || product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[80px]">
                    🎁
                  </div>
                )}
              </div>

              {/* Nombre del Producto */}
              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  color: 'var(--tayka-text-dark)',
                  lineHeight: '1.4'
                }}
              >
                {product.title}
              </h3>

              {/* Precio Grande y Claro */}
              <div
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--tayka-blue)' }}
              >
                ${parseFloat(product.priceRange.maxVariantPrice.amount).toLocaleString('es-CO')}
              </div>

              {/* See More Button */}
              <button className="tayka-btn tayka-btn-primary w-full">
                <span>👀</span>
                <span>See more</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Help/Instructions Section
function HelpSection() {
  return (
    <section className="py-16 px-6 tayka-bg-calm">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-[80px] mb-6">💡</div>

        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: 'var(--tayka-text-dark)' }}
        >
          Need help?
        </h2>

        <p
          className="text-2xl mb-8"
          style={{
            color: 'var(--tayka-text-medium)',
            lineHeight: '1.6'
          }}
        >
          You can tap the cards to see more information.
          <br />
          If something is not clear, you can tap the purple button 🌙 in the corner.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="tayka-card" style={{ background: 'white', minWidth: '200px' }}>
            <div className="text-5xl mb-2">👆</div>
            <p className="text-lg font-semibold">Tap the cards</p>
          </div>

          <div className="tayka-card" style={{ background: 'white', minWidth: '200px' }}>
            <div className="text-5xl mb-2">🌙</div>
            <p className="text-lg font-semibold">Calm zone</p>
          </div>

          <div className="tayka-card" style={{ background: 'white', minWidth: '200px' }}>
            <div className="text-5xl mb-2">🏠</div>
            <p className="text-lg font-semibold">Back to home</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Página Principal
export default function HomePage() {
  return (
    <>
      <main>
        {/* Hero */}
        <TaykaHero />

        {/* Products - Segundo componente */}
        <Suspense
          fallback={
            <div className="py-16 text-center">
              <div className="text-[60px] gentle-pulse">⏳</div>
              <p className="text-2xl mt-4" style={{ color: 'var(--tayka-text-medium)' }}>
                Loading products...
              </p>
            </div>
          }
        >
          <ProductGrid />
        </Suspense>

        {/* Categorías */}
        <CategoryCards />

        {/* Help Section */}
        <HelpSection />
      </main>

      {/* Footer */}
      <FooterCustom />
    </>
  );
}
