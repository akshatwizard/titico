import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Image from 'next/image'
import { Heading } from './ui/headings'
import Button from './ui/buttons'
import { MoveUpRight } from 'lucide-react'

export default function CtaBanner() {
    return (
        <Section>
            <Wrapper>
                <div className='overflow-hidden rounded-2xl relative'>
                    <Image src={"/images/ads/banner.png"} alt='Background' width={1980} height={1080} className='w-full h-100  object-cover object-top' />
                    <div className='absolute inset-0 bg-dark/30' />
                    <div className='absolute inset-0 z-10 flex items-center justify-center flex-col gap-2 p-5'>
                        <Heading className='text-white text-center'>
                            Textile Manufacturing Built for the World
                        </Heading>
                        <p className='max-w-3xl text-center text-white mt-2 leading-tight font-pop text-xs sm:text-sm'>
                            We are a vertically integrated textile export company delivering high-quality fabrics to international brands, wholesalers, and manufacturers. With modern machinery, skilled technicians, and strict quality processes, we ensure every meter meets global standards.
                        </p>
                        <div className='mt-3 flex gap-3'>
                            <Button className='flex gap-3 items-center'>
                                Shop Now
                                <MoveUpRight size={16} />
                            </Button>
                            <Button variant='outline' className='flex gap-3 items-center text-white border-white hover:bg-white hover:text-dark'>
                                Contact Us
                                <MoveUpRight size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
