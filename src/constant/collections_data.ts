export const categories = [
    "All",
    "Jacquard",
    "Linen",
    "Mulberry",
    "Technical",
    "Polyester",
    "Tussar",
    "Embroidery",
] as const;

export type Category = typeof categories[number];

export interface Product {
    id: number;
    name: string;
    subtitle: string;
    category: Category;
    tag: string;
    description: string;
    img: string;
    images: string[];
    origin: string;
    useCase: string[];
    highlight: string;
    rating?: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Jacquard Fabrics",
        subtitle: "Premium Jacquard Collection",
        category: "Jacquard",
        tag: "Intricate Weave",
        description:
            "Soft, breathable, and durable Jacquard fabrics featuring ornate woven patterns suitable for premium fashion and furnishing applications.",
        img: "/images/fabric/img-1.jpg",
        images: ["/images/fabric/img-1.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Soft Texture", "Breathable", "Durable Quality"],
        highlight:
            "Ideal for fashion wear, upholstery accents, and premium designer collections.",
        rating: 4.5,
    },
    {
        id: 2,
        name: "Linen",
        subtitle: "Natural Linen Fabric",
        category: "Linen",
        tag: "Classic Appeal",
        description:
            "Natural textured fabrics with an elegant finish for modern interiors and apparel. Lightweight and breathable for all-season comfort.",
        img: "/images/fabric/img-2.jpg",
        images: ["/images/fabric/img-2.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Natural Texture", "Lightweight", "Classic Appeal"],
        highlight:
            "Suitable for apparel, curtains, upholstery, and premium lifestyle collections.",
        rating: 4,
    },
    {
        id: 3,
        name: "Linen Cotton",
        subtitle: "Linen-Cotton Blend",
        category: "Linen",
        tag: "Blended Comfort",
        description:
            "Smooth and luxurious linen-cotton blend known for its rich texture, breathability, and premium feel for modern fashion.",
        img: "/images/fabric/img-3.jpg",
        images: ["/images/fabric/img-3.jpg"],
        origin: "Varanasi & Gujarat",
        useCase: ["Smooth Finish", "Breathable", "Premium Feel"],
        highlight:
            "Ideal for garments, casual wear, home textiles, and lightweight applications.",
        rating: 4,
    },
    {
        id: 4,
        name: "Mulberry",
        subtitle: "Pure Mulberry Silk",
        category: "Mulberry",
        tag: "Luxury Finish",
        description:
            "Designer woven Mulberry silk fabrics featuring artistic patterns and timeless traditional appeal with a lustrous sheen.",
        img: "/images/fabric/img-4.jpg",
        images: ["/images/fabric/img-4.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Unique Patterns", "Rich Lustre", "Luxury Appeal"],
        highlight:
            "Ideal for fashion garments, statement pieces, and decorative textile applications.",
        rating: 4,
    },
    {
        id: 5,
        name: "Mulberry Cotton",
        subtitle: "Mulberry-Cotton Blend",
        category: "Mulberry",
        tag: "Durable Luxury",
        description:
            "Rich textured fabrics combining Mulberry silk with cotton for a durable woven finish, ideal for upholstery and premium collections.",
        img: "/images/fabric/img-5.jpg",
        images: ["/images/fabric/img-5.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Rich Texture", "Durable Weave", "Premium Finish"],
        highlight:
            "Suitable for ethnic wear, fashion garments, and elegant furnishing fabrics.",
        rating: 4,
    },
    {
        id: 6,
        name: "Mulberry Polyester",
        subtitle: "Mulberry-Polyester Blend",
        category: "Technical",
        tag: "Easy Maintenance",
        description:
            "Classic patterned Mulberry-polyester blend offering a sophisticated woven look with easy care properties for versatile applications.",
        img: "/images/fabric/img-6.jpg",
        images: ["/images/fabric/img-6.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Smooth Finish", "Easy Care", "Modern Appeal"],
        highlight:
            "Suitable for garments, home textiles, upholstery, and modern fabric collections.",
        rating: 4,
    },
    {
        id: 7,
        name: "Polyester",
        subtitle: "Premium Polyester Fabric",
        category: "Polyester",
        tag: "Versatile Quality",
        description:
            "Durable and versatile polyester fabrics developed for fashion, furnishing, and multi-purpose textile applications with lasting colour retention.",
        img: "/images/fabric/img-7.jpg",
        images: ["/images/fabric/img-7.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Smooth Finish", "Durable Quality", "Colour Retention"],
        highlight:
            "Suitable for garments, home textiles, upholstery, and modern fabric collections.",
        rating: 4,
    },
    {
        id: 8,
        name: "Tussar Mulberry Polyester",
        subtitle: "Triple-Blend Fabric",
        category: "Polyester",
        tag: "Signature Blend",
        description:
            "A refined three-way blend of Tussar, Mulberry silk, and polyester delivering a balanced texture with an elegant woven structure.",
        img: "/images/fabric/img-8.jpg",
        images: ["/images/fabric/img-8.jpg"],
        origin: "Varanasi & Bhagalpur",
        useCase: ["Elegant Drape", "Durable Blend", "Refined Texture"],
        highlight:
            "Ideal for premium ethnic garments, sarees, and designer fashion collections.",
        rating: 4,
    },
    {
        id: 9,
        name: "Tussar",
        subtitle: "Pure Tussar Silk",
        category: "Tussar",
        tag: "Earthy Elegance",
        description:
            "Naturally textured Tussar silk fabrics with a distinctive earthy tone and raw grain finish prized for their organic character.",
        img: "/images/fabric/img-9.jpg",
        images: ["/images/fabric/img-9.jpg"],
        origin: "Bhagalpur, Bihar",
        useCase: ["Natural Grain", "Earthy Tone", "Organic Feel"],
        highlight:
            "Ideal for ethnic wear, sarees, kurtas, and artisan textile collections.",
        rating: 4,
    },
    {
        id: 10,
        name: "Tussar Mulberry",
        subtitle: "Tussar-Mulberry Blend",
        category: "Tussar",
        tag: "Heritage Craft",
        description:
            "Blended Tussar and Mulberry silk combining the raw character of Tussar with the lustrous softness of Mulberry for a distinguished finish.",
        img: "/images/fabric/img-10.jpg",
        images: ["/images/fabric/img-10.jpg"],
        origin: "Varanasi & Bhagalpur",
        useCase: ["Heritage Weave", "Rich Texture", "Natural Lustre"],
        highlight:
            "Suitable for sarees, dupattas, fashion garments, and premium home textiles.",
        rating: 4,
    },
    {
        id: 11,
        name: "Cotton Polyester",
        subtitle: "Cotton-Polyester Blend",
        category: "Tussar",
        tag: "Everyday Comfort",
        description:
            "A practical yet elegant cotton-polyester blend offering the comfort of cotton with the durability and wrinkle-resistance of polyester.",
        img: "/images/fabric/img-11.jpg",
        images: ["/images/fabric/img-11.jpg"],
        origin: "Varanasi & Gujarat",
        useCase: ["Breathable", "Wrinkle Resistant", "Everyday Wear"],
        highlight:
            "Designed for casual garments, uniforms, home textiles, and modern lifestyle fabrics.",
        rating: 4,
    },
    {
        id: 12,
        name: "Embroidery",
        subtitle: "Artisan Embroidery Fabric",
        category: "Embroidery",
        tag: "Handcrafted Detail",
        description:
            "Exquisite embroidery fabrics featuring intricate handcrafted threadwork, ideal for couture, ethnic wear, and statement fashion pieces.",
        img: "/images/fabric/img-12.jpg",
        images: ["/images/fabric/img-12.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Intricate Threadwork", "Artisan Craft", "Statement Fabric"],
        highlight:
            "Perfect for bridal wear, couture collections, ethnic garments, and luxury décor applications.",
        rating: 4.5,
    },
];