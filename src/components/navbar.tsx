import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='flex justify-start max-h-1/6 bg-my-purple'>
            <Link href='/' className='p-5'>
                <Image priority src='/images/logo.png' alt='logo' width={200} height={200} />
            </Link>
            <Link href='/' className='text-my-pink text-lg font-light pl-10 pt-5 ml-auto'>About</Link>
            <Link href='/projects' className='text-my-pink text-lg font-light pl-10 pt-5'>Projects</Link>
            <Link href='/resume' className='text-my-pink text-lg font-light pl-10 pt-5'>Resume</Link>
            <Link href='/contact' className='text-my-pink text-lg font-light pl-10 pt-5 mr-20'>Contact</Link>
        </nav>
    );
}