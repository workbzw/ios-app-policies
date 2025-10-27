import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-10">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium">
              AiDimsum
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Last Updated: October 27, 2025
          </p>
        </div>

        {/* Content */}
        <div className="rounded-2xl bg-white shadow-xl dark:bg-zinc-900 p-8 sm:p-12">
          <div className="prose prose-zinc max-w-none dark:prose-invert">
            
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                1. Introduction
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Welcome to our application. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our mobile application. Please read this 
                privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the application.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-200 mt-6 mb-3">
                2.1 Personal Data
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                We may collect personally identifiable information that you voluntarily provide to us 
                when you register on the Application, express an interest in obtaining information about 
                us or our products and services, or otherwise contact us. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Name and email address</li>
                <li>Phone number and contact information</li>
                <li>Username and password</li>
                <li>Profile information and photos</li>
                <li>Payment and billing information</li>
              </ul>

              <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-200 mt-6 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                When you use our Application, we may automatically collect certain information about 
                your device and usage patterns, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Device information (model, operating system, unique device identifiers)</li>
                <li>IP address and geographic location</li>
                <li>Application usage data and analytics</li>
                <li>Crash reports and performance data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-200 mt-6 mb-3">
                2.3 Information from Third Parties
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We may receive information about you from third-party sources, such as social media 
                platforms, when you choose to connect your account with our Application.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                We use the information we collect or receive for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>To provide, operate, and maintain our Application</li>
                <li>To improve, personalize, and expand our Application</li>
                <li>To understand and analyze how you use our Application</li>
                <li>To develop new products, services, features, and functionality</li>
                <li>To communicate with you, including customer service and support</li>
                <li>To send you updates, marketing communications, and promotional materials</li>
                <li>To process your transactions and manage your account</li>
                <li>To detect, prevent, and address fraud and security issues</li>
                <li>To comply with legal obligations and enforce our terms and conditions</li>
              </ul>
            </section>

            {/* Sharing Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                4. Sharing Your Information
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission</li>
                <li><strong>Aggregated Data:</strong> We may share anonymized, aggregated data for analytics purposes</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                5. Data Security
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your 
                personal information. However, no method of transmission over the Internet or electronic 
                storage is 100% secure. While we strive to use commercially acceptable means to protect 
                your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                6. Data Retention
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the 
                purposes outlined in this Privacy Policy, unless a longer retention period is required 
                or permitted by law. When we no longer need your information, we will securely delete 
                or anonymize it.
              </p>
            </section>

            {/* Your Privacy Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
                <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your data</li>
                <li><strong>Objection:</strong> Object to our processing of your personal information</li>
              </ul>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Our Application is not intended for children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If you become aware that a child 
                has provided us with personal information, please contact us. If we become aware that 
                we have collected personal information from children without verification of parental 
                consent, we will take steps to remove that information from our servers.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                9. Third-Party Services
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Our Application may contain links to third-party websites or services that are not 
                operated by us. We have no control over and assume no responsibility for the content, 
                privacy policies, or practices of any third-party sites or services. We strongly advise 
                you to review the Privacy Policy of every site you visit.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of 
                your state, province, country, or other governmental jurisdiction where data protection 
                laws may differ. We take appropriate safeguards to ensure that your personal information 
                remains protected in accordance with this Privacy Policy.
              </p>
            </section>

            {/* California Privacy Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                11. California Privacy Rights (CCPA)
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California 
                Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by businesses</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising your CCPA rights</li>
              </ul>
            </section>

            {/* GDPR Compliance */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                12. GDPR Compliance (European Users)
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                If you are located in the European Economic Area (EEA), you have certain data protection 
                rights under the General Data Protection Regulation (GDPR). We aim to take reasonable 
                steps to allow you to correct, amend, delete, or limit the use of your personal information. 
                The legal basis for processing your data includes consent, contractual necessity, and our 
                legitimate interests.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                13. Changes to This Privacy Policy
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date at the 
                top of this Privacy Policy. You are advised to review this Privacy Policy periodically 
                for any changes. Changes to this Privacy Policy are effective when they are posted on 
                this page.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                14. Contact Us
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="rounded-lg bg-zinc-100 dark:bg-zinc-800 p-6 mt-4">
                <p className="text-zinc-800 dark:text-zinc-200 font-medium">Email:</p>
                <p className="text-zinc-700 dark:text-zinc-300">workbzw@gmail.com</p>
              </div>
            </section>

            {/* Acceptance */}
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                15. Acceptance of This Policy
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                By using our Application, you acknowledge that you have read this Privacy Policy and 
                agree to its terms. If you do not agree to this policy, please do not use our Application.
              </p>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} AiDimsum. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

