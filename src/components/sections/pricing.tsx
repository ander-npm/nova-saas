import { Container } from "../layout/container"
import { Button } from "../ui/button"
import { AnimateOnScroll } from "../ui/animate-on-scroll"
import { pricingPlan } from "../../data/pricing"

export function Pricing() {
    return (
        <section className="py-24 border-t border-[var(--color-border)]">
            <Container>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Launch Your SaaS Today
                    </h2>

                    <p className="mt-4 text-[var(--color-muted)]">
                        One-time payment. Lifetime access.
                    </p>
                </div>

                <AnimateOnScroll>
                    <div className="mt-16 max-w-xl mx-auto">
                        <div className="relative p-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">

                            <h3 className="text-2xl font-semibold text-center">
                                {pricingPlan.name}
                            </h3>

                            <div className="mt-6 text-5xl font-bold text-center">
                                {pricingPlan.currency}{pricingPlan.price}
                            </div>

                            <p className="mt-3 text-center text-sm text-[var(--color-muted)]">
                                {pricingPlan.description}
                            </p>

                            <ul className="mt-8 space-y-3">
                                {pricingPlan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-sm text-[var(--color-foreground)]"
                                    >
                                        ✓ {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className="mt-8 w-full"
                                onClick={() => window.open("https://andersuspenso.gumroad.com/l/nova-saas")}>
                                Buy Now
                            </Button>

                            <p className="mt-4 text-xs text-center text-[var(--color-muted)]">
                                ✔ Instant download
                                ✔ No subscription
                            </p>

                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    )
}