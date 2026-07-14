import { Metadata } from "next";
import { PolicyPage } from "@/components/sites/PolicyPage";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — NBBS",
  description:
    "Refund and cancellation rules for Business Clarity Workshop registrations.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      title="Refund & Cancellation Policy"
      description="This policy applies to Business Clarity Workshop registrations."
      sections={[
        {
          id: "timeline",
          title: "3.1 Cancellation Timeline & Refund Amounts",
          table: {
            headers: ["When You Cancel", "Refund %"],
            rows: [
              ["7+ days before workshop", "100% refund"],
              ["3–6 days before workshop", "50% refund"],
              ["Less than 3 days before workshop", "No refund"],
              ["Day of workshop (no-show)", "No refund"],
              [
                "After registration closes (24 hours before workshop)",
                "No refund",
              ],
            ],
          },
          subsections: [
            {
              title: "Example",
              paragraphs: [
                "Workshop date: Saturday, 22 June at 10:00 AM. Registration closes Friday, 21 June at 10:00 AM (24 hours before).",
              ],
              bullets: [
                "Cancel by Tuesday, 18 June → 100% refund",
                "Cancel by Thursday, 20 June → 50% refund",
                "Cancel on Friday, 21 June at 10:00 AM or later → No refund",
              ],
            },
          ],
        },
        {
          id: "how-to-request",
          title: "3.2 How to Request a Refund",
          bullets: [
            "Email: contact.nbbs@gmail.com with your name, registration email, and reason for cancellation",
            "We'll verify your registration and process the refund within 7 working days",
            "Refunds are issued to your original payment method (Razorpay account)",
          ],
        },
        {
          id: "processing",
          title: "3.3 Refund Processing Timeline",
          bullets: [
            "After we approve your refund request, Razorpay processes it within 7 working days",
            "Your bank may take an additional 2–3 days to reflect the amount",
            "Total timeline: typically 7–10 working days",
          ],
        },
        {
          id: "special",
          title: "3.4 Special Circumstances",
          bullets: [
            "Medical emergency or death in family: We may offer a credit toward a future workshop instead of refund (case-by-case basis)",
            "Workshop cancellation by us: If we cancel the workshop, you get a 100% refund or credit toward the next workshop",
            "Postponement by us: If we reschedule, you can attend the new date or request a refund",
          ],
        },
        {
          id: "no-refunds",
          title: "3.5 No Refunds For",
          bullets: [
            "Failure to attend (no-show)",
            "Cancellation after the registration deadline",
            "Requests more than 30 days after the workshop",
            "Technical issues on your end (e.g., couldn't log in if it's virtual)",
          ],
        },
        {
          id: "disputes",
          title: "3.6 Disputes",
          paragraphs: [
            "If you believe a refund was incorrectly denied, email contact.nbbs@gmail.com with details. We'll review within 5 working days.",
          ],
        },
      ]}
    />
  );
}
