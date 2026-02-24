import { Navbar } from "./components/layout/navbar"
import { Hero } from "./components/sections/hero"
import { Features } from "./components/sections/features"
import { Pricing } from "./components/sections/pricing"
import { SocialProof } from "./components/sections/social-proof"
import { Footer } from "./components/layout/footer"

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App