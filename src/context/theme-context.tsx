import { createContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

interface ThemeContextProps {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "dark",
    toggleTheme: () => { },
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark")

    // Detecta tema salvo ou preferência do sistema
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null

        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            setTheme(systemPrefersDark ? "dark" : "light")
        }
    }, [])

    // Aplica classe no Html
    useEffect(() => {
        const root = document.documentElement
        root.classList.remove("dark", "light")
        root.classList.add(theme)

        localStorage.setItem("theme", theme)
    }, [theme])

    function toggleTheme() {
        setTheme(prev => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}