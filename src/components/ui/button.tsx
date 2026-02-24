import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary"
}

export function Button({
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                "px-6 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 hover:scale-[1.02]",

                variant === "primary" &&
                "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 focus:ring-indigo-500",

                variant === "secondary" &&
                "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 focus:ring-zinc-400",

                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}