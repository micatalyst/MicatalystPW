import '@/styles/global.scss'
import '@/lib/fontawesome'
import Header from '@/components/Header'
import { ScrollToTop } from '@/lib/ScrollToTop'
import LenisWrapper from '@/lib/LenisWrapper'
import CustomCursor from '@/components/CustomCursor'

import { satoshi } from './fonts/satoshi/satoshi'
import { lexend } from './fonts/lexend/lexend'
import { inter } from './fonts/inter/inter'

export const metadata = {
  title: 'Micatalyst | Frontend Developer',
  description:
    'Frontend-focused developer with experience across the stack, building and delivering real-world projects from concept to deployment',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Portfolio', 'Contacts', 'UX'],
  openGraph: {
    title: 'Miguel | Frontend Developer',
    description:
      'Frontend-focused developer with experience across the stack, building and delivering real-world projects from concept to deployment',
    url: 'https://micatalyst.pt',
    siteName: 'Micatalyst',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${lexend.variable} ${inter.variable}`}>
        <LenisWrapper>
          {/* <PageTransition> */}
          <Header />
          <ScrollToTop />
          {children}
          {/* </PageTransition> */}
        </LenisWrapper>
        {/* <CustomCursor /> */}
      </body>
    </html>
  )
}
