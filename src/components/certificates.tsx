import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading } from './ui/headings'
import AnimatedDiv from './ui/motion_div'
import Image from 'next/image'

export default function Certificate() {
    const images: string[] = [
        "/images/certificates/img-1.png",
        "/images/certificates/img-2.png",
        "/images/certificates/img-3.png",
        "/images/certificates/img-4.png",
        "/images/certificates/img-5.png",
        "/images/certificates/img-6.png",
        "/images/certificates/img-7.png",
    ]
    return (
        <Section className='bg-[#F3F4F6]'>
            <Wrapper>
                <div className='w-full flex flex-col gap-2 lg:gap-4 md:gap-3 items-center'>
                    <Heading>
                        Certified for Global Trade
                    </Heading>
                </div>
                <div className='w-full flex flex-wrap items-center justify-between gap-5'>
                    {
                        images.map((src, idx) => (
                            <AnimatedDiv idx={idx} key={idx} className=''>
                                <Image src={src} alt='Images' width={250} height={100} className='w-auto h-16 lg:h-24 md:h-20' />
                            </AnimatedDiv>
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
