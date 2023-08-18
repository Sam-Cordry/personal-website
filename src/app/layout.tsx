import './globals.css';
import { Rosario } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const rosario = Rosario({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className={rosario.className}>{children}</main>
      <Footer />
    </div>
  )
}
