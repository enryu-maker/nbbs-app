import { Metadata } from "next";
import { PolicyPage } from "@/components/sites/PolicyPage";

export const metadata: Metadata = {
  title: "Intellectual Property & Confidentiality — NBBS",
  description:
    "IP ownership, permitted use of workshop content, and attendee confidentiality.",
};

export default function IntellectualPropertyPage() {
  return (
    <PolicyPage
      title="Intellectual Property & Confidentiality"
      description="What NB Business Solutions owns, what you may use, and how confidential workshop discussion is protected."
      sections={[
        {
          id: "what-we-own",
          title: "5.1 What We Own",
          paragraphs: [
            "NB Business Solutions owns and retains all intellectual property rights to:",
          ],
          bullets: [
            "Workshop frameworks, methodologies, and systems",
            "Presentation materials, slides, and handouts",
            "Business models, strategies, and proprietary processes shared during BCW",
            "The Business Health Diagnostic methodology, framework, and scoring algorithm",
            "The name 'Business Clarity Workshop' and any associated trademarks",
          ],
        },
        {
          id: "what-you-can-do",
          title: "5.2 What You Can Do With Workshop Content",
          subsections: [
            {
              title: "You may",
              bullets: [
                "Use frameworks internally within your own business for your benefit",
                "Take personal notes for your own reference",
                "Share general concepts (not specific slides or materials) with your team",
              ],
            },
            {
              title: "You cannot",
              bullets: [
                "Record, photograph, or video the workshop without written permission",
                "Redistribute workshop materials (slides, handouts, frameworks) outside your team",
                "Repackage and resell the workshop content or frameworks",
                "Claim the frameworks as your own intellectual property",
                "Post workshop materials on social media, websites, or public platforms",
              ],
            },
          ],
        },
        {
          id: "breach",
          title: "5.3 Breach of IP Rights",
          paragraphs: [
            "If you violate these IP restrictions, we reserve the right to:",
          ],
          bullets: [
            "Demand immediate cessation of the unauthorized use",
            "Seek legal remedies, including damages",
            "Remove you from future workshops",
          ],
        },
        {
          id: "attendee-confidentiality",
          title: "5.4 Attendee Confidentiality (Mutual)",
          paragraphs: [
            "What is shared by other attendees in the workshop is confidential:",
          ],
          bullets: [
            "Don't share what other attendees discussed or their business challenges",
            "Treat the workshop as a confidential peer-learning space",
            "Violations of attendee privacy may result in removal from future workshops",
          ],
        },
        {
          id: "recording",
          title: "5.5 Video/Recording Requests",
          paragraphs: [
            "If you want to record the workshop for personal use or discuss recording with us, email: connect@nbbs.in",
          ],
        },
      ]}
    />
  );
}
