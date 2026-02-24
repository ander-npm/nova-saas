import type { PricingPlan } from "../types/pricing"

export const pricingPlan: PricingPlan = {
    id: "nova-template",
    name: "Nova SaaS Template",
    price: 12,
    currency: "$",
    license: "developer",
    description: "One-time payment. Use in unlimited personal projects.",
    features: [
        "Full source code",
        "Dark & Light mode",
        "Responsive layout",
        "Framer Motion animations",
        "Clean architecture",
    ]
}