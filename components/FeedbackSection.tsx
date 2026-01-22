"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { useEffect } from "react"

export function FeedbackSection() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement("script")
    script.src = "//embed.typeform.com/next/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]')
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section id="feedback" className="relative min-h-screen bg-white py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <BlurFade delay={0.2} direction="up" className="text-center mb-12">
          <TextAnimate
            as="h2"
            by="word"
            animation="blurInUp"
            delay={0.1}
            className="mb-4 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
          >
            Feedback
          </TextAnimate>
          <TextAnimate
            by="word"
            animation="fadeIn"
            delay={0.2}
            className="text-lg md:text-xl text-gray-600"
          >
            Your voice matters. Help us serve the community better.
          </TextAnimate>
        </BlurFade>

        <BlurFade delay={0.4} direction="up" className="mt-12">
          <div
            data-tf-live="01KFKK6456XV5084F5127AZGQ0"
            style={{ width: "100%", height: "600px" }}
            className="rounded-lg overflow-hidden"
          />
        </BlurFade>
      </div>
    </section>
  )
}
