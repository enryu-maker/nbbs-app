import opd from "@/public/solution.jpg";
import cash from "@/public/cashflow.jpg";
import incentive from "@/public/incentives.jpg";
import { type ServiceItem } from "@/src/types";

export const defaultServices: ServiceItem[] = [
  {
    id: 1,
    number: "01",
    category: "Business Clarity Workshop",
    title: "Real Strategies, Actionable Tools.",
    subcategory:
      "Most businesses don’t have a growth problem. They have a clarity problem.",
    description:
      "The Business Clarity Workshop helps founders step back from daily firefighting, assess where their business truly stands, identify what’s holding it back, and know what to focus on next through our 8-Pillar Business Clarity Diagnostic.",
    image: cash,
    cta: "Explore Workshop",
    ctaUrl: "https://workshop.nbbs.in/",
    primaryIdentity: {
      title: "Key Takeaways",
      points: [
        "8-Pillar Business Clarity Diagnostic",
        "Business Frameworks",
        "Clarity on What Matters Most",
        "Visibility into Your Biggest Constraint",
        "Personalised Clarity Report",
      ],
    },
    perfectFor:
      "MSME owners who want clarity on where their business stands and what to do next.",
    businessProof:
      "An interactive 3-hour workshop built around practical business frameworks and an 8-Pillar Business Health Diagnostic.",
    highlights: [
      {
        title: "PERFECT FOR",
        description:
          "MSME owners who want clarity on where their business stands and what to do next.",
      },
      {
        title: "BUSINESS PROOF",
        description:
          "An interactive 3-hour workshop built around practical business frameworks and an 8-Pillar Business Health Diagnostic.",
      },
    ],
    // Aliases
    title1:
      "Most businesses don’t have a growth problem. They have a clarity problem.",
    problem:
      "The Business Clarity Workshop helps founders step back from daily firefighting, assess where their business truly stands, identify what’s holding it back, and know what to focus on next through our 8-Pillar Business Clarity Diagnostic.",
    identity: "Key Takeaways",
    points: [
      "8-Pillar Business Clarity Diagnostic",
      "Business Frameworks",
      "Clarity on What Matters Most",
      "Visibility into Your Biggest Constraint",
      "Personalised Clarity Report",
    ],
    audience:
      "MSME owners who want clarity on where their business stands and what to do next.",
    proof:
      "An interactive 3-hour workshop built around practical business frameworks and an 8-Pillar Business Health Diagnostic.",
  },
  {
    id: 2,
    number: "02",
    category: "The Business OPD™",
    title: "A Structured Clarity Diagnosis for Founders & Entrepreneurs",
    subcategory:
      "One focused diagnosis. A clear prescription. Actionable next steps.",
    description:
      "In a focused 90-minute Business OPD™, we look beyond the symptoms to understand what’s really happening in your business, where the gaps are, and what deserves your attention first.",
    image: opd,
    cta: "Book a Diagnostic",
    ctaUrl: "https://businessopd.nbbs.in/",
    primaryIdentity: {
      title: "Key Takeaways",
      points: [
        "Business check-in & current situation analysis",
        "Business symptom analysis",
        "Root cause diagnosis",
        "One-Page Business Diagnosis Report",
        "Actionable next-step roadmap",
      ],
    },
    secondaryIdentity: {
      title: "We Identify",
      points: [
        "Where you’re stuck",
        "What’s not working",
        "What’s costing you",
        "What needs fixing first",
      ],
    },
    perfectFor:
      "MSME founders who need clarity on what’s holding their business back.",
    businessProof: "150+ Business Diagnostics Delivered",
    highlights: [
      {
        title: "PERFECT FOR",
        description:
          "MSME founders who need clarity on what’s holding their business back.",
      },
      {
        title: "BUSINESS PROOF",
        description: "150+ Business Diagnostics Delivered",
      },
    ],
    // Aliases
    title1:
      "One focused diagnosis. A clear prescription. Actionable next steps.",
    problem:
      "In a focused 90-minute Business OPD™, we look beyond the symptoms to understand what’s really happening in your business, where the gaps are, and what deserves your attention first.",
    identity: "Key Takeaways",
    points: [
      "Business check-in & current situation analysis",
      "Business symptom analysis",
      "Root cause diagnosis",
      "One-Page Business Diagnosis Report",
      "Actionable next-step roadmap",
    ],
    identity1: "",
    points2: [
      "Where you’re stuck",
      "What’s not working",
      "What’s costing you",
      "What needs fixing first",
    ],
    audience:
      "MSME founders who need clarity on what’s holding their business back.",
    proof: "150+ Business Diagnostics Delivered",
  },
  {
    id: 3,
    number: "03",
    category: "Incentiwise",
    title: "Incentives Made Intelligent",
    subcategory:
      "Track sales, tasks, targets, and incentive programs from one transparent platform - with live dashboards every role can trust.",
    description:
      "Incentive management becomes complicated as teams, targets, rules, and payouts grow. Manual calculations and scattered data create errors, disputes, and a lack of visibility for both managers and employees.",
    image: incentive,
    cta: "Explore Incentiwise",
    ctaUrl: "https://incentiwise.nbbs.in/",
    primaryIdentity: {
      title: "Key Takeaways",
      points: [
        "Automated Incentive Calculations",
        "Flexible Incentive Rule Builder",
        "Goal & Performance Tracking",
        "Employee & Channel Partner Management",
        "Recovery & Clawback Management",
        "Transparent Incentive Visibility",
        "WhatsApp & Email Notifications",
        "Live Dashboards & Analytics",
        "Monthly Incentive Vouchers",
        "Reports & Audit Trail",
      ],
    },
    perfectFor: "Built for founders and growing teams who value transparency",
    businessProof:
      "30% fewer incentive disputes. Save hours on complex incentive calculations.",
    highlights: [
      {
        title: "PERFECT FOR",
        description:
          "Built for founders and growing teams who value transparency",
      },
      {
        title: "BUSINESS PROOF",
        description:
          "30% fewer incentive disputes. Save hours on complex incentive calculations.",
      },
    ],
    // Aliases
    title1:
      "Track sales, tasks, targets, and incentive programs from one transparent platform - with live dashboards every role can trust.",
    problem:
      "Incentive management becomes complicated as teams, targets, rules, and payouts grow. Manual calculations and scattered data create errors, disputes, and a lack of visibility for both managers and employees.",
    identity: "Key Takeaways",
    points: [
      "Automated Incentive Calculations",
      "Flexible Incentive Rule Builder",
      "Goal & Performance Tracking",
      "Employee & Channel Partner Management",
      "Recovery & Clawback Management",
      "Transparent Incentive Visibility",
      "WhatsApp & Email Notifications",
      "Live Dashboards & Analytics",
      "Monthly Incentive Vouchers",
      "Reports & Audit Trail",
    ],
    audience: "Built for founders and growing teams who value transparency",
    proof:
      "30% fewer incentive disputes. Save hours on complex incentive calculations.",
  },
];

