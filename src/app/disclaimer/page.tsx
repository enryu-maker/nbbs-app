import { Metadata } from "next";
import { PolicyPage } from "@/components/sites/PolicyPage";

export const metadata: Metadata = {
  title: "Consulting Disclaimer — NBBS",
  description:
    "Educational nature, limitation of liability, and disclaimer for Business Clarity Workshop.",
};

export default function DisclaimerPage() {
  return (
    <PolicyPage
      title="Consulting Disclaimer & Limitation of Liability"
      description="The Business Clarity Workshop is advisory and educational. Please read these limitations carefully."
      sections={[
        {
          id: "nature",
          title: "4.1 Educational & Advisory Nature",
          paragraphs: [
            "The Business Clarity Workshop is advisory and educational only. The frameworks, insights, and recommendations shared are based on general business principles and Nikhielkumar Bakliwal's consulting experience. They are not:",
          ],
          bullets: [
            "Personalized advice for your specific business",
            "Guaranteed to produce results",
            "Professional legal, financial, or tax advice",
          ],
        },
        {
          id: "no-guarantee",
          title: "4.2 No Guarantee of Outcomes",
          bullets: [
            "We do not guarantee that attending BCW will increase your revenue, profits, or business success",
            "Your business outcomes depend entirely on your execution, market conditions, and business context",
            "Past client results do not predict your results",
          ],
        },
        {
          id: "responsibility",
          title: "4.3 You Assume Full Responsibility",
          paragraphs: ["By attending BCW, you:"],
          bullets: [
            "Accept full responsibility for how you implement the frameworks shared",
            "Understand that incorrect implementation is your responsibility",
            "Agree to verify applicability of recommendations to your specific business before acting",
            "May consult professional advisors (CAs, lawyers, financial consultants) for implementation details",
          ],
        },
        {
          id: "liability",
          title: "4.4 Limitation of Liability",
          paragraphs: ["We are not liable for:"],
          bullets: [
            "Lost business, lost revenue, or lost clients",
            "Reputational harm or damage to business relationships",
            "Poor business decisions you make based on workshop content",
            "Indirect, incidental, consequential, or punitive damages",
            "Any claim arising from your failure to implement recommendations correctly",
          ],
          note: "Exception: We ARE liable only for willful misconduct.",
        },
        {
          id: "remedy",
          title: "4.5 Your Sole Remedy",
          paragraphs: [
            "Your only remedy for dissatisfaction with BCW is a refund, as stated in our Refund & Cancellation Policy.",
          ],
        },
        {
          id: "acknowledge",
          title: "4.6 You Acknowledge",
          paragraphs: ["By registering, you confirm that:"],
          bullets: [
            "You understand this is consulting education, not guarantees",
            "You will not hold us liable for business outcomes",
            "You understand we're not providing legal, financial, or tax advice",
            "You've read and accepted this disclaimer",
          ],
        },
      ]}
    />
  );
}
