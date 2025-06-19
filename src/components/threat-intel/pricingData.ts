
export interface PricingPlan {
  title: string;
  price: string;
  priceDetail: string;
  features: string[];
  gradient: string;
  iconColor: string;
  popular: boolean;
  billingFrequency?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$499",
    priceDetail: "/mo",
    billingFrequency: "$499 billed every month",
    features: [
      "10 feeds/month", 
      "API + CSV access", 
      "Daily breach rollups", 
      "3 watchlists", 
      "Email support"
    ],
    gradient: "from-amber-500 to-orange-500",
    iconColor: "text-amber-500",
    popular: false
  },
  {
    title: "Growth",
    price: "$1,299",
    priceDetail: "/mo",
    billingFrequency: "$1,299 billed every month",
    features: [
      "100 feeds/month",
      "API, JSON, STIX, CSV",
      "Real-time alerts + webhooks",
      "Unlimited watchlists",
      "Slack + email support"
    ],
    gradient: "from-orange-500 to-amber-600",
    iconColor: "text-orange-400",
    popular: true
  },
  {
    title: "Ultimate",
    price: "Custom",
    priceDetail: "",
    billingFrequency: "Custom pricing",
    features: [
      "Unlimited feeds",
      "Dedicated analyst support",
      "24/7 uptime SLA",
      "Feed customization",
      "Threat intel advisory sessions"
    ],
    gradient: "from-amber-500 to-yellow-600",
    iconColor: "text-amber-400",
    popular: false
  }
];
