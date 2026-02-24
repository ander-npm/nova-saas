import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { fadeUp } from "../../utils/animations"

interface Props {
    children: React.ReactNode
}

export function AnimateOnScroll({ children }: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 1.0 }}
        >
            {children}
        </motion.div>
    )
}