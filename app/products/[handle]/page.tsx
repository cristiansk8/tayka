import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GalleryCustom } from 'components/product/gallery-custom';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescriptionCustom } from 'components/product/product-description-custom';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import NextImage from 'next/image';
import { Suspense } from 'react';

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />

      {/* Product Detail Section - Tayka Design */}
      <div className="pt-24 pb-16" style={{ background: 'var(--tayka-bg-main)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb con Emojis */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-semibold mb-4 tayka-transition"
              style={{ color: 'var(--tayka-text-medium)' }}
            >
              <span className="text-2xl">🏠</span>
              <span>Back to home</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Gallery - 50% width */}
            <div className="tayka-card bg-white">
              <Suspense
                fallback={
                  <div className="relative aspect-square h-full w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <span className="text-6xl gentle-pulse">⏳</span>
                  </div>
                }
              >
                <GalleryCustom
                  images={product.images.map((image: Image) => ({
                    src: image.url,
                    altText: image.altText
                  }))}
                />
              </Suspense>
            </div>

            {/* Product Info - 50% width */}
            <div>
              <Suspense fallback={null}>
                <ProductDescriptionCustom product={product} />
              </Suspense>
            </div>
          </div>

          {/* Trust Icons - Simplified */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="tayka-card text-center bg-white">
              <div className="text-5xl mb-2">✅</div>
              <p className="text-lg font-semibold" style={{ color: 'var(--tayka-text-dark)' }}>Safe & Secure</p>
            </div>
            <div className="tayka-card text-center bg-white">
              <div className="text-5xl mb-2">🚚</div>
              <p className="text-lg font-semibold" style={{ color: 'var(--tayka-text-dark)' }}>Fast Shipping</p>
            </div>
            <div className="tayka-card text-center bg-white">
              <div className="text-5xl mb-2">💙</div>
              <p className="text-lg font-semibold" style={{ color: 'var(--tayka-text-dark)' }}>Made with Care</p>
            </div>
            <div className="tayka-card text-center bg-white">
              <div className="text-5xl mb-2">⭐</div>
              <p className="text-lg font-semibold" style={{ color: 'var(--tayka-text-dark)' }}>Quality Tested</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <Suspense fallback={
        <div className="py-16 text-center">
          <div className="text-6xl gentle-pulse mb-4">⏳</div>
          <p className="text-2xl" style={{ color: 'var(--tayka-text-medium)' }}>Loading more products...</p>
        </div>
      }>
        <RelatedProducts id={product.id} />
      </Suspense>
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-16 tayka-bg-learn">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title with emoji */}
        <div className="text-center mb-12">
          <div className="text-[60px] mb-4">🎁</div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--tayka-text-dark)' }}
          >
            You might also like
          </h2>
          <p
            className="text-xl md:text-2xl"
            style={{ color: 'var(--tayka-text-medium)' }}
          >
            More amazing things to explore
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((product, index) => (
            <Link
              key={product.handle}
              href={`/products/${product.handle}`}
              className="tayka-card tayka-shadow-hover block"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Product Image */}
              <div className="relative w-full h-64 mb-6 tayka-rounded-md overflow-hidden bg-white">
                {product.featuredImage ? (
                  <NextImage
                    src={product.featuredImage.url}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[80px]">
                    🎁
                  </div>
                )}
                {/* Out of stock badge */}
                {!product.availableForSale && (
                  <div className="absolute top-3 right-3 z-10 bg-gray-800 text-white px-3 py-1 tayka-rounded-sm text-sm font-bold">
                    Out of stock
                  </div>
                )}
              </div>

              {/* Product Name */}
              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  color: 'var(--tayka-text-dark)',
                  lineHeight: '1.4'
                }}
              >
                {product.title}
              </h3>

              {/* Price - Big and Clear */}
              <div
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--tayka-blue)' }}
              >
                ${parseFloat(product.priceRange.maxVariantPrice.amount).toLocaleString('en-US')}
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
    </div>
  );
}
