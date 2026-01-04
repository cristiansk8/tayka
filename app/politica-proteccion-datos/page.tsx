import React from 'react';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Privacy Policy | Tayka',
  description: 'Learn how we protect your personal data at Tayka. Privacy policy and data processing for specialized educational resources.'
};

export default function PoliticaProteccionDatos() {
  return (
    <>
     <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Privacy Policy
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
            TAYKA - Experts in educational resources for autistic children, in compliance with Law 1581 of 2012 and Decree 1377 of 2013, has established this Personal Data Processing Policy to inform our customers and users about how we handle their personal information.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DATA CONTROLLER
            </h2>
            <p className="mb-4">
              <strong>Company Name:</strong> TAYKA - Specialized Educational Resources
            </p>
            <p className="mb-4">
              <strong>Address:</strong> Colombia
            </p>
            <p className="mb-4">
              <strong>Email:</strong> contacto@tayka.co
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> [Contact Number]
            </p>
            <p className="mb-4">
              <strong>Website:</strong> www.tayka.co
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PERSONAL DATA WE COLLECT
            </h2>
            <p className="mb-4">
              TAYKA may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Identification data:</strong> Full name, identification number</li>
              <li><strong>Contact data:</strong> Email address, phone number</li>
              <li><strong>Billing data:</strong> Payment information for digital educational resources</li>
              <li><strong>Navigation data:</strong> IP address, browser type, pages visited, time spent</li>
              <li><strong>Educational preferences:</strong> Resource purchase history, workshops of interest, child's age</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PURPOSE OF DATA PROCESSING
            </h2>
            <p className="mb-4">
              The personal data collected will be used for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Process and manage purchases of digital educational resources (PDFs)</li>
              <li>Facilitate payment and billing processes</li>
              <li>Send purchased digital resources via email</li>
              <li>Provide customer service and specialized support</li>
              <li>Send communications about purchase status and access to materials</li>
              <li>Send educational information, new workshops and resources (with prior consent)</li>
              <li>Conduct analysis to improve our educational materials</li>
              <li>Improve our resources, services and user experience</li>
              <li>Comply with legal and fiscal obligations</li>
              <li>Prevent fraud and ensure platform security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DATA SUBJECT RIGHTS
            </h2>
            <p className="mb-4">
              As a personal data subject, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Know, update and rectify</strong> your personal data</li>
              <li><strong>Request proof</strong> of the authorization granted for processing</li>
              <li><strong>Be informed</strong> about the use of your data</li>
              <li><strong>File complaints</strong> with the Superintendence of Industry and Commerce</li>
              <li><strong>Revoke authorization</strong> and request data deletion (when applicable)</li>
              <li><strong>Access your personal data</strong> free of charge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PROCEDURE TO EXERCISE YOUR RIGHTS
            </h2>
            <p className="mb-4">
              To exercise your rights regarding personal data, you can contact us through:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Email: contacto@tayka.co</li>
              <li>WhatsApp: [Contact Number]</li>
            </ul>
            <p className="mb-4">
              Your request will be addressed within a maximum period of fifteen (15) business days from the date of receipt. If the request cannot be addressed within that period, you will be informed of the reason for the delay and the date it will be addressed, which may not exceed eight (8) business days following the expiration of the first term.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              INFORMATION SECURITY
            </h2>
            <p className="mb-4">
              TAYKA implements technical, human and administrative measures to protect personal information against loss, theft, unauthorized access, disclosure, copying, use or modification.
            </p>
            <p className="mb-4">
              Our platform uses security protocols such as SSL/TLS to encrypt information transmitted between your browser and our servers. Payment data is processed through secure platforms that comply with PCI DSS standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DATA TRANSFER AND TRANSMISSION
            </h2>
            <p className="mb-4">
              TAYKA may transfer or transmit personal data to third parties when:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Necessary to deliver digital resources via email</li>
              <li>Required to process payments (e.g., payment platforms like Shopify Payments, Mercado Pago)</li>
              <li>There is a legal obligation to do so</li>
              <li>Express authorization has been obtained from the data subject</li>
            </ul>
            <p className="mb-4">
              In all cases, we ensure that third parties maintain adequate security and confidentiality standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              RETENTION PERIOD
            </h2>
            <p className="mb-4">
              Personal data will be retained for as long as necessary to fulfill the established purposes and to attend to legal, fiscal or accounting requirements. Once these purposes and obligations are fulfilled, the data will be securely deleted from our systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              COOKIES AND SIMILAR TECHNOLOGIES
            </h2>
            <p className="mb-4">
              Our website uses cookies and similar technologies to improve user experience, remember preferences and collect information about site usage. You can configure your browser to reject cookies, although this may affect some site functionalities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              MINORS
            </h2>
            <p className="mb-4">
              TAYKA's services are directed to parents, guardians and professionals who work with children. Although our resources are designed for children, account purchase and management must be performed by responsible adults. We do not intentionally collect personal information from minors without parental or guardian consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              POLICY MODIFICATIONS
            </h2>
            <p className="mb-4">
              TAYKA reserves the right to modify this Privacy Policy at any time. Significant changes will be communicated through our website or by email. We recommend reviewing this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              CONTACT
            </h2>
            <p className="mb-4">
              For any questions, doubts or requests related to the processing of your personal data, you can contact us:
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>Email:</strong> contacto@tayka.co</li>
              <li><strong>WhatsApp:</strong> [Contact Number]</li>
              <li><strong>Office hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (Colombia Time)</li>
            </ul>
          </section>

          <p className="mt-8 text-sm italic">
            By using our services and providing your personal information, you accept the terms of this Privacy Policy.
          </p>
        </div>
      </div>
    </main>
      <FooterCustom />
    </>
  );
}
