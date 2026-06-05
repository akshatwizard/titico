"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/src/components/ui/section';
import Wrapper from '@/src/components/ui/wrapper';
import { timeline } from '@/src/constant/legacy';
import { FadeUp } from '@/src/lib/fade_up';

const yearsInBusiness = new Date().getFullYear() - 1978;

/* ─────────────────────────────────────────
   PARALLAX HERO
   Image active · Video commented & ready to swap
───────────────────────────────────────── */
function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div ref={ref} className="relative w-full h-[92vh] overflow-hidden">

            {/* ── ACTIVE: Image background ── */}
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <Image
                    src="/images/banner/our_legacy.png"
                    alt="Titico — manufacturing and exporting fine fabrics since 1978"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* ── READY: Video background (uncomment when /videos/legacy-hero.mp4 is available) ──
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <video
                    src="/videos/legacy-hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
            </motion.div>
            ────────────────────────────────────────────────────────────────── */}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-dark/70 via-dark/30 to-dark/85" />

            {/* Content */}
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
                                Manufacturing & Export · Home &amp; Fashion
                            </span>
                            <div className="w-7 h-px bg-gold" />
                        </div>
                        <h1 className="font-yeseva text-cream text-5xl lg:text-[5.5rem] leading-[1.05] mb-6 max-w-4xl">
                            A Legacy of<br />
                            <em className="text-gold not-italic">Fine Fabrics</em>
                        </h1>
                        <p className="font-pop font-light text-[#c8bfb0] text-lg leading-relaxed max-w-2xl">
                            Engaged in manufacturing and exporting Fabrics and Made-ups for Home &amp; Fashion for over {yearsInBusiness} years — delivering to clients across the world.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Watermark numeral */}
            <div className="absolute right-8 bottom-16 font-yeseva text-[18rem] text-white/[0.07] select-none leading-none hidden lg:block pointer-events-none">
                1978
            </div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    className="w-px h-10 bg-linear-to-b from-gold to-transparent"
                />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
            </motion.div>
        </div>
    );
}

