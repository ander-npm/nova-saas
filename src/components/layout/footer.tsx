import { Container } from "./container"

export function Footer() {
    return (
        <footer className="border-t bperder-[var(--color-border)] py-12">
            <Container className="flex flex-col md:flex-row items-center justify-between gp-6">

                <div className="text-sm text-[var(--color-muted)]">
                    © {new Date().getFullYear()} NovaSaaS. All rights reserved.
                </div>

                <div className="flex gap-6 text-sm text-[var(--color-muted)]">
                    <a href="#" className="hover:text-[var(--color-text)] transition-colors">
                        Privacy
                    </a>
                    <a href="#" className="hover:text-[var(--color-text)] transition-colors">
                        Terms
                    </a>
                    <a href="#" className="hover:text-[var(--color-text)] transition-colors">
                        Contact
                    </a>
                </div>

            </Container>
        </footer>
    )
}