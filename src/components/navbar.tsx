"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Menu {
    label: string;
    path: string;
}

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState<boolean | null>(false);
    const currentPath = usePathname();
    const [hoverMenu, setHoverMenu] = useState<string | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 45) {
            setScrolled(true);
        } else {
            setScrolled(null);
        }
    });

    const menu: Menu[] = [
        {
            label: "HOME",
            path: "/",
        },
        {
            label: "ABOUT",
            path: "/#",
        },
        {
            label: "PRODUCTS",
            path: "/#",
        },
        {
            label: "COLLECTIONS",
            path: "/#",
        },
        {
            label: "BLOGS",
            path: "/#",
        },
    ];

    return (
        <motion.header
            className="w-full sticky top-0 md:mt-3 mt-1.5 mb-5 py-2 lg:px-0 px-6 z-50"
            initial={false}
            animate={{
                backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
                backgroundColor: scrolled
                    ? "rgba(248, 250, 252, 0.6)"
                    : "rgba(248, 250, 252, 0)",
            }}
            transition={{
                type: "tween",
                ease: [0.22, 1, 0.36, 1],
                duration: 0.3,
            }}
        >
            <nav className='w-full max-w-7xl mx-auto flex justify-between items-center'>
                <Link className="relative" href="/">
                    <Image
                        src={"/images/logo/logo.png"}
                        width={150}
                        height={64}
                        alt="Titico Textiles"
                        className="md:w-14 w-9 h-auto"
                    />
                </Link>

                <div className="hidden md:block">
                    {menu.map((items) => {
                        const isActive =
                            currentPath === items.path ||
                            currentPath.startsWith(`${items.path}/`);

                        return (
                            <Link
                                className="relative px-3 inline-block py-2 text-gray-700 transition-all delay-150 hover:text-gray-900 font-mono font-medium"
                                href={items.path}
                                key={items.label}
                                onMouseEnter={() => setHoverMenu(items.label)}
                                onMouseLeave={() => setHoverMenu(null)}
                                aria-current={isActive ? "page" : undefined}
                            >
                                <AnimatePresence mode="wait">
                                    {hoverMenu === items.label && (
                                        <motion.span
                                            layoutId="nav-hover"
                                            className="absolute inset-0 bg-gray-100/80 backdrop-blur-sm"
                                            initial={{
                                                opacity: 0,
                                                scale: 0.97,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.98,
                                            }}
                                            transition={{
                                                type: "tween",
                                                ease: [0.22, 1, 0.36, 1],
                                                duration: 0.5,
                                            }}
                                        />
                                    )}
                                </AnimatePresence>

                                <span
                                    className={`relative z-10 ${isActive ? "text-teal-600" : "text-gray-600"
                                        }`}
                                >
                                    {items.label}
                                </span>
                                {isActive && (
                                    <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500 to-teal-500/0" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </motion.header>
    )
}
