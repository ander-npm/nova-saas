import { Sun, Moon } from "lucide-react"
import { useTheme } from "../../hooks/use-theme"
import { Container } from "./container"

export function Navbar() {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-lg">
            <Container className="flex h-16 items-center justify-between">

                <div className="text-lg font-semibold tracking-tight">
                    NovaSaaS
                </div>

                <button
                    onClick={toggleTheme}
                    className="p-2 round-lg border border border-[ar(--color-border)] hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-color duration-300">
                    {theme === "dark" ? (
                        <Sun size={18} />
                    ) : (
                        <Moon size={18} />
                    )}
                </button>

            </Container>
        </header>
    )
}