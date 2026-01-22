"use client"

import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Text */}
        <div className="py-24 px-4 md:px-8 lg:px-16">
          <BlurFade delay={0.2} direction="left" className="flex flex-col h-full">
            <TextAnimate
              as="h2"
              by="word"
              animation="blurInUp"
              delay={0.1}
              className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
            >
              About
            </TextAnimate>

            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <BlurFade delay={0.4} direction="up" duration={0.8}>
                <TextAnimate
                  by="word"
                  animation="blurInUp"
                  delay={0.1}
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-4"
                >
                  Local First
                </TextAnimate>
                <TextAnimate
                  by="word"
                  animation="fadeIn"
                  delay={0.2}
                  className="block"
                >
                  We are a grassroots organization deeply rooted in the New York City community.
                  Our mission is driven by the needs of our neighbors, and our impact is felt
                  right here in the five boroughs.
                </TextAnimate>
              </BlurFade>

              <BlurFade delay={0.6} direction="up" duration={0.8}>
                <TextAnimate
                  by="word"
                  animation="blurInUp"
                  delay={0.1}
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-4"
                >
                  Volunteer Run
                </TextAnimate>
                <TextAnimate
                  by="word"
                  animation="fadeIn"
                  delay={0.2}
                  className="block"
                >
                  Every initiative, every project, and every act of service is powered by
                  dedicated volunteers who believe in making a difference. We operate with
                  passion, commitment, and the collective strength of our community.
                </TextAnimate>
              </BlurFade>

              <BlurFade delay={0.8} direction="up" duration={0.8}>
                <TextAnimate
                  by="word"
                  animation="blurInUp"
                  delay={0.1}
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-4"
                >
                  NYC Born & Bred
                </TextAnimate>
                <TextAnimate
                  by="word"
                  animation="fadeIn"
                  delay={0.2}
                  className="block"
                >
                  From the Bronx to Brooklyn, Manhattan to Queens, and Staten Island - we serve
                  all of New York City. Our understanding of local needs comes from being
                  part of the communities we serve.
                </TextAnimate>
              </BlurFade>
            </div>
          </BlurFade>
        </div>

        {/* Right Column - Image */}
        <BlurFade delay={0.3} direction="right" className="relative h-screen lg:h-auto lg:min-h-screen w-full">
          <Image
            src="/about.jpg"
            alt="NYC Waterfront Park"
            fill
            className="object-cover"
            priority
          />
        </BlurFade>
      </div>
    </section>
  )
}
