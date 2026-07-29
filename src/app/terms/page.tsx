import { Metadata } from "next";
import { PolicyPage } from "@/components/sites/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service — NBBS",
  description:
    "Terms governing registration and participation in the Business Clarity Workshop.",
};

export default function TermsOfServicePage() {
  return (
    <PolicyPage
      title="Terms of Service"
      description="By registering for the Business Clarity Workshop (BCW), you agree to these terms."
      sections={[
        {
          id: "acceptance",
          title: "2.1 Acceptance of Terms",
          paragraphs: [
            "By registering for the Business Clarity Workshop (BCW), you agree to these terms. If you don't agree, don't register.",
          ],
        },
        {
          id: "what-is-bcw",
          title: "2.2 What Is BCW?",
          paragraphs: [
            "BCW is a monthly in-person group workshop where Nikhielkumar Bakliwal shares business diagnostic frameworks and consulting insights. It's educational and advisory—not a guarantee of business success.",
          ],
        },
        {
          id: "registration",
          title: "2.3 Registration & Payment",
          bullets: [
            "Registration requires your name, email, phone, and business details",
            "Payment is processed via Razorpay and is non-refundable except as stated in our Refund & Cancellation Policy",
            "You'll receive a confirmation email with workshop details",
            "We may update workshop timings or topics with 24 hours' notice",
          ],
        },
        {
          id: "responsibilities",
          title: "2.4 Your Responsibilities",
          bullets: [
            "You're responsible for arriving on time and prepared to participate",
            "You agree to respect other attendees' confidentiality (what's shared in workshops stays confidential)",
            "You won't record, photograph, or redistribute workshop content without written permission",
            "You won't disrupt the workshop or behave disrespectfully",
          ],
        },
        {
          id: "diagnostic",
          title: "2.5 Business Health Diagnostic",
          paragraphs: [
            "The BCW includes a Business Health Diagnostic assessment where you'll answer questions about your business metrics, challenges, and stage.",
          ],
          subsections: [
            {
              title: "Your Data",
              bullets: [
                "Your diagnostic responses and personalized report are confidential to you",
                "You own your diagnostic report and may share it with your advisors, accountants, or team as needed",
                "You can request your raw diagnostic responses anytime via email; we'll provide them within 7 days",
                "We retain your diagnostic data as long as your registration is active. You may request deletion anytime, and we'll comply within 30 days",
              ],
            },
            {
              title: "How We Generate Your Report",
              bullets: [
                "Your diagnostic responses are analyzed using the proprietary Business Health Diagnostic framework to generate your personalized report",
                "The report is presented to you during the workshop",
              ],
            },
            {
              title: "Diagnostic Limitations",
              bullets: [
                "The diagnostic is advisory only and not a professional business audit",
                "Your results depend on the accuracy and completeness of your self-reported data",
                "The diagnostic is not comparable to other attendees' results",
                "Past diagnostic patterns do not guarantee future business outcomes",
              ],
            },
            {
              title: "Workshop Facilitation",
              bullets: [
                "Nikhielkumar Bakliwal may view your diagnostic insights during the workshop to guide group discussions and unlock diagnostic sections",
                "Individual diagnostic data is not shared with other attendees or third parties",
              ],
            },
            {
              title: "Intellectual Property",
              bullets: [
                "The diagnostic methodology, framework, and scoring algorithm remain the intellectual property of NB Business Solutions",
                "You cannot repackage or resell the diagnostic framework",
              ],
            },
          ],
          note: "For questions about your diagnostic or data requests, email: connect@nbbs.in",
        },
        {
          id: "limitations",
          title: "2.6 Our Limitations",
          bullets: [
            "BCW is as-is, without warranties of any kind",
            "We don't guarantee any business outcomes, revenue increases, or success from attending",
            "Your success depends entirely on how well you implement the frameworks in your specific business context",
            "We're not responsible for indirect damages (lost revenue, lost clients, reputational harm) even if you claim our advice caused them",
            "Exception: We ARE liable only for willful misconduct",
          ],
        },
        {
          id: "razorpay",
          title: "2.7 Razorpay Is a Third Party",
          bullets: [
            "Razorpay processes all payments; we don't store your card information",
            "Razorpay's failures, outages, or security breaches are their responsibility, not ours",
            "Disputes with Razorpay should be directed to Razorpay support",
          ],
        },
        {
          id: "gst",
          title: "2.8 GST",
          bullets: [
            "All workshop prices are subject to 18% GST (Goods and Services Tax)",
            "You'll receive a GST-compliant invoice after payment",
            "Business buyers should provide their GSTIN for GST credit eligibility",
          ],
        },
        {
          id: "changes",
          title: "2.9 Changes to Terms",
          paragraphs: [
            "We may update these terms anytime. We'll notify you via email if changes are material. Continued participation means you accept the new terms.",
          ],
        },
        {
          id: "termination",
          title: "2.10 Termination",
          paragraphs: [
            "We reserve the right to refuse registration or remove you from a workshop if you:",
          ],
          bullets: [
            "Violate these terms",
            "Harass other attendees",
            "Attempt to record or resell content without permission",
          ],
        },
        {
          id: "governing-law",
          title: "2.11 Governing Law",
          paragraphs: [
            "These terms are governed by the laws of Maharashtra, India. Disputes will be resolved in courts of Nashik jurisdiction.",
          ],
        },
        {
          id: "contact",
          title: "2.12 Contact",
          paragraphs: [
            "For questions about these terms: connect@nbbs.in",
          ],
        },
      ]}
    />
  );
}
