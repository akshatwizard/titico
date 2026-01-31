import React from 'react'
import Section from './ui/section'
import AnimatedDiv from './ui/motion_div'
import Link from 'next/link'

export default function Footer() {
    const footer: string[] = [
        "HOME",
        "ABOUT",
        "PRODUCTS",
        "COLLECTIONS",
        "BLOGS",
    ]
    return (
        <Section className='bg-dark'>
            <footer className='w-full py-8 flex md:flex-row flex-col items-center justify-between md:gap-0 gap-4'>
                <div className='flex items-center flex-wrap gap-1 justify-center'>
                    <span className='text-sm font-normal font-pop text-zinc-400 text-center inline-block'>
                        Copyright @ {new Date().getFullYear()} Titico Silks | All right are reserved |
                    </span>
                    {
                        footer.map((item, idx) => (
                            <AnimatedDiv idx={idx} key={idx} className='text-sm font-normal font-pop text-zinc-400'>
                                <Link href={"#"}>
                                    {item} |
                                </Link>
                            </AnimatedDiv>
                        ))
                    }
                </div>
                <span className='text-sm font-normal font-pop text-zinc-400'>
                    Design & Developed by <a href="#" className='underline italic text-blue-500'>WIZARDS</a>
                </span>
            </footer>
        </Section>
    )
}
