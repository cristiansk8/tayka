import { getDiscountedProducts, getCollections } from 'lib/shopify';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import AnnouncementBar from '@/components/custom/AnnouncementBar';
import CategorySectionMinimal from '@/components/custom/CategorySectionMinimal';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata: Metadata = {
  title: 'Productos en Descuento | Juan Becerra',
  description: 'Descubre nuestros productos de marroquinería de lujo con descuentos especiales. Elegancia artesanal a precios únicos.',
  openGraph: {
    title: 'Productos en Descuento | Juan Becerra',
    description: 'Descubre nuestros productos de marroquinería de lujo con descuentos especiales.',
    type: 'website'
  }
};

async function CategorySectionWrapper() {
  const collections = await getCollections();
  return <CategorySectionMinimal collections={collections} />;
}

export default async function DescuentosPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getDiscountedProducts({ sortKey, reverse });

  return (
    <>
      <AnnouncementBar />

      {/* Category Carousel */}
      <Suspense fallback={<div className="h-40 bg-white" />}>
        <CategorySectionWrapper />
      </Suspense>

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <nav className="mb-4 text-xs">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="text-gray-300">›</li>
              <li className="text-gray-900 font-medium">Descuentos</li>
            </ol>
          </nav>

          <h1 className="font-belleza text-2xl sm:text-3xl font-light tracking-wide text-gray-900">
            Descuentos
            <span className="text-sm font-normal text-gray-500 ml-3">
              ({products.length} {products.length === 1 ? 'producto' : 'productos'})
            </span>
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">
                No hay productos con descuento en este momento
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Visita nuestra tienda regularmente para no perderte nuestras próximas ofertas
              </p>
              <Link
                href="/search"
                className="inline-block px-6 py-3 bg-[#620c0b] text-white hover:bg-[#4a0909] transition-colors"
              >
                Ver todos los productos →
              </Link>
            </div>
          ) : (
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 py-12">
              <ProductGridItems products={products} />
            </Grid>
          )}
        </div>
      </section>

      <FooterCustom />
    </>
  );
}
