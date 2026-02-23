import '@/styles/global.scss'
//import '@/lib/fontawesome'
import Header from '@/components/Header'
import { ScrollToTop } from '@/lib/ScrollToTop'
import LenisWrapper from '@/lib/LenisWrapper'
import CustomCursor from '@/components/CustomCursor'

import { satoshi } from './fonts/satoshi'

export const metadata = {
  title: 'Micatalyst',
  description: 'Projects and CV showcase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={satoshi.variable}>
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
