import './globals.css';

export const metadata = {
  title: 'NewLetter',
  description: 'News from news-letter.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
