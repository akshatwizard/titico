import Section from './ui/section'
import Wrapper from './ui/wrapper'
import SliderWrapper from './slider_wrapper'
import { EmblaOptionsType } from 'embla-carousel'
import Card from './card'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { data } from '../constant/product_data'

export default function CardSlider() {
    const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true }

    return (
        <Section className="bg-white overflow-hidden py-16">

            {/* ── Header ── */}
            <div className="flex flex-col items-center text-center px-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-px bg-gold" />
                    <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-gold">
                        Export Collection
                    </span>
                    <div className="w-7 h-px bg-gold" />
                </div>
                <h2 className="font-play text-dark text-3xl lg:text-4xl font-medium leading-tight mb-2">
                    Top Exported <em className="italic text-gold">Fabrics</em>
                </h2>
                <p className="text-sub text-sm max-w-sm leading-tight">
                    Premium-quality fabrics crafted for fashion, furnishing, upholstery, and global textile markets.
                </p>
            </div>

            {/* ── Nav row ── */}
            <div className="flex items-center justify-between px-6 max-w-7xl mx-auto mb-4">
                <span className="font-mono text-[9px] font-semibold tracking-[0.12em] uppercase text-[#888]">
                    Drag to explore
                </span>
            </div>

            {/* ── Slider ── */}
            <SliderWrapper options={OPTIONS} className="gap-4 px-6">
                {data.map((item, idx) => (
                    <Card
                        key={idx}
                        idx={idx}
                        className="relative rounded-xl overflow-hidden shrink-0 w-60 h-72 group cursor-pointer"
                    >
                        <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(20,16,10,0.92)_0%,transparent_100%)] z-10" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-4">

                            {/* Category tag */}
                            <span className="inline-block font-mono text-[8px] font-semibold tracking-[0.12em] uppercase text-gold bg-[rgba(200,163,90,0.15)] border border-[rgba(200,163,90,0.35)] rounded px-2 py-0.5 mb-2.5">
                                {item.category}
                            </span>

                            {/* Name */}
                            <div className="font-play text-[#f0ede8] text-[15px] font-medium leading-tight mb-2">
                                {item.name}
                            </div>

                            {/* GSM highlight */}
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-px bg-gold/60" />
                                <span className="font-mono text-[10px] font-bold tracking-[0.12em] uppercase text-gold">
                                    {item.gsm}
                                </span>
                            </div>

                        </div>

                        {/* Hover arrow */}
                        <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-[rgba(249,246,241,0.9)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <ArrowRight size={11} className="text-dark -rotate-45" />
                        </div>
                    </Card>
                ))}
            </SliderWrapper>

            {/* ── See all CTA ── */}
            <div className="flex justify-center mt-10 px-6">
                <Link
                    href="/collections"
                    className="font-mono text-xs font-semibold tracking-widest uppercase px-6 py-3 border border-dark/20 text-dark rounded hover:bg-dark hover:text-cream hover:border-dark transition-all duration-200 flex items-center gap-2.5"
                >
                    <ArrowRight size={12} />
                    View all collections
                </Link>
            </div>

        </Section>
    )
}
