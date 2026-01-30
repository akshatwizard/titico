"use client";
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Image from 'next/image'
import { motion } from "motion/react"
import Button from './ui/buttons';
import { MoveUpRight } from 'lucide-react';

export default function Ads() {
    return (
        <Section>
            <Wrapper>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='relative w-full h-full overflow-hidden rounded-xl'>
                        <Image
                            src={"/images/ads/img-1.png"}
                            width={800}
                            height={500}
                            alt='Product Ads'
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute z-10 top-0 left-0 w-full md:p-5 p-3 flex flex-col gap-2.5'>
                            <span className='font-mono text-base lg:text-2xl md:text-lg text-white font-semibold'>
                                Flat 30% Off on Signature Fabrics
                            </span>
                            <span className='max-w-sm text-white font-pop leading-tight'>
                                Discover our most loved textures and patterns, now available at special seasonal prices.
                            </span>
                            <Button className='w-max flex gap-2 items-center'>
                                Shop Now
                                <MoveUpRight size={16} />
                            </Button>
                        </div>
                        <div className='absolute inset-0 bg-black/40 '  />
                    </motion.div>

                    <div className='w-full h-full flex flex-col gap-6'>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            viewport={{ once: true }}
                            className='relative w-full overflow-hidden rounded-xl'>
                            <Image
                                src={"/images/ads/img-2.png"}
                                width={800}
                                height={500}
                                alt='Product Ads'
                                className='w-full md:h-56 h-80 object-cover'
                            />
                            <div className='absolute z-20 top-0 left-0 w-full md:p-5 p-3 flex flex-col gap-2.5'>
                                <span className='font-mono text-base lg:text-2xl md:text-lg text-white font-semibold'>
                                    New Arrivals
                                </span>
                                <span className='max-w-sm text-white font-pop leading-tight'>
                                    Fresh weaves and modern finishes designed for today&apos;s global fashion trends.
                                </span>
                                <Button className='w-max flex gap-2 items-center'>
                                    Shop Now
                                    <MoveUpRight size={16} />
                                </Button>
                            </div>
                            <div className='absolute inset-0 bg-black/40 '  />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            viewport={{ once: true }}
                            className='w-full overflow-hidden rounded-xl'>
                            <Image
                                src={"/images/ads/img-3.png"}
                                width={800}
                                height={500}
                                alt='Product Ads'
                                className='relative w-full md:h-56 h-80 object-cover'
                            />
                            <div className='absolute z-10 top-0 left-0 w-full md:p-5 p-3 flex flex-col gap-2.5'>
                                <span className='font-mono text-base lg:text-2xl md:text-lg text-white font-semibold'>
                                    Premium Fabric Collection
                                </span>
                                <span className='max-w-sm text-white font-pop leading-tight'>
                                    Handpicked materials crafted for durability, comfort, and long-lasting beauty.
                                </span>
                                <Button className='w-max flex gap-2 items-center'>
                                    Shop Now
                                    <MoveUpRight size={16} />
                                </Button>
                            </div>
                            <div className='absolute inset-0 bg-black/40 '  />
                        </motion.div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
