import localFont from 'next/font/local'

export const lexend = localFont({
  src: './Lexend-VariableFont.woff2',
  weight: '100 900', // range da variável
  style: 'normal',
  display: 'swap',
  variable: '--font-lexend',
})
