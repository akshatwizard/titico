'use client'
import { useState } from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { data } from '../constant/collections'

const ALL = 'All'

export default function Collections() {
    const [active, setActive] = useState<string>(ALL)

    const tabs = [ALL, ...data.map(d => d.name)]

    const filtered = active === ALL
        ? data
        : data.filter(d => d.name === active)

    // Items 01 & 05 (index 0 and 4) are featured (span 2 cols)
    const isFeatured = (idx: number) =>
        active === ALL && (idx === 0 || idx === data.length - 1)

    return (
        <Section className='bg-cream'>
            <Wrapper>

                {/* ── Header ── */}
                <div className='flex flex-col items-center text-center'>
                    <div className='flex items-center gap-3 mb-5'>
                        <div className='w-7 h-px bg-gold' />
                        <span className='font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-gold'>
                            Fabric Collections
                        </span>
                        <div className='w-7 h-px bg-gold' />
                    </div>
                    <h2 className='font-play text-gold text-3xl lg:text-4xl font-medium leading-tight mb-3'>
                        Our Fabric <em className='italic text-gold'>Collections</em>
                    </h2>
                    <p className='font-pop font-light text-sub text-sm max-w-md leading-relaxed'>
                        Crafted to meet the needs of global fashion, home textiles, and industrial markets.
                    </p>
                </div>

                {/* ── Filter tabs ── */}
                <div className='flex items-center justify-center gap-2 flex-wrap'>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`font-mono text-[10px] font-semibold tracking-widest uppercase px-5 py-2 rounded-full border transition-all duration-200 cursor-pointer ${active === tab
                                ? 'bg-gold text-cream border-gold'
                                : 'bg-transparent text-sub border-[rgba(28,26,23,0.18)] hover:border-gold hover:text-gold'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ── Grid ── */}
                <motion.div
                    layout
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
                >
                    <AnimatePresence mode='popLayout'>
                        {filtered.map((item, idx) => (
                            <motion.div
                                key={item.num}
                                layout
                                initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
                                className={`group bg-white border border-[rgba(28,26,23,0.08)] rounded-xl overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow duration-300 ${isFeatured(idx) ? 'lg:col-span-2' : ''
                                    }`}
                            >
                                {/* Image */}
                                <div className='relative overflow-hidden'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={800}
                                        height={500}
                                        className={`w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 ${isFeatured(idx) ? 'h-80' : 'h-64'
                                            }`}
                                    />
                                    {/* Num badge */}
                                    <span className='absolute top-3 left-3 font-play italic text-[11px] text-[#f0ede8] bg-[rgba(20,16,10,0.55)] rounded px-2 py-0.5'>
                                        {item.num}
                                    </span>
                                    {/* Category badge */}
                                    <span className='absolute top-3 right-3 font-mono text-[8px] font-semibold tracking-widest uppercase text-gold bg-[rgba(20,16,10,0.6)] border border-[rgba(200,163,90,0.35)] rounded px-2 py-0.5'>
                                        {item.badge}
                                    </span>
                                </div>

                                {/* Body */}
                                <div className='flex flex-col flex-1 p-4'>
                                    <h3 className={`font-play text-gold font-medium leading-snug mb-2 ${isFeatured(idx) ? 'text-[17px]' : 'text-[14px]'
                                        }`}>
                                        {item.title}
                                    </h3>
                                    <p className={`font-pop font-light text-[#888] leading-relaxed flex-1 ${isFeatured(idx) ? 'text-[12px]' : 'text-[11px]'
                                        }`}>
                                        {item.text}
                                    </p>

                                    {/* Footer */}
                                    <div className='flex items-center justify-between mt-3 pt-3 border-t border-[rgba(28,26,23,0.07)]'>
                                        <span className='font-mono text-[8px] font-semibold tracking-widest uppercase text-[#bbb]'>
                                            {item.name}
                                        </span>
                                        <div className='w-5.5 h-5.5 rounded-full bg-gold flex items-center justify-center group-hover:bg-gold transition-colors duration-200'>
                                            <ArrowUpRight size={10} className='text-cream' />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Wrapper>
        </Section>
    )
}