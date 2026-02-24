import { Container } from "../layout/container"
import { AnimateOnScroll } from "../ui/animate-on-scroll"

export function SocialProof() {
    return (
        <section className="py-16 border-t border-[var(--color-border)]">
            <Container>
                <AnimateOnScroll>
                    <p className="text-center text-sm text-[var(--color-muted)] uppercase tracking-wider">
                        Trusted by modern teams
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-8 text-[var(--color-muted)] text-lg font-medium">
                        <span>Acme</span>
                        <span>NovaTech</span>
                        <span>DevCore</span>
                        <span>Cloudify</span>
                        <span>NextLabs</span>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    )
}