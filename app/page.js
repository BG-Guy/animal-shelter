"use client"
import { HeroSection } from "@/components/hero-section/hero-section"
import styles from "./page.module.scss"
import { SideMenu } from "@/components/SideMenu"
import { FadeWrapper } from "@/components/fade-wrapper"
import { AboutSection } from "@/components/about-section/about-section"
import { useScroll } from "framer-motion"
import { useEffect, useRef } from "react"
import { GallerySection } from "@/components/gallery-section/gallery-section"
import { DonateSection } from "@/components/donate-section/donate-section"
import { Footer } from "@/components/footer/footer"
import { Gap } from "@/components/gap"

export default function Home() {
  const { scrollY } = useScroll()
  const scrollYValue = useRef(0)

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      scrollYValue.current = latest
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <main className={styles.main}>
      <SideMenu />
      <FadeWrapper fadeFrom='bottom' />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <DonateSection />
      <Gap />
      <Footer />
    </main>
  )
}
