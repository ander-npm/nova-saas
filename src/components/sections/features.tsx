import { Code2, Zap, Shield } from "lucide-react"
import { Container } from "../layout/container"
import { AnimateOnScroll } from "../ui/animate-on-scroll"

const features = [
    {
        icon: Code2,
        title: "Clean Architecture",
        description:
            "Well strutured folders and reusable components built for scalability.",
    },
    {
        icon: Zap,
        title: "Blazing Fast",
        description:
            "Powered by Vite and optimized TailwindCSS for maximum performance.",
    },
    {
        icon: Shield,
        title: "Production Ready",
        description:
            "Professional structure, ESLint configured and ready for real projects.",
    },
]

export function Features() {
    return (
        <section className="py-24 border-t border-[var(--color-border)]">
            <Container>

                <div className="text-center max-w-2xl max-auto">
                    <h2 className="text-center max-w-2xl mx-auto">
                        Everything you need to launch
                    </h2>
                    <p className="mt-4-text-[var(--color-muted)]">
                        Desinged for developers who want a professional and scalable and SaaS landing page.
                    </p>
                </div>

                <AnimateOnScroll>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {features.map((feature, index) => {
                            const Icon = feature.icon

                            return (
                                <div
                                    key={index}
                                    className="group p-6 rounded-xl border border-[var(--color-border)] hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-500/10"
                                >
                                    <div className="mb-4 inline-flex p-3 rounded-lg bg-indigo-500/10 text-indigo-500 transition-300 group-hover:scale-110">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="text-lg font-semibold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </AnimateOnScroll>

            </Container>
        </section>
    )
}