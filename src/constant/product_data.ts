interface Data {
    src: string
    name: string
    category: string
    content?: string
    rating?: number
    link?: string
}

export const data: Data[] = [
    {
        src: "/images/fabric/cotton.jpeg",
        name: "Cotton Fabrics",
        category: "Cotton",
        content: "Soft, breathable, and durable fabrics suitable for everyday textile applications.",
        rating: 4.5
    },
    {
        src: "/images/fabric/linen.jpeg",
        name: "Linen Fabrics",
        category: "linen",
        content: "Natural textured fabrics with an elegant finish for modern interiors and apparel.",
        rating: 4
    },
    {
        src: "/images/fabric/silk.jpeg",
        name: "Silk Fabrics",
        category: "silk",
        content: "Smooth and luxurious fabrics known for their rich shine and premium feel.",
        rating: 4
    },
    {
        src: "/images/fabric/ikat.jpeg",
        name: "Ikat Fabrics",
        category: "ikat",
        content: "Designer woven fabrics featuring artistic patterns and timeless traditional appeal.",
        rating: 4
    },
    {
        src: "/images/fabric/tweed.jpeg",
        name: "Tweed Fabrics",
        category: "tweed",
        content: "Rich textured fabrics with a durable woven finish, ideal for upholstery and premium collections.",
        rating: 4
    },
    {
        src: "/images/fabric/herring.jpeg",
        name: "Herringbone Fabrics",
        category: "Technical",
        content: "Classic zig-zag patterned fabrics offering a sophisticated and timeless woven look.",
        rating: 4
    },
]
