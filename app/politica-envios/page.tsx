import React from 'react';
import FooterCustom from '@/components/custom/FooterCustom';

export const metadata = {
  title: 'Digital Delivery Policy | Tayka',
  description: 'Learn how we deliver digital educational resources instantly after purchase at Tayka.'
};

export default function PoliticaEnvios() {
  return (
    <>
     <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Digital Delivery Policy
        </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="text-gray-600">
          <p className="mb-6">
            At TAYKA we specialize in digital educational resources (PDF workshops). This policy describes how we deliver your purchased materials instantly and securely.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              INSTANT DIGITAL DELIVERY
            </h2>
            <p className="mb-4">
              All TAYKA educational resources are delivered digitally via email. There are no physical products to ship, which means:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Instant access:</strong> Receive your materials within minutes of purchase</li>
              <li><strong>No shipping costs:</strong> Digital delivery is always free</li>
              <li><strong>No waiting time:</strong> Start using your resources immediately</li>
              <li><strong>Eco-friendly:</strong> Zero carbon footprint from shipping</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              HOW IT WORKS
            </h2>
            <p className="mb-4">
              Our digital delivery process is simple and automatic:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-3">
              <li><strong>Complete your purchase:</strong> Select your PDF workshops and complete the payment process</li>
              <li><strong>Payment confirmation:</strong> Once payment is verified (usually within 1-2 minutes), our system automatically processes your order</li>
              <li><strong>Email delivery:</strong> You receive an email with:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Purchase confirmation and receipt</li>
                  <li>Direct download links for each purchased resource</li>
                  <li>Instructions for accessing your account dashboard</li>
                </ul>
              </li>
              <li><strong>Account access:</strong> Log into your TAYKA account to view all your purchased materials anytime</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DELIVERY TIMEFRAME
            </h2>
            <p className="mb-4">
              Digital products are delivered according to the following timeline:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Credit/Debit Card payments:</strong> Instant to 2 minutes</li>
              <li><strong>PSE (Online Bank Transfer):</strong> 2-5 minutes after bank confirmation</li>
              <li><strong>Cash payments (Mercado Pago):</strong> Within 10 minutes after payment confirmation</li>
            </ul>
            <p className="mb-4 bg-blue-50 border-l-4 border-blue-500 p-4">
              <strong>Note:</strong> If you don't receive your download email within 15 minutes, please check your spam/junk folder or contact our support team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DOWNLOAD INSTRUCTIONS
            </h2>
            <p className="mb-4">
              To download your purchased PDF workshops:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Open the confirmation email from TAYKA</li>
              <li>Click on the download link for each product</li>
              <li>The PDF will download to your device</li>
              <li>Save the file to a location you'll remember</li>
              <li>Open with any PDF reader (Adobe Reader, Preview, etc.)</li>
            </ol>
            <p className="mb-4">
              <strong>Alternative method:</strong> Log into your account at www.tayka.co, go to "My Purchases" and download any resource at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              UNLIMITED RE-DOWNLOADS
            </h2>
            <p className="mb-4">
              Your purchased materials are always available:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Download links never expire</li>
              <li>Re-download from your account anytime</li>
              <li>No limit on number of downloads</li>
              <li>Access from any device with your account credentials</li>
              <li>Lost your files? Simply download them again from your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              SUPPORTED DEVICES
            </h2>
            <p className="mb-4">
              Our PDF workshops work on all major platforms:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Desktop:</strong> Windows, Mac, Linux</li>
              <li><strong>Mobile:</strong> iPhone, iPad, Android phones and tablets</li>
              <li><strong>E-readers:</strong> Most tablets and e-readers that support PDF files</li>
            </ul>
            <p className="mb-4">
              <strong>Requirements:</strong> A PDF reader application (most devices have one pre-installed)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              PRINTING YOUR MATERIALS
            </h2>
            <p className="mb-4">
              All TAYKA PDF workshops can be printed for personal use:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Print at home on any standard printer</li>
              <li>Print at a professional print shop</li>
              <li>Print individual pages or entire workshops</li>
              <li>Color or black & white printing (color recommended for best experience)</li>
            </ul>
            <p className="mb-4">
              <strong>Note:</strong> Printed materials are for personal use only and may not be distributed or sold.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              DELIVERY ISSUES
            </h2>
            <p className="mb-4">
              If you experience any issues with digital delivery:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Email not received:</strong> Check spam/junk folders, verify email address in account settings</li>
              <li><strong>Download link not working:</strong> Try a different browser or device, log into your account directly</li>
              <li><strong>File won't open:</strong> Ensure you have a PDF reader installed, try downloading again</li>
              <li><strong>Payment processed but no email:</strong> Contact support with your order number</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              ACCOUNT ACCESS
            </h2>
            <p className="mb-4">
              Your TAYKA account provides permanent access to all purchases:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>View complete purchase history</li>
              <li>Download any previous purchase anytime</li>
              <li>Update email and account information</li>
              <li>Receive notifications about new resources</li>
            </ul>
            <p className="mb-4">
              <strong>Lost your password?</strong> Use the "Forgot Password" feature on the login page to reset it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              FILE SECURITY AND BACKUP
            </h2>
            <p className="mb-4">
              We recommend:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Save downloaded files to a secure location on your device</li>
              <li>Create backup copies on external drives or cloud storage</li>
              <li>Remember that you can always re-download from your account</li>
              <li>Keep your account credentials secure</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              TECHNICAL SUPPORT
            </h2>
            <p className="mb-4">
              If you need help with downloading or accessing your digital products:
            </p>
            <ul className="list-none mb-4 space-y-2">
              <li><strong>Email:</strong> contacto@tayka.co (Response within 24 hours)</li>
              <li><strong>WhatsApp:</strong> [Contact Number] (Faster response)</li>
              <li><strong>Office hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM (Colombia Time)</li>
            </ul>
            <p className="mb-4">
              When contacting support, please include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your order number</li>
              <li>Email address used for purchase</li>
              <li>Description of the issue</li>
              <li>Screenshots if applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              UPDATES AND IMPROVEMENTS
            </h2>
            <p className="mb-4">
              TAYKA occasionally updates educational resources to improve quality or add content. If we make significant improvements to a product you've purchased:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You'll receive an email notification</li>
              <li>Updated version will be available in your account</li>
              <li>No additional charge for updates to products you own</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
      <FooterCustom />
    </>
  );
}
