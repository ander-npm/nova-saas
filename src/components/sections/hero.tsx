import { Container } from "../layout/container"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { fadeUp } from "../../utils/animations"

export function Hero() {
    return (
        <section className="relative py-32 md:py-40">
            <Container className="text-center">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >

                    <h1 className="text-5xl md:text-6xl text-center font-bold tracking-tight leading-tight">
                        Built your SaaS
                        <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            fastar than ever
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
                        A minimal, modern and professional landing template built with React and TailwindCSS.
                    </p>

                    <div className="mt-8 flex justify-center gap-4">
                        <Button>
                            Get Started
                        </Button>

                        <Button variant="secondary">
                            Live Preview
                        </Button>
                    </div>
                </motion.div>
            </Container>

            <div className="absolute inset-0 -z-10 flex overflow-hidden">
                <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-[140px]" />
            </div>
        </section >
    )
}