import React from 'react';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Terms of Service | Tayka',
  description: 'Read our terms of service and conditions of use for Tayka digital educational resources.'
};

export default function TerminosDelServicio() {
  return (
    <>
     <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Terms of Service
        </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="text-gray-600">
          <p className="mb-6">
            TAYKA specializes in the production and distribution of digital educational resources (PDF workshops) for autistic children through our online platform. These terms govern exclusively purchases made directly on the online store www.tayka.co
          </p>

          <p className="mb-6">
            By using this Site, the user acknowledges having read and understood these Terms of Service and agrees to be bound by them and comply with all applicable laws and regulations that are part of Colombian legislation. Additionally, when the user uses any service provided on this Site, they will be subject to the applicable rules, guidelines, policies, terms and conditions.
          </p>

          <p className="mb-8">
            Any person who enters their data in the Registration form must be legally capable according to the laws of the Republic of Colombia to conduct commercial transactions in the online store. Minors may browse the website but are not authorized to make any type of transaction.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PURCHASE PROCESS
            </h2>
            <p className="mb-4">
              To make a purchase, the user or customer must register on the website and authorize the personal data processing policy. After registering, they can purchase the digital educational resources displayed on the portal or platform.
            </p>
            <p className="mb-4">
              If you create an account, it will remain active until the user cancels it or TAYKA determines that it is being misused. The enabled payment platform is Mercado Pago.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DIGITAL PRODUCT DELIVERY
            </h2>
            <p className="mb-4">
              Digital products (PDF workshops) are delivered instantly via email after successful payment confirmation. You will receive:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Purchase confirmation email</li>
              <li>Download links for your purchased resources</li>
              <li>Access to your account dashboard with all purchased materials</li>
            </ul>
            <p className="mb-4">
              Download links are valid indefinitely and can be accessed from your account at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              RIGHT OF WITHDRAWAL (DIGITAL PRODUCTS)
            </h2>
            <p className="mb-4">
              Due to the nature of digital products, refunds are handled differently than physical goods. Please refer to our <a href="/politica-reembolso" className="text-blue-600 hover:underline">Refund Policy</a> for complete details on circumstances under which refunds are available.
            </p>
            <p className="mb-4">
              Once a digital file has been downloaded or accessed, standard right of withdrawal does not apply as per digital goods legislation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PROMOTIONS
            </h2>
            <p className="mb-4">
              Promotions, their validity and availability will be published on the website and their advertising will be clear. If any promotion does not indicate an expiration date, it will be understood to last until supplies are exhausted.
            </p>
            <p className="mb-4">
              Promotional products are subject to the same terms and conditions as regular-priced items. Discounts are applied to the final purchase price.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              INTELLECTUAL PROPERTY AND COPYRIGHT
            </h2>
            <p className="mb-4">
              All trademarks, logos, names and other distinctive signs, as well as designs and other elements of intellectual or industrial property inserted and used on this website are the exclusive property of TAYKA.
            </p>
            <p className="mb-4">
              <strong>Important:</strong> All digital educational resources (PDF workshops) are protected by copyright. Unauthorized sharing, distribution, or commercial use of purchased materials is strictly prohibited and may result in legal action.
            </p>
            <p className="mb-4">
              Purchased resources are licensed for personal use only. You may:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the materials with the children under your care</li>
              <li>Print the materials for personal use</li>
              <li>Store digital copies for backup purposes</li>
            </ul>
            <p className="mb-4">
              You may NOT:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Share, sell, or distribute the files to others</li>
              <li>Post the materials on public websites or social media</li>
              <li>Modify the materials and redistribute them</li>
              <li>Use the materials for commercial purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              COMPLAINTS AND CLAIMS
            </h2>
            <p className="mb-4">
              TAYKA has made available different service channels to successfully address the requests, complaints and claims of its users. You can contact us through WhatsApp, email or through our contact form.
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>Email:</strong> contacto@tayka.co</li>
              <li><strong>WhatsApp:</strong> [Contact Number]</li>
              <li><strong>Office hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (Colombia Time)</li>
            </ul>
          </section>

          <p className="mt-8 text-sm italic">
            By using our services and making a purchase, you accept these Terms of Service.
          </p>
        </div>
      </div>
    </main>
      <FooterCustom />
    </>
  );
}
