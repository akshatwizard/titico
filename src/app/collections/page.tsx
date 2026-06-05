"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useCallback, useEffect, Suspense } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Section from "@/src/components/ui/section";
import Wrapper from "@/src/components/ui/wrapper";
import { FadeUp } from "@/src/lib/fade_up";
import { useSearchParams } from "next/navigation";
import {
    categories,
    Category,
    Product,
    products,
} from "@/src/constant/collections_data";

function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div ref={ref} className="relative w-full h-[92vh] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <Image
                    src="/images/banner/collections.png"
                    alt="Titico Collections — artisan weaving in Varanasi loom hall"
                    fill
                    className="object-cover saturate-0"
                    priority
                />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-b from-dark/60 via-dark/25 to-dark/85" />

            <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-7 h-px bg-gold" />
                            <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                Premium Fabric Collections
                            </span>
                            <div className="w-7 h-px bg-gold" />
                        </div>
                        <h1 className="font-yeseva text-cream text-5xl lg:text-[5.5rem] leading-[1.05] mb-6 max-w-4xl">
                            Fabrics designed <br />
                            <em className="text-gold not-italic">for every requirement</em>
                        </h1>
                        <p className="font-pop font-light text-[#c8bfb0] text-lg leading-relaxed max-w-xl">
                            Explore our collection of Jacquard, Linen, Mulberry, Tussar, Polyester, and Embroidery
                            fabrics crafted for Home & Fashion industries with a focus on quality, texture, and
                            refined finishing.
                        </p>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 rotate-90 origin-center mb-4">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    className="w-px h-10 bg-linear-to-b from-gold to-transparent"
                />
            </motion.div>
        </div>
    );
}


