import localFont from 'next/font/local'

export const inter = localFont({
  src: './Inter-VariableFont.woff2',
  weight: '100 900', // range da variável
  style: 'normal',
  display: 'swap',
  variable: '--font-inter',
})
