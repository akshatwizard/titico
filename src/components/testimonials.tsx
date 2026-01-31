import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import ToolTip, { Data } from './ui/tool_tip'

export default function Testimonials() {
    const data : Data[] = [
        {
            name:"asdasd asdasd",
            img:"/images/testimonials/img-1.png",
            post:"Marketing Head",
        },
        {
            name:"zxc asdasd",
            img:"/images/testimonials/img-2.png",
            post:"Marketing Head",
        },
        {
            name:"fgdf asdasd",
            img:"/images/testimonials/img-3.png",
            post:"Marketing Head",
        },
        {
            name:"werer asdasd",
            img:"/images/testimonials/img-4.png",
            post:"Marketing Head",
        },
        {
            name:"xcvsdf asdasd",
            img:"/images/testimonials/img-5.png",
            post:"Marketing Head",
        },
    ]
    return (
        <Section className='bg-[#F3F4F6]'>
            <Wrapper>
                <div className='w-full grid grid-cols-1 md:grid-cols-[400px_1fr]'>
                    <div className='w-full flex h-full flex-col gap-2 lg:gap-4 md:gap-3'>
                        <Heading>
                            Trusted by Buyers Worldwide
                        </Heading>
                        <SubHeading>
                            Consistent quality and reliable delivery — our long-term textile partner.
                        </SubHeading>
                        <ToolTip data={data} className='mt-8' />
                    </div>
                    <div className='w-full'>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
