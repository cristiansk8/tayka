import React from 'react';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Terms and Conditions | Tayka',
  description: 'Read the terms and conditions for using Tayka digital educational resources store.'
};

export default function TerminosYCondiciones() {
  return (
    <>
     <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Terms and Conditions
          </h1>
          <a
            href="/TAYKA_Terms_and_Conditions.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #4A6FA5, #8FAAD1)',
              color: 'white',
              boxShadow: '0 4px 12px rgba(74, 111, 165, 0.3)'
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="text-gray-600">
          <p className="mb-6">
            Welcome to TAYKA - Experts in educational resources for autistic children. By accessing and using this website and our services, you accept and agree to be bound by the following terms and conditions. Please read them carefully.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. ACCEPTANCE OF TERMS
            </h2>
            <p className="mb-4">
              By accessing www.tayka.co and making a purchase, you agree to be bound by these Terms and Conditions, all applicable laws and regulations of Colombia, and you accept that you are responsible for compliance with any applicable local laws.
            </p>
            <p className="mb-4">
              If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained on this website are protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. WEBSITE USE
            </h2>
            <p className="mb-4">
              You are granted permission to temporarily download one copy of the materials on TAYKA's website for transitory personal and non-commercial viewing only. This is the granting of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software on the site</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. ACCOUNT REGISTRATION
            </h2>
            <p className="mb-4">
              To make purchases on our site, you must create an account by providing truthful, current and complete information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Maintaining the confidentiality of your password</li>
              <li>All activities that occur under your account</li>
              <li>Immediately notifying us of any unauthorized use of your account</li>
            </ul>
            <p className="mb-4">
              Only persons over 18 years of age with legal capacity to contract may register. Minors may browse the site but may not make transactions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. DIGITAL PRODUCTS AND PRICES
            </h2>
            <p className="mb-4">
              TAYKA offers digital educational resources (PDF workshops) designed for autistic children. All products are subject to availability. Product prices are subject to change without notice.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Prices are expressed in Colombian pesos (COP)</li>
              <li>Prices include VAT when applicable</li>
              <li>We reserve the right to limit quantities of products purchased per person or order</li>
              <li>Product images are for reference and may vary slightly from the actual content</li>
              <li>We reserve the right to discontinue any product at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. PURCHASE PROCESS AND PAYMENT
            </h2>
            <p className="mb-4">
              The purchase process is completed when:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>You add digital products to the shopping cart</li>
              <li>You provide billing information</li>
              <li>You select payment method</li>
              <li>You confirm the order</li>
              <li>You receive purchase confirmation via email with download links</li>
            </ol>
            <p className="mb-4">
              We accept the following payment methods:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Credit cards (Visa, Mastercard, American Express)</li>
              <li>Debit cards</li>
              <li>PSE (Secure Online Payments)</li>
              <li>Cash (at authorized points through Mercado Pago)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. DIGITAL DELIVERY
            </h2>
            <p className="mb-4">
              Digital educational resources are delivered instantly via email after payment confirmation. You will receive:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Purchase confirmation email</li>
              <li>Direct download links for all purchased PDF workshops</li>
              <li>Access to your account dashboard where you can re-download materials at any time</li>
            </ul>
            <p className="mb-4">
              <strong>Important:</strong> Download links do not expire. You can access your purchased materials indefinitely from your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. REFUND POLICY FOR DIGITAL PRODUCTS
            </h2>
            <p className="mb-4">
              Due to the nature of digital products, refunds are handled differently than physical goods. We offer refunds in specific circumstances outlined in our <a href="/politica-reembolso" className="text-blue-600 hover:underline">Refund Policy</a>.
            </p>
            <p className="mb-4">
              Refunds are available for technical issues, incorrect products, or quality problems. Please refer to our Refund Policy for complete details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. LICENSE AND USAGE RIGHTS
            </h2>
            <p className="mb-4">
              All digital educational resources are licensed for personal use only. When you purchase a PDF workshop, you receive a non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the materials with children under your care (parents, educators, therapists)</li>
              <li>Print the materials for personal educational use</li>
              <li>Store digital copies for backup purposes</li>
            </ul>
            <p className="mb-4">
              You are NOT permitted to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Share, sell, or distribute the files to others</li>
              <li>Post the materials on public websites, social media, or file-sharing platforms</li>
              <li>Modify and redistribute the materials</li>
              <li>Use the materials for commercial purposes</li>
              <li>Claim authorship or copyright of the materials</li>
            </ul>
            <p className="mb-4">
              Violation of these terms may result in termination of your license and legal action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. INTELLECTUAL PROPERTY
            </h2>
            <p className="mb-4">
              All content on this website, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Educational PDF workshops and materials</li>
              <li>Text, graphics, logos, images</li>
              <li>Product photographs and descriptions</li>
              <li>Software and code</li>
              <li>Designs and compilations</li>
              <li>Trademarks and trade names</li>
            </ul>
            <p className="mb-4">
              Are the exclusive property of TAYKA and are protected by Colombian intellectual property laws. Any unauthorized use will constitute a violation of these laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. PRIVACY AND DATA PROTECTION
            </h2>
            <p className="mb-4">
              Your privacy is important to us. The use of your personal information is governed by our <a href="/politica-proteccion-datos" className="text-blue-600 hover:underline">Privacy Policy</a>, which complies with Law 1581 of 2012.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. LIMITATION OF LIABILITY
            </h2>
            <p className="mb-4">
              In no event shall TAYKA be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Direct, indirect, incidental or consequential damages</li>
              <li>Loss of profits or data</li>
              <li>Business interruption</li>
              <li>Damages arising from the use or inability to use our website</li>
              <li>Educational outcomes or results from using our materials</li>
            </ul>
            <p className="mb-4">
              Our educational resources are designed to support child development but should be used under appropriate supervision and in conjunction with professional guidance when needed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. THIRD-PARTY LINKS
            </h2>
            <p className="mb-4">
              Our site may contain links to third-party websites. TAYKA has no control over these sites and assumes no responsibility for their content, privacy policies or practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. MODIFICATIONS
            </h2>
            <p className="mb-4">
              TAYKA reserves the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Modify these Terms and Conditions at any time</li>
              <li>Change, suspend or discontinue any aspect of the website</li>
              <li>Modify or discontinue products and services</li>
            </ul>
            <p className="mb-4">
              Changes will take effect immediately after publication. It is your responsibility to review these terms periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. ORDER CANCELLATION
            </h2>
            <p className="mb-4">
              TAYKA reserves the right to refuse or cancel orders for the following reasons:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Product not available</li>
              <li>Error in price or product description</li>
              <li>Problem with payment method</li>
              <li>Suspected fraud</li>
              <li>Incorrect or incomplete contact information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              15. JURISDICTION AND APPLICABLE LAW
            </h2>
            <p className="mb-4">
              These Terms and Conditions are governed by the laws of the Republic of Colombia. Any dispute related to these terms shall be subject to the exclusive jurisdiction of Colombian courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              16. CONTACT
            </h2>
            <p className="mb-4">
              If you have questions about these Terms and Conditions, you can contact us:
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>Email:</strong> contacto@tayka.co</li>
              <li><strong>WhatsApp:</strong> [Contact Number]</li>
              <li><strong>Website:</strong> www.tayka.co</li>
              <li><strong>Office hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (Colombia Time)</li>
            </ul>
          </section>

          <p className="mt-8 text-sm italic">
            By using our website and making a purchase, you acknowledge that you have read, understood and agreed to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </main>
      <FooterCustom />
    </>
  );
}
