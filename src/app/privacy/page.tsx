import { Metadata } from "next";
import { PolicyPage } from "@/components/sites/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy — NBBS",
  description:
    "How NB Business Solutions collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information when you register for workshops or use our website."
      sections={[
        {
          id: "who-we-are",
          title: "1.1 Who We Are",
          paragraphs: [
            "NB Business Solutions, operated by Nikhielkumar Bakliwal, is a business consulting and workshop provider based in Nashik, Maharashtra, India. This Privacy Policy explains how we collect, use, and protect your personal information.",
          ],
        },
        {
          id: "what-data",
          title: "1.2 What Data We Collect",
          paragraphs: [
            "When you register for the Business Clarity Workshop (BCW) or interact with our website, we collect:",
          ],
          bullets: [
            "Contact information: Name, email address, phone number, business name",
            "Workshop data: Workshop attendance, participation records",
            "Diagnostic responses: Your responses to the Business Health Diagnostic questions (business metrics, challenges, stage, industry, etc.)",
            "Diagnostic report: Your personalized diagnostic output and recommendations",
            "Payment information: Processed through Razorpay (we don't store your card details directly)",
            "Website behavior: Pages visited, time spent (if you consent to analytics)",
          ],
        },
        {
          id: "why-collect",
          title: "1.3 Why We Collect It",
          bullets: [
            "To register you for workshops and send confirmation/updates",
            "To process refunds and manage cancellations",
            "To conduct the Business Health Diagnostic during the workshop",
            "To generate your personalized diagnostic report using the proprietary Business Health Diagnostic framework",
            "To facilitate group discussions and provide real-time feedback during the workshop",
            "To improve our workshop content and services",
            "To comply with GST and tax regulations",
          ],
        },
        {
          id: "retention",
          title: "1.4 How Long We Keep It",
          bullets: [
            "Active clients: As long as you're registered or have an active service",
            "Diagnostic responses & reports: Retained while your registration is active. You may request deletion anytime, and we'll delete within 30 days",
            "Payment records: 7 years (required by tax law)",
            "You can request deletion anytime: We'll delete within 30 days, except where tax law requires retention",
          ],
          note: "Your Rights: You can request a copy of your diagnostic responses anytime via connect@nbbs.in. We'll provide them within 7 days.",
        },
        {
          id: "sharing",
          title: "1.5 Who We Share It With",
          paragraphs: ["We share your data only with:"],
          bullets: [
            "Razorpay: Payment processor (they process payments securely; we don't control their systems)",
            "Email service provider: To send workshop confirmations and updates",
            "Legal authorities: If required by law",
          ],
          note: "We do not sell your data to anyone.",
        },
        {
          id: "rights",
          title: "1.6 Your Rights Under Indian Privacy Law",
          paragraphs: [
            "Under India's Data Protection and Privacy Act (DPDP), 2023, you have the right to:",
          ],
          bullets: [
            "Access: Request a copy of your data we hold",
            "Correction: Ask us to fix inaccurate data",
            "Deletion: Request deletion of your data (subject to legal retention requirements)",
            "Withdraw consent: Stop receiving non-essential communications",
          ],
          note: "To exercise these rights, email: connect@nbbs.in",
        },
        {
          id: "security",
          title: "1.7 Data Security",
          paragraphs: [
            "We use reasonable technical safeguards (encryption, secure servers) to protect your data. However, no internet transmission is 100% secure. We're not liable for breaches caused by factors outside our control (e.g., Razorpay or email service provider failures), but we are liable for breaches caused by our negligence.",
          ],
        },
        {
          id: "cookies",
          title: "1.8 Cookies & Analytics",
          paragraphs: [
            "Our website may use cookies and analytics tools (such as Google Analytics) to understand how you use our site. This helps us improve user experience. You consent to this tracking when you visit our website. You can opt out via your browser settings or analytics opt-out tools.",
          ],
        },
      ]}
    />
  );
}
