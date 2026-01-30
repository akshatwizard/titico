import Image from 'next/image'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Marquee } from './marquee'

export default function Sponsor() {
    const images: string[] = [
        "/images/sponsor/img-1.png",
        "/images/sponsor/img-2.png",
        "/images/sponsor/img-3.png",
        "/images/sponsor/img-4.png",
        "/images/sponsor/img-5.png",
        "/images/sponsor/img-6.png",
    ]
    return (
        <Section className='bg-[#F3F4F6] pr-0 overflow-hidden sm:px-6 px-0'>
            <Wrapper className='sm:flex-row items-center lg:gap-0 md:gap-0 gap-4 lg:p-0 md:p-0 sm:py-5 py-5 '>
                <div className='shrink-0 flex items-center md:pr-10'>
                    <span className='md:text-2xl text-lg text-dark font-semibold font-pop'>
                        AS FEATURED ON
                    </span>
                </div>
                <div className="relative flex items-center py-5 w-screen -mr-[calc((100vw-100%)/2)]">
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20 bg-gradient-to-r from-[#F3F4F6] to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20 bg-gradient-to-l from-[#F3F4F6] to-transparent" />
                    <Marquee pauseOnHover>
                        {images.map((src, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center lg:w-40 md:w-32 lg:h-20 md:h-16 w-24 h-12"
                            >
                                <Image
                                    src={src}
                                    alt="Sponsors"
                                    width={160}
                                    height={80}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </Wrapper>
        </Section>
    )
}
