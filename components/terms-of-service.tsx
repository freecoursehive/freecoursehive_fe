'use client'

import Link from 'next/link'

export function TermsOfServiceComponent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Terms of Service</h1>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <p className="mb-4">
              Welcome to FreeCourseHive! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. General Terms</h2>
            <p className="mb-4">
              FreeCourseHive provides a curated list of links to free online courses in fields like programming, design, marketing, and data science. We are not an educational institution; we only direct users to content provided by third-party platforms.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Use of Content and Open Source License</h2>
            <p className="mb-4">
              FreeCourseHive is an open-source platform, and our content is provided for informational purposes. You may access, use, copy, and distribute content from the website under the terms of our open-source license, provided that you attribute FreeCourseHive appropriately. Unauthorized use outside of the open-source license terms is prohibited.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Third-Party Links</h2>
            <p className="mb-4">
              FreeCourseHive contains links to third-party educational websites such as Coursera, edX, and Udemy. We do not control these external sites and are not responsible for their content, policies, or practices. Accessing third-party sites is at your own risk, and we recommend reviewing their terms of service and privacy policies.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Disclaimer of Warranties</h2>
            <p className="mb-4">
              FreeCourseHive makes no warranties or representations about the accuracy, completeness, or reliability of the information provided on this site. Content may change or be removed without notice. The site is provided on an "as-is" basis, and we disclaim all warranties, express or implied, including but not limited to fitness for a particular purpose, merchantability, and non-infringement.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              FreeCourseHive, its owners, or its affiliates will not be liable for any damages arising from or related to your use of the site, including direct, indirect, incidental, consequential, or punitive damages. This includes damages for errors, interruptions, or delays in accessing the website.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting. It is your responsibility to review these terms periodically to stay informed of updates.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us. We're here to help.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}