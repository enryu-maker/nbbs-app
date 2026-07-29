import { Metadata } from "next";
import { PolicyPage } from "@/components/sites/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie & Analytics Policy — NBBS",
  description:
    "How NB Business Solutions uses cookies and analytics on this website.",
};

export default function CookiesPolicyPage() {
  return (
    <PolicyPage
      title="Cookie & Analytics Policy"
      description="How we use cookies and analytics tools to understand site usage and improve your experience."
      sections={[
        {
          id: "what-are-cookies",
          title: "6.1 What Are Cookies?",
          paragraphs: [
            "Cookies are small text files stored on your browser that help us understand how you use our website. They allow us to remember your preferences and improve your experience.",
          ],
        },
        {
          id: "types",
          title: "6.2 Types of Cookies We Use",
          subsections: [
            {
              title: "Essential Cookies",
              bullets: [
                "These are required for the website to function (e.g., session management, security)",
                "You cannot opt out of these",
              ],
            },
            {
              title: "Analytics Cookies",
              bullets: [
                "We use Google Analytics to track how visitors use our website (pages visited, time spent, traffic sources)",
                "This data helps us improve content and user experience",
                "No personal information is collected through analytics cookies",
                "Google Analytics data is anonymized",
              ],
            },
          ],
        },
        {
          id: "consent",
          title: "6.3 Your Consent",
          paragraphs: [
            "By using our website, you consent to analytics tracking. You can:",
          ],
          bullets: [
            "Opt out via browser settings (do-not-track)",
            "Disable Google Analytics using Google's Analytics Opt-out Browser Add-on",
            "Clear cookies from your browser anytime",
          ],
        },
        {
          id: "third-party",
          title: "6.4 Third-Party Sharing",
          paragraphs: [
            "Google Analytics data is shared with Google. Review Google's Privacy Policy for details on how they handle data.",
          ],
        },
        {
          id: "changes",
          title: "6.5 Changes to This Policy",
          paragraphs: [
            "We may update this policy as we implement new analytics tools. We'll notify you of material changes via email or website updates.",
          ],
        },
        {
          id: "contact",
          title: "6.6 Contact",
          paragraphs: [
            "For questions about cookies and analytics: connect@nbbs.in",
          ],
        },
      ]}
    />
  );
}
