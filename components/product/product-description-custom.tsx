'use client';

import { useState, useEffect } from 'react';
import { AddToCartCustom } from 'components/cart/add-to-cart-custom';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';
import { useProduct } from './product-context';
import { Truck, RefreshCcw, Shield } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="tayka-card mb-4" style={{ background: 'white' }}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 text-left transition-all group"
      >
        <span
          className="text-lg font-bold transition-colors"
          style={{ color: isOpen ? 'var(--tayka-blue)' : 'var(--tayka-text-dark)' }}
        >
          {title}
        </span>
        <span
          className={`text-3xl font-bold transition-all duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
          style={{ color: 'var(--tayka-blue)' }}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className="px-4 pb-4 leading-relaxed text-base"
          style={{ color: 'var(--tayka-text-medium)' }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export function ProductDescriptionCustom({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Obtener la variante seleccionada para verificar inventario disponible
  const { state } = useProduct();
  const selectedVariant = product.variants.find((variant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  ) || product.variants[0];

  // Usar el inventario disponible de la variante, con un máximo de 99
  const MAX_QUANTITY = Math.min(selectedVariant?.quantityAvailable || 99, 99);

  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Ajustar quantity si excede el inventario disponible de la nueva variante
  useEffect(() => {
    if (quantity > MAX_QUANTITY) {
      setQuantity(MAX_QUANTITY);
    }
  }, [MAX_QUANTITY, quantity]);

  // Prepare product details for accordion
  const productDetails = [
    {
      title: '📝 Description',
      icon: <Shield className="h-5 w-5" />,
      content: product.description || 'High quality product carefully made with the best materials for unique minds.'
    },
    {
      title: '🚚 Shipping & Delivery',
      icon: <Truck className="h-5 w-5" />,
      content: (
        <ul className="space-y-2 text-base">
          <li>✅ Free shipping on orders over $150</li>
          <li>✅ Delivery in 3-5 business days</li>
          <li>✅ Real-time order tracking</li>
          <li>✅ Safe and secure packaging</li>
        </ul>
      )
    },
    {
      title: '🔄 Returns & Exchanges',
      icon: <RefreshCcw className="h-5 w-5" />,
      content: (
        <ul className="space-y-2 text-base">
          <li>✅ 30 days for returns and exchanges</li>
          <li>✅ Product must be unused with original tags</li>
          <li>✅ Free return process</li>
          <li>✅ Refund in 5-10 business days</li>
        </ul>
      )
    }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Title - Tayka Style */}
      <h1
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{
          color: 'var(--tayka-text-dark)',
          lineHeight: '1.3'
        }}
      >
        {product.title}
      </h1>

      {/* Price - Big and Clear */}
      <div className="mb-8">
        <span
          className="text-4xl font-bold"
          style={{ color: 'var(--tayka-blue)' }}
        >
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            compareAtAmount={product.variants[0]?.compareAtPrice?.amount}
          />
        </span>
      </div>

      {/* Selector de Variantes (Tallas, Colores, etc.) */}
      <div className="mb-6">
        <VariantSelector options={product.options} variants={product.variants} />
      </div>

      {/* Quantity Selector - Tayka Style */}
      <div className="mb-6">
        <label
          className="block text-lg font-bold mb-3"
          style={{ color: 'var(--tayka-text-dark)' }}
        >
          Quantity 🔢
        </label>
        <div className="inline-flex items-center tayka-rounded-md overflow-hidden" style={{ border: '3px solid var(--tayka-blue)' }}>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-5 py-4 text-2xl font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50"
            style={{ color: 'var(--tayka-blue)' }}
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span
            className="px-8 py-4 text-center min-w-[80px] text-2xl font-bold"
            style={{
              color: 'var(--tayka-text-dark)',
              background: 'var(--tayka-bg-main)'
            }}
          >
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(Math.min(MAX_QUANTITY, quantity + 1))}
            className="px-5 py-4 text-2xl font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50"
            style={{ color: 'var(--tayka-blue)' }}
            aria-label="Increase quantity"
            disabled={quantity >= MAX_QUANTITY}
          >
            +
          </button>
        </div>
        {quantity >= MAX_QUANTITY && (
          <p className="text-sm mt-2 font-semibold" style={{ color: 'var(--tayka-coral)' }}>
            {selectedVariant?.quantityAvailable && selectedVariant.quantityAvailable < 99
              ? `⚠️ Only ${MAX_QUANTITY} units available`
              : '⚠️ Maximum quantity reached'}
          </p>
        )}
      </div>

      {/* Add to Cart Button - Tayka Style */}
      <div className="mb-8">
        <AddToCartCustom product={product} quantity={quantity} />
      </div>

      {/* Product Details Accordion - Tayka Style */}
      <div className="mt-6">
        {productDetails.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openAccordion === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
