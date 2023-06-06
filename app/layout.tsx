import './globals.css'
import { Inter } from 'next/font/google'
import {FC, PropsWithChildren} from "react";
import {Metadata} from "next";
import Header from "@/app/components/layout/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'MAIN PAGE',
  description: 'NEXT JS LEARN APP BY 3AQARYAN',
  keywords: "site by 3aqaryan"
}
 const RootLayout:FC<PropsWithChildren> = ({children}) => {
  return (
      <html lang="en">
      <body className={inter.className}>
          <Header />
          {children}
      </body>
      </html>
  )
}
export default RootLayout
