"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { AboutSection } from "@/components/AboutSection"
import { Navbar } from "@/components/Navbar"
import { FeedbackSection } from "@/components/FeedbackSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Force play on mobile Safari
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, try again on first user interaction
          const handleInteraction = () => {
            video.play()
            document.removeEventListener('touchstart', handleInteraction)
            document.removeEventListener('click', handleInteraction)
          }
          document.addEventListener('touchstart', handleInteraction, { once: true })
          document.addEventListener('click', handleInteraction, { once: true })
        })
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white/80">
          {/* Main Title "Care" - Large serif font with fade in */}
          <BlurFade delay={0.2} duration={1.2} className="mb-6">
            <TextAnimate
              as="h1"
              by="character"
              animation="blurInUp"
              delay={0.3}
              className="text-7xl md:text-9xl lg:text-9xl xl:text-9xl font-thin tracking-tight opacity-80"
            >
              Care
            </TextAnimate>
          </BlurFade>

          {/* Subtitle "Volunteer Run | Grassroots | NYC" - Simple fade in */}
          <BlurFade delay={0.6} duration={1.0} className="mb-4">
            <TextAnimate
              as="div"
              by="word"
              animation="fadeIn"
              delay={0.2}
              className="text-md md:text-2xl lg:text-3xl font-light tracking-wide opacity-70"
            >
              Volunteer Run | Grassroots | NYC
            </TextAnimate>
          </BlurFade>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Current Project Section */}
      <section id="projects" className="relative min-h-screen bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Image */}
          <BlurFade delay={0.3} direction="left" className="relative h-screen lg:h-auto lg:min-h-screen w-full">
            <Image
              src="/volunteer.jpg"
              alt="Volunteers"
              fill
              className="object-cover"
              priority
            />
          </BlurFade>

          {/* Right Column - Content */}
          <div className="py-24 px-4 md:px-8 lg:px-16">
            <BlurFade delay={0.2} direction="right" className="flex flex-col h-full">
              <TextAnimate
                as="h2"
                by="word"
                animation="blurInUp"
                delay={0.1}
                className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
              >
                Giving out health kits
              </TextAnimate>

              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <BlurFade delay={0.4} direction="up" duration={0.8}>
                  <TextAnimate
                    by="word"
                    animation="fadeIn"
                    delay={0.2}
                    className="block"
                  >
                    We drop different health kits depending on feedback and what the community wants.
                    Our approach is community-driven, ensuring we provide exactly what's needed when it's needed.
                  </TextAnimate>
                </BlurFade>

                <BlurFade delay={0.6} direction="up" duration={0.8}>
                  <TextAnimate
                    by="word"
                    animation="fadeIn"
                    delay={0.2}
                    className="block"
                  >
                    This month, we're focusing on hygiene kits - essential personal care items that help
                    maintain dignity and health in our communities.
                  </TextAnimate>
                </BlurFade>

                <BlurFade delay={0.8} direction="up" duration={0.8}>
                  <TextAnimate
                    by="word"
                    animation="blurInUp"
                    delay={0.1}
                    className="text-xl font-semibold text-gray-900 block"
                  >
                    Every kit makes a difference. Every distribution builds community.
                  </TextAnimate>
                </BlurFade>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
