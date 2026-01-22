"use client"

import { useState, useEffect } from "react"
import { BlurFade } from "@/components/ui/blur-fade"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [inHero, setInHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroSection = document.getElementById("hero")
      const heroHeight = heroSection?.offsetHeight || window.innerHeight

      setScrolled(scrollY > 50)
      setInHero(scrollY < heroHeight - 100) // 100px buffer before switching
    }

    // Check initial state
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const textColor = inHero ? "text-white" : "text-gray-900"
  const hoverColor = inHero ? "hover:text-gray-200" : "hover:text-gray-700"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <BlurFade delay={0.1} direction="down">
            <button
              onClick={() => scrollToSection("hero")}
              className={`text-xl font-bold ${textColor} ${hoverColor} transition-colors`}
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Care
            </button>
          </BlurFade>

          <div className="hidden md:flex items-center space-x-8">
            <BlurFade delay={0.2} direction="down">
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors`}
              >
                About
              </button>
            </BlurFade>
            <BlurFade delay={0.3} direction="down">
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors`}
              >
                Projects
              </button>
            </BlurFade>
            <BlurFade delay={0.4} direction="down">
              <button
                onClick={() => scrollToSection("feedback")}
                className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors`}
              >
                Feedback
              </button>
            </BlurFade>
          </div>
        </div>
      </div>
    </nav>
  )
}
