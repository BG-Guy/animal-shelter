import {
  Bungee_Outline,
  Baloo_2,
  Indie_Flower,
  Inter,
  Josefin_Sans,
  Luckiest_Guy,
  Open_Sans,
  Playfair_Display,
  Rubik_Mono_One,
} from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-open-sans",
})

export const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-playfair-display",
})

export const RubikMonoOne = Rubik_Mono_One({
  weight: ["400"],
  variable: "--font-rubik-mono-one",
  subsets: ["latin"],
})

export const JosephineSans = Josefin_Sans({
  weight: ["700"],
  variable: "--font-josephine-sans",
  subsets: ["latin"],
})

export const LuckiestGuy = Luckiest_Guy({
  weight: ["400"],
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  style: "normal",
})

export const BungeeOutline = Bungee_Outline({
  weight: ["400"],
  variable: "--font-bungee-outline",
  subsets: ["latin"],
  style: "normal",
})

export const IndieFlower = Indie_Flower({
  weight: ["400"],
  variable: "--font-indie-flower",
  subsets: ["latin"],
  style: "normal",
})

export const Baloo = Baloo_2({
  weight: ["600"],
  variable: "--font-baloo",
  subsets: ["latin"],
})