function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
    const [current, setCurrent] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrent(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        emblaApi?.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative h-60 overflow-hidden group/carousel">
            {/* Embla viewport */}
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {images.map((src, i) => (
                        <div key={i} className="relative flex-[0_0_100%] h-full">
                            <Image
                                src={src}
                                alt={`${alt} — view ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Prev / Next — only render if multiple images */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={scrollPrev}
                        aria-label="Previous image"
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-dark/70 text-cream flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-dark z-10"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    <button
                        onClick={scrollNext}
                        aria-label="Next image"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-dark/70 text-cream flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-dark z-10"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); emblaApi?.scrollTo(i); }}
                                aria-label={`Go to image ${i + 1}`}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current ? "bg-gold w-4" : "bg-white/60"}`}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Image count badge */}
            {images.length > 1 && (
                <div className="absolute top-3 right-3 bg-dark/80 text-cream font-mono text-[8px] tracking-widest uppercase px-2 py-0.5 rounded z-10">
                    {current + 1}/{images.length}
                </div>
            )}
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const [expanded, setExpanded] = useState(false);

    const images = product.images?.length ? product.images : [product.img];

    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden flex flex-col border border-[#ede8e0] hover:border-[#c6b89a] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.18)] transition-all duration-400">

            {/* ── Carousel ── */}
            <div className="relative">
                <ImageCarousel images={images} alt={product.name} />

                {/* Category pill — top left */}
                <div className="absolute top-3 left-3 z-10 flex gap-1.5">
                    <span className="bg-dark/85 backdrop-blur-sm text-cream font-mono text-[8px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
                        {product.category}
                    </span>
                </div>

                {/* Gradient scrim at bottom of image */}
                {/* <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black to-transparent pointer-events-none" /> */}
            </div>

            {/* ── Body ── */}
            <div className="px-5 pt-3 pb-5 flex flex-col flex-1">

// REPLACE WITH — keep tag, remove rating
<div className="flex items-center justify-end mb-2.5">
    <span className="font-mono text-[8px] uppercase tracking-[0.13em] text-gold bg-[#faf5ec] border border-[#ede3c8] px-2.5 py-0.5 rounded-full">
        {product.tag}
    </span>
</div>

                {/* Name + subtitle */}
                <h3 className="font-yeseva text-dark text-[1.25rem] leading-snug mb-0.5">
                    {product.name}
                </h3>
                <p className="font-pop text-[10px] text-[#aaa] uppercase tracking-wider mb-3">
                    {product.subtitle}
                </p>

                {/* Divider */}
                <div className="w-8 h-px bg-gold mb-3" />

                <p className="font-mono text-[10px] text-gold bg-[#faf5ec] border border-[#ede3c8] px-2.5 py-1 rounded-full w-fit mb-3">
                    {product.gsm}
                </p>
                {/* Description — collapsible */}
                <p className={`font-pop font-light text-[#666] text-[13px] leading-relaxed mb-3 transition-all duration-300 ${!expanded ? "line-clamp-2" : ""}`}>
                    {product.description}
                </p>

                {/* Highlight — visible when expanded */}
                {expanded && (
                    <p className="font-pop text-[12px] text-[#888] italic leading-relaxed mb-3 border-l-2 border-gold pl-3">
                        {product.highlight}
                    </p>
                )}

                {/* Use-case chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.useCase.map((u) => (
                        <span
                            key={u}
                            className="font-mono text-[9px] uppercase tracking-wide text-[#7a7060] bg-[#f5f0e8] px-2.5 py-1 rounded-full"
                        >
                            {u}
                        </span>
                    ))}
                </div>

                {/* Spacer so footer always sticks to bottom */}
                <div className="flex-1" />

                {/* Origin footer */}
                <div className="flex items-center gap-2 py-3 border-t border-[#f0ebe3]">
                    {/* Pin icon */}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C69B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="font-pop text-[10px] text-[#aaa]">{product.origin}</span>
                </div>

                {/* CTA row */}
                <div className="flex gap-2 mt-1">
                    <button className="flex-1 font-mono text-[10px] font-semibold tracking-wider uppercase py-2.5 bg-dark text-cream rounded-lg hover:bg-[#2e2b26] active:scale-[0.98] transition-all duration-200">
                        Request Quote
                    </button>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        aria-label={expanded ? "Show less" : "Show more"}
                        className="w-10 flex items-center justify-center border border-[#ddd5c5] rounded-lg text-dark hover:bg-[#f5f0e8] hover:border-[#c6b89a] active:scale-[0.97] transition-all duration-200"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

// AFTER — split into inner + outer

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialFilter = (searchParams.get("filter") as Category) ?? "All";
  const [active, setActive] = useState<Category>(initialFilter);

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* ── FILTER + GRID ── */}
      <Section className="bg-[#f3ede4]">
        <Wrapper>
          {/* Filter pills */}
          <FadeUp>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-mono text-[10px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 ${
                    active === cat
                      ? "bg-dark text-cream shadow-sm"
                      : "bg-white text-[#6b6258] border border-[#ddd5c5] hover:border-dark hover:text-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.04,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </Wrapper>
      </Section>
    </>
  );
}

export default function CollectionsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <ParallaxHero />

      {/* ── FILTER + GRID — wrapped in Suspense for useSearchParams ── */}
      <Suspense fallback={
        <Section className="bg-[#f3ede4]">
          <Wrapper>
            <div className="flex justify-center py-20 text-[#999] font-mono text-xs tracking-widest uppercase">
              Loading collections...
            </div>
          </Wrapper>
        </Section>
      }>
        <CollectionsContent />
      </Suspense>

      {/* ── CUSTOM ORDERS ── */}
      <Section className="bg-dark">
        <Wrapper>
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-px bg-gold" />
                  <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                    Bespoke Orders
                  </span>
                </div>
                <h2 className="font-yeseva text-cream text-4xl lg:text-5xl leading-[1.15] mb-6">
                  Don't see your{" "}
                  <em className="text-gold not-italic">requirement?</em>
                </h2>
                <p className="font-pop font-light text-[#b0a898] text-[17px] leading-relaxed mb-6">
                  We work with fashion houses, interior studios, and export buyers to develop
                  custom fabrics — specific counts, constructions, colourways, and finishes.
                  Minimum order quantities are flexible for established relationships.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Custom weave construction",
                    "Brand-matched colourways",
                    "Private label garment production",
                    "Sample development in 7–10 days",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-pop text-sm text-[#a09890]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 bg-gold text-dark rounded hover:bg-[#d4ad60] transition-colors duration-200">
                  Request a Sample
                </button>
              </div>
              <div className="relative h-80 lg:h-auto lg:aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/collections/collections.png"
                  alt="Fabric sampling at Titico"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-dark/30 to-transparent" />
              </div>
            </div>
          </FadeUp>
        </Wrapper>
      </Section>
    </main>
  );
}
