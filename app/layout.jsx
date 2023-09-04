import '@styles/globals.css';

export const metadata = {
  title: 'Fribble',
  description: 'A Web-base platform to create your designing portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.cdnfonts.com/css/mona-sans" rel="stylesheet"/>

        <body className='app'>{children}</body>
    </html>
  )
}
