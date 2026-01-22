"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <BlurFade delay={0.1} direction="up">
            <div>
              <TextAnimate
                by="word"
                animation="fadeIn"
                delay={0.1}
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Care
              </TextAnimate>
              <p className="text-white-400 text-sm">
                Volunteer Run | Grassroots | NYC
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} direction="up" className="md:text-right">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sections</h3>
              <ul className="space-y-2 text-sm text-gray-400 md:flex md:flex-col md:items-end">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("feedback")}
                    className="hover:text-white transition-colors"
                  >
                    Feedback
                  </button>
                </li>
              </ul>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.4} direction="up">
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Care. All rights reserved.</p>
          </div>
        </BlurFade>
      </div>
    </footer>
  )
}
