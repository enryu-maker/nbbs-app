export interface GoogleReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number; // 1-5
  review: string;
  timeAgo: string;
}

export const googleReviews: GoogleReviewItem[] = [
  {
    id: "gr-1",
    name: "Rohit Malhotra",
    role: "Founder, Precision Auto Components",
    rating: 5,
    review:
      "NBBS helped us see exactly where our cash was getting stuck. Within two quarters our working capital cycle improved and the team finally had a clear playbook to follow.",
    timeAgo: "2 weeks ago",
  },
  {
    id: "gr-2",
    name: "Ayesha Khan",
    role: "Director, Khan Textiles",
    rating: 5,
    review:
      "What stood out was how practical the diagnosis was. No generic advice — they mapped our exact bottlenecks and stayed with us through implementation, not just strategy slides.",
    timeAgo: "1 month ago",
  },
  {
    id: "gr-3",
    name: "Vikram Shetty",
    role: "CEO, Shetty Engineering Works",
    rating: 5,
    review:
      "Our team was skeptical about hiring consultants again after a bad experience elsewhere, but NBBS earned trust fast. Clear communication, honest timelines, real results.",
    timeAgo: "1 month ago",
  },
  {
    id: "gr-4",
    name: "Neha Kulkarni",
    role: "Co-founder, Kulkarni Foods",
    rating: 5,
    review:
      "The founder's workshop alone was worth it, but the ongoing support afterward is what actually moved the needle for our business operations and hiring.",
    timeAgo: "2 months ago",
  },
  {
    id: "gr-5",
    name: "Suresh Iyer",
    role: "Owner, Iyer Plastics",
    rating: 4,
    review:
      "Solid process improvements and a very structured approach to problem solving. Took a little time to align schedules, but the outcome justified the patience.",
    timeAgo: "3 months ago",
  },
  {
    id: "gr-6",
    name: "Pooja Deshmukh",
    role: "Founder, Deshmukh Logistics",
    rating: 5,
    review:
      "From diagnosis to execution, everything felt grounded in our actual numbers. We now have systems in place that our managers can run without us hovering over them.",
    timeAgo: "3 months ago",
  },
];