"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function PrivacyPolicyComponent() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Link href="/" passHref>
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back Home
        </Button>
      </Link>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p className="lead">
            At FreeCourseHive, we value your privacy and are committed to
            providing a safe and secure experience for all visitors. We want you
            to feel confident using our website, and we&apos;re dedicated to
            transparency about our practices.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            No Data Collection
          </h2>
          <p>
            FreeCourseHive does not collect, store, or process any personal data
            from users. We simply provide links to free online courses sourced
            from reputable educational platforms like Coursera, edX, and Udemy.
            You can browse and explore our curated content without worrying
            about your privacy.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            Third-Party Links
          </h2>
          <p>
            Our website contains links to third-party platforms offering free
            courses. Please note that these external websites may have their own
            privacy policies, and we recommend reviewing them if you have any
            concerns about how your data might be used when visiting those
            sites.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            Cookies and Tracking
          </h2>
          <p>
            FreeCourseHive does not use cookies, tracking pixels, or any other
            data-gathering tools to monitor user activity. Your browsing
            experience is entirely private and anonymous on our site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding our privacy
            practices, please feel free to contact us. We&apos;re here to help
            ensure that your experience on FreeCourseHive remains secure and
            private.
          </p>

          <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
