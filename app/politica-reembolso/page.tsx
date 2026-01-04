import React from 'react';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Refund Policy | Tayka',
  description: 'Learn about our refund and return policy for digital educational resources at Tayka.'
};

export default function PoliticaReembolso() {
  return (
    <>
     <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Refund Policy
          </h1>
          <a
            href="/TAYKA_Refund_Policy.pdf"
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
            At TAYKA - Experts in educational resources for autistic children, we strive to ensure your satisfaction with every purchase. This policy describes the terms and conditions under which you can request refunds for digital products purchased in our online store.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DIGITAL PRODUCTS POLICY
            </h2>
            <p className="mb-4">
              TAYKA specializes in digital educational resources (PDF workshops). Due to the nature of digital products, refunds are handled differently than physical goods:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Digital products are delivered instantly via email after purchase</li>
              <li>Once a digital file has been downloaded or accessed, it cannot be "returned" in the traditional sense</li>
              <li>We stand behind the quality of our educational materials and offer refunds in specific circumstances outlined below</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              REFUND CONDITIONS
            </h2>
            <p className="mb-4">
              We offer refunds for digital products in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Technical issues:</strong> If you cannot access or download the purchased file due to technical problems on our end</li>
              <li><strong>Duplicate purchase:</strong> If you accidentally purchased the same product twice</li>
              <li><strong>Incorrect product:</strong> If you received a different product than what you ordered</li>
              <li><strong>Product description mismatch:</strong> If the product significantly differs from its description on our website</li>
              <li><strong>Quality issues:</strong> If the file is corrupted, incomplete, or of significantly lower quality than advertised</li>
            </ul>
            <p className="mb-4">
              Refund requests must include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Proof of purchase (order number or receipt)</li>
              <li>Clear description of the issue</li>
              <li>Supporting evidence (screenshots, error messages, etc.) when applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PROMOTIONAL PRODUCTS
            </h2>
            <p className="mb-4">
              Products purchased on promotion or with discounts have the following special considerations:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Refunds will be issued for the amount actually paid (discounted price)</li>
              <li>Promotional products are subject to the same refund conditions as regular-priced items</li>
              <li>Bundle deals may only be refunded in full (all items in the bundle must be eligible for refund)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              REFUND REQUEST PROCESS
            </h2>
            <p className="mb-4">
              To request a refund for a digital product, follow these steps:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-3">
              <li>Contact our customer service via email at contacto@tayka.co or WhatsApp [Contact Number]</li>
              <li>Provide your order number and the reason for the refund request</li>
              <li>Include any supporting evidence (screenshots, error messages, etc.)</li>
              <li>Our team will review your request within 2-3 business days</li>
              <li>You will receive a response with the decision and next steps</li>
            </ol>
            <p className="mb-4">
              <strong>Important:</strong> Please submit refund requests within 14 days of purchase for fastest processing. Requests submitted after 30 days may not be eligible for refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PROCESSING TIME
            </h2>
            <p className="mb-4">
              Once we receive your refund request:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We will review your request and supporting documentation (2-3 business days)</li>
              <li>If the refund is approved, we will process it immediately (1-2 business days)</li>
              <li>The refund will be credited to the same payment method used for the original purchase</li>
              <li>The time it takes for your bank or payment provider to reflect the refund may vary between 5-10 additional business days</li>
            </ul>
            <p className="mb-4">
              You will receive email confirmation at each stage of the refund process.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DEFECTIVE OR INCORRECT PRODUCTS
            </h2>
            <p className="mb-4">
              If you receive a defective, corrupted, or incorrect digital product:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contact our customer service immediately with screenshots or details of the issue</li>
              <li>We will verify the problem and provide a solution within 24 hours</li>
              <li>We will offer either a corrected version of the file or a full refund, according to your preference</li>
              <li>Processing time for these cases is expedited (typically same or next business day)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              EXCEPTIONS
            </h2>
            <p className="mb-4">
              Refunds are not available in the following cases:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Change of mind:</strong> If you simply decided you no longer want the product after accessing/downloading it</li>
              <li><strong>Compatibility issues:</strong> If the product works as described but is incompatible with your specific needs or expectations</li>
              <li><strong>Unauthorized purchases:</strong> Products purchased from sources other than our official online store</li>
              <li><strong>Expired requests:</strong> Refund requests submitted more than 30 days after purchase</li>
              <li><strong>Customized products:</strong> Digital products that were specifically customized for your needs (if applicable)</li>
              <li><strong>Violation of terms:</strong> If the refund request is made after violating our Terms of Service (e.g., unauthorized sharing or distribution of files)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              CONTACT
            </h2>
            <p className="mb-4">
              For any questions about our refund policy or to initiate a refund request, contact us:
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>Email:</strong> contacto@tayka.co</li>
              <li><strong>WhatsApp:</strong> [Contact Number]</li>
              <li><strong>Office hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (Colombia Time)</li>
            </ul>
          </section>

          <p className="mt-8 text-sm italic">
            By purchasing our digital educational resources, you accept the terms of this Refund Policy.
          </p>
        </div>
      </div>
    </main>
      <FooterCustom />
    </>
  );
}
