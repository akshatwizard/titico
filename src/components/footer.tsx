import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import AnimatedDiv from './ui/motion_div'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {

  const quickLinks = [
    { label: "Home",        href: "/" },
    { label: "About",       href: "/legacy" },
    { label: "Products",    href: "/collections" },
    { label: "Collections", href: "/collections" },
    { label: "Contact",     href: "/contact" },
  ]

 const collections = [
  { label: "Jacquard",   href: "/collections?filter=Jacquard" },
  { label: "Linen",      href: "/collections?filter=Linen" },
  { label: "Mulberry",   href: "/collections?filter=Mulberry" },
  { label: "Technical",  href: "/collections?filter=Technical" },
  { label: "Polyester",  href: "/collections?filter=Polyester" },
  { label: "Tussar",     href: "/collections?filter=Tussar" },
  { label: "Embroidery", href: "/collections?filter=Embroidery" },
]

  return (
    <Section className='bg-dark border-t border-white/10'>
      <Wrapper className='pb-0!'>
        <footer className='w-full py-8'>

          {/* Top Footer */}
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 border-b border-white/10 pb-6'>

            {/* Brand */}
            <AnimatedDiv idx={0}>
              <div className='space-y-3'>
                <Image
                  src={"/images/logo/logo.png"}
                  width={150}
                  height={64}
                  alt="Titico Textiles"
                  className={`w-24 h-auto transition-all duration-300 ease-in-out`}
                />
                <div>
                  <h2 className='text-xl text-white tracking-wide'>
                    TITICO TEXTILES
                  </h2>
                  <div className='w-10 h-px bg-gold mt-2'></div>
                </div>
                <p className='text-sm leading-6 text-zinc-400 max-w-xs'>
                  Varanasi, Uttar Pradesh, India
                  <br />
                  info@titicoexports.com
                </p>
              </div>
            </AnimatedDiv>

            {/* Quick Links */}
            <AnimatedDiv idx={1}>
              <div className='space-y-3'>
                <div>
                  <h3 className='uppercase tracking-[0.2em] text-zinc-300'>
                    Quick Links
                  </h3>
                  <div className='w-8 h-px bg-gold/50 mt-2'></div>
                </div>
                <ul className='space-y-1.5'>
                  {quickLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className='text-sm text-zinc-400 hover:text-gold transition-colors duration-300'
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedDiv>

            {/* Collections */}
            <AnimatedDiv idx={2}>
              <div className='space-y-3'>
                <div>
                  <h3 className='uppercase tracking-[0.2em] text-zinc-300'>
                    Collections
                  </h3>
                  <div className='w-8 h-px bg-gold/50 mt-2'></div>
                </div>
                <ul className='space-y-1.5'>
                  {collections.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className='text-sm text-zinc-400 hover:text-gold transition-colors duration-300'
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedDiv>

            {/* Social */}
            <AnimatedDiv idx={3}>
              <div className='space-y-3'>
                <div>
                  <h3 className='uppercase tracking-[0.2em] text-zinc-300'>
                    Follow
                  </h3>
                  <div className='w-8 h-px bg-gold/50 mt-2'></div>
                </div>
                <div className='flex items-center gap-2'>
                  <Link
                    href="https://www.instagram.com/titicoexports/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-gold hover:border-gold transition-all duration-300'
                  >
                    <Instagram size={15} />
                    <span className='sr-only'>Instagram</span>
                  </Link>
                </div>
              </div>
            </AnimatedDiv>

          </div>

          {/* Bottom Footer */}
          <div className='pt-4 flex md:flex-row flex-col items-center justify-between gap-2'>
            <p className='text-xs text-zinc-500 text-center md:text-left'>
              © {new Date().getFullYear()} Titico Textiles · All rights reserved
            </p>
            <div className='flex items-center gap-2 text-xs text-zinc-500 flex-wrap justify-center'>
              <Link
                href="/privacy-policy"
                className='hover:text-gold transition-colors duration-300'
              >
                Privacy Policy
              </Link>
              <span className='text-white/10'>•</span>
              <Link
                href="/terms"
                className='hover:text-gold transition-colors duration-300'
              >
                Terms
              </Link>
              <span className='text-white/10'>•</span>
              <Link
                href="/sitemap.xml"
                className='hover:text-gold transition-colors duration-300'
              >
                Sitemap
              </Link>
            </div>
          </div>

        </footer>
      </Wrapper>
    </Section>
  )
}
