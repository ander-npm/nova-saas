export type LicenseType = "personal" | "developer" | "extended"

export interface PricingPlan {
    id: string
    name: string
    price: number
    currency: string
    license: LicenseType
    description: string
    features: string[]
    featured?: boolean
}