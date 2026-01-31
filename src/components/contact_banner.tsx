import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Image from 'next/image'
import { Heading } from './ui/headings'
import Button from './ui/buttons'
import { Mail, PhoneCall } from 'lucide-react'

export default function ContactBanner() {
    return (
        <Section>
            <Wrapper>
                <div className='relative overflow-hidden rounded-3xl w-full sm:h-76 bg-dark'>
                    <div className='absolute bottom-0 left-8'>
                        <Image src={"/images/icons/img-1.svg"} alt='Image' width={100} height={100} className='lg:w-32 md:w-24 w-16 h-auto ' />
                    </div>
                    <div className='absolute bottom-0 right-8'>
                        <Image src={"/images/icons/img-2.svg"} alt='Image' width={100} height={100} className='lg:w-32 md:w-24 w-16 h-auto ' />
                    </div>
                    <div className='relative z-10 w-full h-full flex items-center flex-col justify-center gap-3 p-10 sm:p-3'>
                        <Heading className='text-white text-center max-w-lg'>
                            Looking for a Reliable Fabric Supplier?
                        </Heading>
                        <p className='max-w-sm text-center text-white mt-2 leading-tight font-pop text-xs sm:text-sm'>
                            Get quotations, samples, or discuss custom development with our export team
                        </p>
                        <div className='mt-3 flex gap-3 flex-col sm:flex-row'>
                            <Button className='flex gap-3 items-center bg-white text-dark hover:bg-zinc-200'>
                                <Mail size={16} />
                                Request a Quote
                            </Button>
                            <Button variant='outline' className='flex gap-3 items-center text-white border-white hover:bg-white hover:text-dark'>
                                <PhoneCall size={16} />
                                Contact Export Team
                            </Button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