/* ─────────────────────────────────────────
   PARALLAX BAND — mid-page divider
───────────────────────────────────────── */
function ParallaxBand({ src, alt, children }: { src: string; alt: string; children?: React.ReactNode }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div ref={ref} className="relative w-full h-[40vh] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 scale-125">
                <Image src={src} alt={alt} fill className="object-cover saturate-0" />
            </motion.div>
            <div className="absolute inset-0 bg-dark/55" />
            {children && (
                <div className="absolute inset-0 flex items-center justify-center px-6">
                    {children}
                </div>
            )}
        </div>
    );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function LegacyPage() {

    return (
        <main>

            {/* ── 1. PARALLAX HERO ── */}
            <ParallaxHero />

            {/* ── 2. ABOUT US ── */}
            <Section className="bg-cream">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Image */}
                        <FadeUp>
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-2xl" />
                                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/legacy/img-1.png"
                                        alt="Titico manufacturing — fabric production"
                                        fill
                                        className="saturate-0 object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-4 left-4 bg-dark/90 backdrop-blur-sm rounded-lg px-4 py-3">
                                    <div className="font-mono text-[9px] text-gold uppercase tracking-widest mb-0.5">Est.</div>
                                    <div className="font-yeseva text-cream text-2xl">1978</div>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Text — About Us from PDF */}
                        <FadeUp delay={0.15}>
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-7 h-px bg-gold" />
                                    <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                        About Us
                                    </span>
                                </div>
                                <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15] mb-6">
                                    {yearsInBusiness} Years of{" "}
                                    <em className="text-gold not-italic">Manufacturing Excellence</em>
                                </h2>
                                <p className="font-pop font-light text-cont text-[17px] leading-relaxed mb-4">
                                    We are engaged in manufacturing and exporting Fabrics and Made-ups for "Home &amp; Fashion" from the last {yearsInBusiness} years, exporting to all over the world.
                                </p>
                                <p className="font-pop font-light text-cont text-[17px] leading-relaxed mb-6">
                                    The Company's present net worth is about 25 Million Dollars and it employs over 200 persons directly or indirectly. Continuous adoption of new technology has been the watchword of the Company — strengthening its diverse operations across state-of-the-art manufacturing units in Bihar, Karnataka and Uttar Pradesh.
                                </p>
                                <p className="font-pop font-light text-cont text-[17px] leading-relaxed mb-8">
                                    Keeping itself updated on fashion and market trends, the Company is today globally recognised for its deep understanding of Silk, Polyester, Linen and Cotton.
                                </p>

                                {/* Key facts */}
                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e4ddd4]">
                                    {[
                                        { val: "$25M+", lbl: "Net worth" },
                                        { val: "200+", lbl: "Employees" },
                                        { val: `${yearsInBusiness}+`, lbl: "Years of export" },
                                    ].map((s) => (
                                        <div key={s.lbl}>
                                            <div className="font-yeseva text-2xl text-dark">{s.val}</div>
                                            <div className="font-pop text-[11px] text-[#888] mt-0.5 tracking-wide">{s.lbl}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>

                    </div>
                </Wrapper>
            </Section>

            {/* ── 3. AWARDS & RECOGNITION ── */}
            <Section className="bg-[#f3ede4]">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Recognition
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15]">
                                Honoured at the <em className="text-gold not-italic">highest level</em>
                            </h2>
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            {
                                icon: "🏛️",
                                label: "Govt. of India",
                                title: "One Star Export House",
                                body: "Recognised by the Government of India for outstanding export performance and established global business presence.",
                            },
                            {
                                icon: "🏆",
                                label: "Prime Minister of India",
                                title: "National Export Award",
                                body: "Awarded the National Export Award by the Hon'ble Prime Minister of India in recognition of excellence in textile exports.",
                            },
                            {
                                icon: "🎖️",
                                label: "President of India",
                                title: "Best Export Performance Award",
                                body: "Presented the Best Export Performance Award by His Excellency the President of India for sustained best-in-class performance.",
                            },
                        ].map((award, i) => (
                            <FadeUp key={i} delay={0.08 * i}>
                                <div className="bg-white rounded-2xl p-7 border border-[#e4ddd4] hover:border-gold/40 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                                    <div className="text-4xl mb-5">{award.icon}</div>
                                    <div className="font-mono text-[9px] uppercase tracking-widest text-gold mb-2">{award.label}</div>
                                    <h3 className="font-yeseva text-dark text-xl mb-3 leading-snug">{award.title}</h3>
                                    <p className="font-pop font-light text-cont text-sm leading-relaxed flex-1">{award.body}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            {/* ── 4. PARALLAX BAND ── */}
            <ParallaxBand
                src="/images/banner/our_legacy_01.png"
                alt="Titico manufacturing floor"
            >
                <FadeUp>
                    <div className="text-center max-w-2xl">
                        <p className="font-yeseva text-cream text-3xl lg:text-4xl leading-[1.3]">
                            "Memorandum and adoption of new technology has been the watchword of the Company."
                        </p>
                    </div>
                </FadeUp>
            </ParallaxBand>

            {/* ── 5. VISION · MISSION · VALUES ── */}
            <Section className="bg-dark">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Our Foundation
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-cream text-4xl lg:text-5xl leading-[1.15]">
                                Vision, Mission <em className="text-gold not-italic">&amp; Values</em>
                            </h2>
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Vision */}
                        <FadeUp delay={0}>
                            <div className="border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-colors duration-300 h-full flex flex-col">
                                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center mb-6 shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a35a" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" /></svg>
                                </div>
                                <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">Vision</div>
                                <p className="font-pop font-light text-[#a09890] text-sm leading-relaxed flex-1">
                                    To manufacture products comparable to international standards, to be customer-focused and globally competitive through better quality, latest technology and continuous innovation together with taking responsibility for our environment.
                                </p>
                                <div className="mt-6 w-8 h-px bg-gold/40" />
                            </div>
                        </FadeUp>

                        {/* Mission — centrepiece */}
                        <FadeUp delay={0.1}>
                            <div className="border border-gold/35 rounded-2xl p-8 bg-gold/5 h-full flex flex-col">
                                <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center mb-6 shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a35a" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                                </div>
                                <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">Mission</div>
                                <ul className="space-y-4 flex-1">
                                    {[
                                        "To manufacture world-class products of outstanding quality that give our customers a competitive advantage through superior products and value.",
                                        "To encourage people's ownership, empowerment and working under team structure.",
                                        "To attain highest level of efficiency, integrity and honesty.",
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                                            <span className="font-pop font-light text-[#a09890] text-sm leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 w-8 h-px bg-gold/60" />
                            </div>
                        </FadeUp>

                        {/* Values */}
                        <FadeUp delay={0.2}>
                            <div className="border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-colors duration-300 h-full flex flex-col">
                                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center mb-6 shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a35a" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                                </div>
                                <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">Values</div>
                                <ul className="space-y-3 flex-1">
                                    {[
                                        "Customer's satisfaction and delight",
                                        "Superior quality of performance",
                                        "Concern for the environment and the community",
                                        "Passionate about excellence",
                                        "Fair to all — provide a safe workplace and promote healthy work habits",
                                    ].map((val, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 shrink-0" />
                                            <span className="font-pop font-light text-[#a09890] text-sm leading-relaxed">{val}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 w-8 h-px bg-gold/40" />
                            </div>
                        </FadeUp>

                    </div>
                </Wrapper>
            </Section>

            {/* ── 6. TIMELINE ── */}
            <Section className="bg-[#f3ede4]">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    How We Make It
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15]">
                                Our production <em className="text-gold not-italic">process</em>
                            </h2>
                        </div>
                    </FadeUp>

                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d8cfc4] hidden lg:block" />
                        <div className="flex flex-col">
                            {timeline.map((item, i) => {
                                const isLeft = item.side === "left";
                                return (
                                    <FadeUp key={i} delay={0.05 * i}>
                                        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start gap-6 lg:gap-0 py-10">
                                            <div className={`lg:pr-12 ${isLeft ? "lg:text-right" : "lg:opacity-0 lg:pointer-events-none"}`}>
                                                {isLeft && (
                                                    <>
                                                        <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1">{item.era}</div>
                                                        <h3 className="font-yeseva text-dark text-2xl mb-2">{item.title}</h3>
                                                        <p className="font-pop font-light text-cont text-sm leading-relaxed">{item.body}</p>
                                                    </>
                                                )}
                                            </div>
                                            <div className="flex flex-col items-center gap-2 lg:w-24 shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-dark border-4 border-gold flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-gold" />
                                                </div>
                                                <span className="font-yeseva text-sm text-dark">{item.year}</span>
                                            </div>
                                            <div className={`lg:pl-12 ${!isLeft ? "" : "lg:opacity-0 lg:pointer-events-none"}`}>
                                                {!isLeft && (
                                                    <>
                                                        <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1">{item.era}</div>
                                                        <h3 className="font-yeseva text-dark text-2xl mb-2">{item.title}</h3>
                                                        <p className="font-pop font-light text-cont text-sm leading-relaxed">{item.body}</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        {i < timeline.length - 1 && <div className="border-b border-[#d8cfc4] lg:hidden" />}
                                    </FadeUp>
                                );
                            })}
                        </div>
                    </div>
                </Wrapper>
            </Section>

            {/* ── 7. GLOBAL PRESENCE ── */}
            <Section className="bg-dark">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Our Presence
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-cream text-4xl lg:text-5xl leading-[1.15]">
                                Trusted across <em className="text-gold not-italic">the world</em>
                            </h2>
                            <p className="font-pop font-light text-[#a09890] text-base mt-4 max-w-xl mx-auto">
                                Titico is an over 4 decade old company. Our customers are spread across every major global market.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                        {[
                            {
                                region: "Americas",
                                emoji: "🌎",
                                countries: ["USA", "Canada"],
                            },
                            {
                                region: "Europe",
                                emoji: "🌍",
                                countries: ["UK", "Germany", "France", "Portugal", "Spain", "Greece"],
                            },
                            {
                                region: "Gulf & Middle East",
                                emoji: "🕌",
                                countries: ["Dubai", "Kuwait", "Jordan"],
                            },
                            {
                                region: "Asia & Africa",
                                emoji: "🌏",
                                countries: ["South Korea", "Japan", "Singapore", "South Africa", "Kenya"],
                            },
                        ].map((r, i) => (
                            <FadeUp key={i} delay={0.07 * i}>
                                <div className="border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors duration-300 h-full">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-xl">{r.emoji}</span>
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-gold">{r.region}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {r.countries.map((c) => (
                                            <li key={c} className="flex items-center gap-2.5">
                                                <div className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                                                <span className="font-pop text-sm text-[#c0b8b0]">{c}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp delay={0.15}>
                        <div className="flex items-center gap-4 border border-gold/20 rounded-xl px-6 py-4 bg-gold/5">
                            <span className="text-xl">🇮🇳</span>
                            <p className="font-pop text-sm text-[#a09890]">
                                Strong domestic presence across India, alongside our international export operations.
                            </p>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            {/* ── 8. MANUFACTURING ── */}
            <Section className="bg-cream">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Manufacturing
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15]">
                                Strength in <em className="text-gold not-italic">production</em>
                            </h2>
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                        {/* Left — units + fabric types */}
                        <FadeUp>
                            <div className="flex flex-col gap-6">

                                {/* Units */}
                                <div className="bg-dark rounded-2xl p-7">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-5">State of the Art Manufacturing Units</div>
                                    <div className="flex flex-col gap-4">
                                        {[
                                            { state: "Bihar", detail: "Fabric manufacturing" },
                                            { state: "Karnataka", detail: "Fabric manufacturing" },
                                            { state: "Uttar Pradesh", detail: "Fabric manufacturing" },
                                        ].map((loc) => (
                                            <div key={loc.state} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                                    <span className="font-yeseva text-cream text-lg">{loc.state}</span>
                                                </div>
                                                <span className="font-pop text-[11px] text-[#888]">{loc.detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Fabric expertise */}
                                <div className="bg-[#f3ede4] rounded-2xl p-7 border border-[#e4ddd4]">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">Fabric Expertise</div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {["Silk", "Polyester", "Linen", "Cotton"].map((f) => (
                                            <div key={f} className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-3 border border-[#e4ddd4]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                                <span className="font-yeseva text-dark text-base">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Right — looms + capacity */}
                        <FadeUp delay={0.1}>
                            <div className="flex flex-col gap-6">

                                {/* Loom types */}
                                <div className="bg-[#f3ede4] rounded-2xl p-7 border border-[#e4ddd4]">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">Loom Types</div>
                                    <div className="flex flex-col gap-3">
                                        {[
                                            { type: "Handloom", note: "Traditional weave" },
                                            { type: "Semi-Power Looms", note: "Modern precision" },
                                        ].map((l) => (
                                            <div key={l.type} className="flex items-center justify-between border-b border-[#e4ddd4] pb-3 last:border-0 last:pb-0">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                                    <span className="font-yeseva text-dark text-base">{l.type}</span>
                                                </div>
                                                <span className="font-pop text-[11px] text-[#888]">{l.note}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-[#e4ddd4]">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#bbb] mb-2">Constructions</div>
                                        <div className="flex gap-2 flex-wrap">
                                            {["Plain", "Dobby", "Jacquards"].map((c) => (
                                                <span key={c} className="font-mono text-[10px] uppercase tracking-wide bg-white border border-[#e4ddd4] text-cont px-3 py-1 rounded">{c}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Capacity & finishes */}
                                <div className="bg-dark rounded-2xl p-7">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-5">Production Capacity & Finishes</div>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <div className="font-yeseva text-gold text-3xl">8,000</div>
                                            <div className="font-pop text-[11px] text-[#888] mt-0.5">Metres per day</div>
                                        </div>
                                        <div>
                                            <div className="font-yeseva text-gold text-3xl">200+</div>
                                            <div className="font-pop text-[11px] text-[#888] mt-0.5">Employees</div>
                                        </div>
                                    </div>
                                    <div className="mt-5 pt-5 border-t border-white/10">
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#666] mb-2">Available Finishes</div>
                                        <p className="font-pop text-sm text-[#a09890]">Natural to Extra Soft — across various fabric types and constructions.</p>
                                    </div>
                                </div>

                            </div>
                        </FadeUp>
                    </div>
                </Wrapper>
            </Section>

            {/* ── 10. PARALLAX BAND ── */}
            <ParallaxBand
                src="/images/banner/our_legacy_02.png"
                alt="Titico fabric — woven in India"
            />

            {/* ── 11. CTA ── */}
            <Section className="bg-cream">
                <Wrapper className="lg:py-12 py-10">
                    <FadeUp>
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="font-yeseva text-dark text-3xl lg:text-4xl mb-2">Explore what we make</h2>
                                <p className="font-pop font-light text-cont text-base">See our collections or get in touch to begin a conversation.</p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                               <Link href="/collections" className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 bg-dark text-cream rounded hover:bg-[#2e2b26] transition-colors duration-200">
                                     Collections
                                 </Link>
                                 <Link href="/contact" className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 border border-dark text-dark rounded hover:bg-dark hover:text-cream transition-all duration-200">
                                     Contact Us
                                 </Link>
                            </div>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

        </main>
    );
}
