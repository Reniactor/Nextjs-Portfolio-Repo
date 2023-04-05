import './globals.css'
import NavBar from './components/navbar'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import ContactMe from './components/contactme'
import Footer from './components/footer'

export const metadata = {
  title: 'Arquimedes Portfolio',
  description: 'Created by Arquimedes Vasquez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className='text-color30 bg-color60 flex flex-col items-center'>
        <header className='h-screen w-full'>
        <NavBar/>
        </header>
          <AboutMe />
          <Skills />
          <ContactMe />
          <Footer />
        {children}
      </body>
    </html>
  )
}
