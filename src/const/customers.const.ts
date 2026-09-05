export type Result = {
  value: string;
  label: string;
};

export type Customer = {
  company: string;
  founder: string;
  challenge: string;
  solution: string;
  results: Result[];
  quote: string;
};

export const customers: Customer[] = [
  {
    company: "Shree Sales Corporation",
    founder: "SANJAY DIGHE, FOUNDER",

    challenge:
      "Manual commission tracking caused constant disputes and eroded field-team trust.",

    solution:
      "Business OPD diagnostic + Incentiwise rollout across 3 territories.",

    results: [
      {
        value: "30%",
        label: "Fewer commission disputes",
      },
      {
        value: "40%",
        label: "Revenue growth in 12 months",
      },
      {
        value: "100%",
        label: "Field rep adoption",
      },
    ],

    quote:
      "NBBS didn't just sell us a tool. They fixed how we think about our sales team first.",
  },

  {
    company: "Customer Two",
    founder: "SUMIT GANDHI, DIRECTOR",

    challenge:
      "Inconsistent quotes were causing pricing leaks and slow close cycles.",

    solution:
      "Standardized templates and approval workflow via Quotation.",

    results: [
      {
        value: "50%",
        label: "Faster quote turnaround",
      },
      {
        value: "18%",
        label: "Higher average tickets",
      },
      {
        value: "2x",
        label: "Conversion on pitches",
      },
    ],

    quote:
      "We look like a multinational firm now, even though we operate from a tier-2 city.",
  },

  // ADD NEW CUSTOMERS HERE
  {
    company: "ABC Industries",
    founder: "RAHUL SHARMA, CEO",

    challenge:
      "The company was struggling with inefficient internal processes.",

    solution:
      "Implemented a structured workflow and business diagnostic system.",

    results: [
      {
        value: "35%",
        label: "Improved efficiency",
      },
      {
        value: "25%",
        label: "Faster operations",
      },
      {
        value: "90%",
        label: "Team adoption",
      },
    ],

    quote:
      "The process helped us understand exactly where our business was losing time and money.",
  },
];