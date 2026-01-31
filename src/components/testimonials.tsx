import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import ToolTip, { Data } from './ui/tool_tip'
import { EmblaOptionsType } from 'embla-carousel'
import SliderWrapper from './slider_wrapper'
import Card from './card'
import Image from 'next/image'

const OPTIONS: EmblaOptionsType = { align: 'start', }

interface Testimonials {
    name: string;
    content: string;
    img: string;
    location: string;
}

export default function Testimonials() {
    const data: Data[] = [
        {
            name: "asdasd asdasd",
            img: "/images/testimonials/img-1.png",
            post: "Marketing Head",
        },
        {
            name: "zxc asdasd",
            img: "/images/testimonials/img-2.png",
            post: "Marketing Head",
        },
        {
            name: "fgdf asdasd",
            img: "/images/testimonials/img-3.png",
            post: "Marketing Head",
        },
        {
            name: "werer asdasd",
            img: "/images/testimonials/img-4.png",
            post: "Marketing Head",
        },
        {
            name: "xcvsdf asdasd",
            img: "/images/testimonials/img-5.png",
            post: "Marketing Head",
        },
    ]
    const testimonials: Testimonials[] = [
        {
            name: "Ravi Mehta",
            content:
                "The fabric quality is consistently excellent. The texture, color retention, and durability meet international standards, making them a reliable partner for our garment exports.",
            img: "/images/testimonials/img-1.png",
            location: "Surat, India",
        },
        {
            name: "Ananya Sharma",
            content:
                "We’ve sourced cotton and blended fabrics for over two years now. The finishing and weaving precision have significantly improved our final product quality.",
            img: "/images/testimonials/img-2.png",
            location: "Jaipur, India",
        },
        {
            name: "Mohammed Khan",
            content:
                "Their textile solutions helped us scale production without compromising on fabric strength or consistency. Timely delivery and professional support stand out.",
            img: "/images/testimonials/img-3.png",
            location: "Bhiwandi, India",
        },
        {
            name: "Priya Nair",
            content:
                "The variety of fabrics and customization options are impressive. From sampling to bulk orders, the experience has been smooth and dependable.",
            img: "/images/testimonials/img-4.png",
            location: "Kochi, India",
        },
        {
            name: "Arjun Patel",
            content:
                "Outstanding fabric finish and color accuracy. Our clients noticed the difference immediately, and it added real value to our textile collections.",
            img: "/images/testimonials/img-5.png",
            location: "Ahmedabad, India",
        },
    ];

    return (
        <Section className='bg-[#F3F4F6] md:pr-0'>
            <Wrapper className='max-w-full'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-[450px_1fr] md:grid-cols-[380px_1fr] md-gap-0 gap-10'>
                    <div className='w-full flex h-full flex-col gap-2 lg:gap-4 md:gap-3 md:items-start items-center'>
                        <Heading className='md:text-left text-center'>
                            Trusted by Buyers Worldwide
                        </Heading>
                        <SubHeading className='max-w-sm text-center md:text-left'>
                            Consistent quality and reliable delivery — our long-term textile partner.
                        </SubHeading>
                        <ToolTip data={data} className='mt-8' />
                    </div>
                    <div className='w-full h-full overflow-hidden flex items-center'>
                        <SliderWrapper options={OPTIONS} className='gap-5 py-5 h-full'>
                            {
                                testimonials.map((items,idx) => (
                                    <Card
                                        idx={idx}
                                        key={items.name}
                                        className={`relative rounded-3xl w-85 h-64 bg-white border border-gray-200 overflow-hidden shadow shadow-gray-300 p-6 flex flex-col gap-4 justify-between `}
                                    >
                                        <p className='text-base text-sub font-pop font-normal leading-tight'>
                                            {items.content}
                                        </p>
                                        <div className='flex gap-3'>
                                            <div className='size-12 shrink-0 overflow-hidden rounded-full p-0.5 bg-[#F3F4F6]'>
                                                <Image src={items.img} width={100} height={100} alt={items.name} className='w-full h-full object-cover' />
                                            </div>
                                            <div className='flex-1'>
                                                <span className='block text-lg font-mono text-dark font-medium'>
                                                    {items.name}
                                                </span>
                                                <span className='block leading-tight text-sm font-pop font-normal text-sub'>
                                                    {items.location}
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            }
                        </SliderWrapper>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
