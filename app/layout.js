import "./globals.css"
import "@/styles/index.scss"
import {
  Baloo,
  BungeeOutline,
  IndieFlower,
  JosephineSans,
  RubikMonoOne,
  inter,
  openSans,
} from "@/public/fonts"

import Curve from "@/components/curve/page-transition-curve"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Indie+Flower&family=Inter:wght@100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Luckiest+Guy&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik+Mono+One&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className={" w-screen overflow-x-hidden"}>
        <Curve>{children}</Curve>
      </body>
    </html>
  )
}
