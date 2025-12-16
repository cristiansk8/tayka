'use client';

import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import { useProduct } from 'components/product/product-context';
import { Product, ProductVariant } from 'lib/shopify/types';
import { useTransition } from 'react';
import { useCart } from './cart-context';

function SubmitButton({
  availableForSale,
  selectedVariantId,
  isPending
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  isPending: boolean;
}) {
  if (!availableForSale) {
    return (
      <button
        disabled
        className="tayka-btn tayka-btn-secondary w-full opacity-50 cursor-not-allowed"
      >
        <span className="text-2xl">😔</span>
        <span>Out of Stock</span>
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Select an option"
        disabled
        className="tayka-btn tayka-btn-secondary w-full opacity-50 cursor-not-allowed"
      >
        <span className="text-2xl">🤔</span>
        <span>Select an Option</span>
      </button>
    );
  }

  return (
    <button
      type="submit"
      disabled={isPending}
      aria-label="Add to cart"
      className={clsx(
        'tayka-btn tayka-btn-primary w-full text-xl',
        isPending && 'opacity-70 cursor-wait'
      )}
    >
      <span className="text-3xl">{isPending ? '⏳' : '🛒'}</span>
      <span>{isPending ? 'Adding...' : 'Add to Cart'}</span>
    </button>
  );
}

export function AddToCartCustom({
  product,
  quantity = 1
}: {
  product: Product;
  quantity?: number;
}) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [isPending, startTransition] = useTransition();

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId
  )!;

  const handleAddToCart = async () => {
    if (!selectedVariantId || isPending) return;

    startTransition(async () => {
      // Añadir la cantidad especificada al carrito (optimista - UI update)
      addCartItem(finalVariant, product, quantity);

      // Llamar a la server action con la cantidad correcta
      await addItem(null, selectedVariantId, quantity);
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddToCart();
      }}
    >
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        isPending={isPending}
      />
    </form>
  );
}
