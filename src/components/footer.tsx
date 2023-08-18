import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='absolute bottom-0 bg-gray-100 h-18 w-full pt-2 pb-1'>
            <div className='flex flex-col justify-center'>
                <div className='flex justify-center mb-3'>
                    <a href='https://www.linkedin.com/in/samcordry' className='mr-2' target='_blank'>
                        <Image src="/images/linkedin-logo.png" alt="Linkedin Logo" width={40} height={16} />
                    </a>
                    <a href='https://www.github.com/Sam-Cordry' className='ml-2' target='_blank'>
                        <Image src="/images/github-logo.png" alt="GitHub Logo" width={40} height={16} />
                    </a>
                </div>
                <Link href='/contact' className='mx-auto'>Contact Me</Link>
            </div>
        </footer>
    )
}