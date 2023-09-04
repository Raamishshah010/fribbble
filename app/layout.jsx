import '@styles/globals.css';

export const metadata = {
  title: 'Fribble',
  description: 'A Web-base platform to create your designing portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Pacifico&family=Permanent+Marker&family=Shadows+Into+Light&display=swap" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/mona-sans" rel="stylesheet" />
      </head>

      <body className='app'>{children}</body>
    </html>
  )
}
