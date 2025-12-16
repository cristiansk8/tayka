'use client';

import clsx from 'clsx';
import { Dialog, Transition } from '@headlessui/react';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import LoadingDots from 'components/loading-dots';
import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
import { createCartAndSetCookie, getCheckoutUrl } from './actions';
import { useCart } from './cart-context';
import { DeleteItemButton } from './delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import OpenCart from './open-cart';
import { toast } from 'sonner';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal() {
  const { cart, updateCartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
    ) {
      if (!isOpen) {
        setIsOpen(true);
      }
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel
              className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col backdrop-blur-xl md:w-[420px]"
              style={{
                borderLeft: '3px solid var(--warm-sand)',
                background: 'linear-gradient(180deg, var(--off-white) 0%, var(--white) 100%)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-6 py-5"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-blue) 100%)',
                  borderBottom: '2px solid var(--warm-sand)'
                }}
              >
                <h2 className="font-inter text-xl font-semibold" style={{ color: 'var(--white)' }}>
                  My Cart
                </h2>
                <button
                  aria-label="Close cart"
                  onClick={closeCart}
                  className="transition-all duration-200 hover:scale-110"
                >
                  <CloseCart />
                </button>
              </div>

              {!cart || cart.lines.length === 0 ? (
                <div className="mt-32 flex w-full flex-col items-center justify-center overflow-hidden px-6">
                  <div
                    className="mb-6 p-6 rounded-full"
                    style={{ background: 'var(--off-white)' }}
                  >
                    <ShoppingCartIcon className="h-20 w-20" style={{ color: 'var(--sage-green)' }} />
                  </div>
                  <h3 className="font-inter text-2xl font-semibold mb-3" style={{ color: 'var(--primary-dark)' }}>
                    Your cart is empty
                  </h3>
                  <p className="font-source text-base text-center" style={{ color: 'var(--text-secondary)' }}>
                    Add PDF workshops to get started
                  </p>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden">
                  <ul className="grow overflow-auto py-4 px-6">
                    {cart.lines
                      .sort((a, b) =>
                        a.merchandise.product.title.localeCompare(
                          b.merchandise.product.title
                        )
                      )
                      .map((item, i) => {
                        const merchandiseSearchParams =
                          {} as MerchandiseSearchParams;

                        item.merchandise.selectedOptions.forEach(
                          ({ name, value }) => {
                            if (value !== DEFAULT_OPTION) {
                              merchandiseSearchParams[name.toLowerCase()] =
                                value;
                            }
                          }
                        );

                        const merchandiseUrl = createUrl(
                          `/products/${item.merchandise.product.handle}`,
                          new URLSearchParams(merchandiseSearchParams)
                        );

                        return (
                          <li
                            key={i}
                            className="flex w-full flex-col mb-4 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
                            style={{
                              border: '1px solid var(--soft-gray)',
                              background: 'var(--white)'
                            }}
                          >
                            <div className="relative flex w-full flex-row justify-between p-4">
                              <div className="absolute z-40 -ml-2 -mt-2">
                                <DeleteItemButton
                                  item={item}
                                  optimisticUpdate={updateCartItem}
                                />
                              </div>
                              <div className="flex flex-row flex-1">
                                <div
                                  className="relative h-20 w-20 overflow-hidden flex-shrink-0"
                                  style={{
                                    borderRadius: 'var(--radius-lg)',
                                    border: '2px solid var(--warm-sand)',
                                    background: 'var(--off-white)'
                                  }}
                                >
                                  <Image
                                    className="h-full w-full object-cover"
                                    width={80}
                                    height={80}
                                    alt={
                                      item.merchandise.product.featuredImage
                                        .altText ||
                                      item.merchandise.product.title
                                    }
                                    src={
                                      item.merchandise.product.featuredImage.url
                                    }
                                  />
                                </div>
                                <div className="flex-1 ml-4 flex flex-col justify-between">
                                  <Link
                                    href={merchandiseUrl}
                                    onClick={closeCart}
                                    className="z-30"
                                  >
                                    <h4
                                      className="font-inter font-medium text-base leading-tight hover:opacity-70 transition-opacity"
                                      style={{ color: 'var(--primary-dark)' }}
                                    >
                                      {item.merchandise.product.title}
                                    </h4>
                                    {item.merchandise.title !==
                                    DEFAULT_OPTION ? (
                                      <p
                                        className="font-source text-sm mt-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                      >
                                        {item.merchandise.title}
                                      </p>
                                    ) : null}
                                  </Link>
                                  <div className="flex items-center justify-between mt-2">
                                    <Price
                                      className="font-inter font-semibold text-lg"
                                      amount={item.cost.totalAmount.amount}
                                      currencyCode={
                                        item.cost.totalAmount.currencyCode
                                      }
                                      style={{ color: 'var(--secondary-blue)' }}
                                    />
                                    <div
                                      className="flex h-9 flex-row items-center"
                                      style={{
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--soft-gray)',
                                        background: 'var(--off-white)'
                                      }}
                                    >
                                      <EditItemQuantityButton
                                        item={item}
                                        type="minus"
                                        optimisticUpdate={updateCartItem}
                                      />
                                      <p className="w-8 text-center">
                                        <span
                                          className="font-inter text-sm font-medium"
                                          style={{ color: 'var(--primary-dark)' }}
                                        >
                                          {item.quantity}
                                        </span>
                                      </p>
                                      <EditItemQuantityButton
                                        item={item}
                                        type="plus"
                                        optimisticUpdate={updateCartItem}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>

                  {/* Summary Section */}
                  <div
                    className="px-6 py-5"
                    style={{
                      background: 'var(--off-white)',
                      borderTop: '2px solid var(--warm-sand)'
                    }}
                  >
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <p className="font-source text-sm" style={{ color: 'var(--text-secondary)' }}>
                          Taxes
                        </p>
                        <Price
                          className="font-inter text-sm font-medium"
                          amount={cart.cost.totalTaxAmount.amount}
                          currencyCode={cart.cost.totalTaxAmount.currencyCode}
                          style={{ color: 'var(--text-primary)' }}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-source text-sm" style={{ color: 'var(--text-secondary)' }}>
                          Shipping
                        </p>
                        <p className="font-inter text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          Calculated at checkout
                        </p>
                      </div>
                      <div
                        className="flex items-center justify-between pt-3"
                        style={{ borderTop: '1px solid var(--soft-gray)' }}
                      >
                        <p className="font-inter text-lg font-semibold" style={{ color: 'var(--primary-dark)' }}>
                          Total
                        </p>
                        <Price
                          className="font-inter text-xl font-bold"
                          amount={cart.cost.totalAmount.amount}
                          currencyCode={cart.cost.totalAmount.currencyCode}
                          style={{ color: 'var(--secondary-blue)' }}
                        />
                      </div>
                    </div>
                    <CheckoutButton />
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

function CloseCart({ className }: { className?: string }) {
  return (
    <div
      className="relative flex h-10 w-10 items-center justify-center transition-all duration-200 hover:scale-110"
      style={{
        borderRadius: 'var(--radius-md)',
        background: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.3)'
      }}
    >
      <XMarkIcon
        className={clsx(
          'h-6 transition-all ease-in-out',
          className
        )}
        style={{ color: 'var(--white)' }}
      />
    </div>
  );
}

function CheckoutButton() {
  const [isPending, setIsPending] = useState(false);

  const handleCheckout = async () => {
    setIsPending(true);
    try {
      const checkoutUrl = await getCheckoutUrl();

      if (!checkoutUrl) {
        toast.error('Error: No se pudo obtener la URL de checkout');
        setIsPending(false);
        return;
      }

      // Redirect to Shopify checkout
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Error during checkout:', error);
      toast.error('Error al proceder al checkout');
      setIsPending(false);
    }
  };

  return (
    <button
      className="font-inter block w-full py-4 text-center text-base font-semibold transition-all duration-300 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
      style={{
        background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-blue) 100%)',
        color: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        letterSpacing: '0.3px'
      }}
      onClick={handleCheckout}
      disabled={isPending}
      onMouseEnter={(e) => {
        if (!isPending) {
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          e.currentTarget.style.background = 'linear-gradient(135deg, var(--secondary-blue) 0%, var(--primary-dark) 100%)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.background = 'linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-blue) 100%)';
      }}
    >
      {isPending ? <LoadingDots className="bg-white" /> : 'Proceed to Checkout'}
    </button>
  );
}
