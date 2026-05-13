import Section from "./ui/section";
import Wrapper from "./ui/wrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function View() {
    return (
        <Section className="bg-cream">
            <Wrapper>
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-px bg-gold" />
                        <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-gold">
                            Our Legacy
                        </span>
                        <div className="w-8 h-px bg-gold" />
                    </div>

                    <h2 className="text-dark text-3xl lg:text-4xl font-medium leading-[1.2] max-w-xl mb-2">
                        Fabric is not made.{" "}
                        <em className="italic text-gold">It is inherited.</em>
                    </h2>

                    <p className="text-sub text-sm lg:text-base leading-tight max-w-2xl">
                        For generations, our fabrics have been shaped by hands that learned
                        from those before them. Every weave carries time, patience, and a way
                        of working that refuses to hurry.
                    </p>
                </div>

                {/* ── Then | Spine | Now grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_56px_1fr] gap-8 lg:gap-0 items-stretch">

                    {/* Then */}
                    <div className="flex flex-col">
                        <div className="relative overflow-hidden rounded-xl">
                            <Image
                                src="/images/banner/old.png"
                                alt="Traditional textile weaving — then"
                                width={1080}
                                height={800}
                                className="w-full h-80 lg:h-90 object-cover"
                            />
                            {/* Subtle dark vignette at bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_top,rgba(28,26,23,0.5),transparent)]" />
                        </div>

                        <div className="flex items-center gap-2 mt-4">
                            <div className="w-5 h-px bg-gold" />
                            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-dark">
                                Then
                            </span>
                            <span className="font-play italic text-[11px] text-gold">
                                · Pre 1990
                            </span>
                        </div>
                        <p className="text-[#888] text-[13px] leading-relaxed mt-2 max-w-xs">
                            Born in an age where craft was a way of life, our looms carried
                            stories, not signatures.
                        </p>
                    </div>

                    {/* Timeline spine — hidden on mobile */}
                    <div className="hidden lg:flex flex-col items-center justify-center px-2">
                        <div className="flex-1 w-px bg-[#e4ddd4]" />
                        <div className="my-3 flex flex-col items-center gap-1">
                            <span
                                className="font-play italic text-xs text-gold tracking-wide"
                                style={{ writingMode: "vertical-rl" }}
                            >
                                1978 – 2026
                            </span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-dark flex items-center justify-center my-2 shrink-0">
                            <ShieldCheck size={13} className="text-cream" />
                        </div>
                        <div className="flex-1 w-px bg-[#e4ddd4]" />
                    </div>

                    {/* Now */}
                    <div className="flex flex-col items-end">
                        <div className="relative overflow-hidden rounded-xl w-full">
                            <Image
                                src="/images/banner/now.png"
                                alt="Modern textile production — now"
                                width={1080}
                                height={800}
                                className="w-full h-80 lg:h-90 object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_top,rgba(28,26,23,0.5),transparent)]" />
                        </div>

                        <div className="flex items-center gap-2 mt-4">
                            <span className="font-play italic text-[11px] text-gold">
                                2026 ·
                            </span>
                            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-dark">
                                Now
                            </span>
                            <div className="w-5 h-px bg-gold" />
                        </div>
                        <p className=" text-[#888] text-[13px] leading-relaxed mt-2 max-w-xs text-right">
                            The same hands, the same discipline — creating fabrics for the
                            present without leaving the past behind.
                        </p>
                    </div>
                </div>

                {/* ── Stats bar ── */}
                <div className="grid grid-cols-3 mt-12 rounded-xl overflow-hidden border border-[#e4ddd4] divide-x divide-[#e4ddd4]">
                    {[
                        { num: "45", suffix: "+", label: "Years of craft" },
                        { num: "4", suffix: "th", label: "Generation weavers" },
                        { num: "500", suffix: "+", label: "Fabric SKUs" },
                    ].map((s) => (
                        <div key={s.label} className="bg-white py-5 text-center">
                            <div className="font-play text-dark text-2xl font-medium">
                                {s.num}
                                <span className="text-gold">{s.suffix}</span>
                            </div>
                            <div className="font-mono text-[9px] font-semibold tracking-[0.12em] uppercase text-[#888] mt-1">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>

            </Wrapper>
        </Section>
    );
}