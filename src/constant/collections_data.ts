export const categories = ["All", "Silk", "Cotton", "Linen", "Ikat", "Tweed & Herringbone", "Garments"] as const;
export type Category = typeof categories[number];

export interface Product {
    id: number;
    name: string;
    subtitle: string;
    category: Category;
    tag: string;
    description: string;
    img: string;
    origin: string;
    useCase: string[];
    highlight: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Silk Fabric",
        subtitle: "Premium Silk Collection",
        category: "Silk",
        tag: "Premium Quality",
        description:
            "Smooth textured silk fabrics designed for elegant fashion and premium furnishing applications.",
        img: "/images/fabric/silk.jpeg",
        origin: "Varanasi, UP",
        useCase: ["Soft Texture", "Elegant Finish", "Premium Quality"],
        highlight:
            "Suitable for fashion wear, scarves, furnishing accents, and designer collections.",
    },

    {
        id: 2,
        name: "Cotton Fabric",
        subtitle: "Everyday Cotton Fabric",
        category: "Cotton",
        tag: "Durable Quality",
        description:
            "Comfortable and versatile cotton fabrics crafted for fashion and home textile applications.",
        img: "/images/fabric/cotton.jpeg",
        origin: "Varanasi & Gujarat",
        useCase: ["Breathable Fabric", "Soft Feel", "Durable Quality"],
        highlight:
            "Ideal for garments, casual wear, home textiles, and lightweight applications.",
    },

    {
        id: 3,
        name: "Linen Fabric",
        subtitle: "Natural Linen Fabric",
        category: "Linen",
        tag: "Classic Appeal",
        description:
            "Premium linen fabrics known for their texture, lightweight feel, and timeless appearance.",
        img: "/images/fabric/linen.jpeg",
        origin: "Varanasi, UP",
        useCase: ["Natural Texture", "Lightweight", "Classic Appeal"],
        highlight:
            "Suitable for apparel, curtains, upholstery, and premium lifestyle collections.",
    },

    {
        id: 4,
        name: "Ikat Fabric",
        subtitle: "Artistic Ikat Fabric",
        category: "Ikat",
        tag: "Decorative Appeal",
        description:
            "Distinctive woven patterns inspired by traditional textile craftsmanship and modern styling.",
        img: "/images/fabric/ikat.jpeg",
        origin: "Varanasi & Pochampally",
        useCase: ["Unique Patterns", "Rich Texture", "Decorative Appeal"],
        highlight:
            "Ideal for fashion garments, statement pieces, and decorative textile applications.",
    },

    {
        id: 5,
        name: "Silk-Cotton Fabric",
        subtitle: "Silk-Cotton Blend",
        category: "Silk",
        tag: "Premium Finish",
        description:
            "Balanced blend offering softness, comfort, and elegant texture for versatile applications.",
        img: "/images/fabric/silk.jpeg",
        origin: "Varanasi, UP",
        useCase: ["Soft Blend", "Comfort Feel", "Premium Finish"],
        highlight:
            "Suitable for ethnic wear, fashion garments, and elegant furnishing fabrics.",
    },

    {
        id: 6,
        name: "Tweed Fabric",
        subtitle: "Classic Tweed Fabric",
        category: "Tweed & Herringbone",
        tag: "Classic Style",
        description:
            "Structured woven fabrics designed with rich texture and durable construction.",
        img: "/images/fabric/tweed.jpeg",
        origin: "Varanasi, UP",
        useCase: ["Textured Weave", "Durable Fabric", "Classic Style"],
        highlight:
            "Ideal for jackets, fashion garments, and designer textile collections.",
    },

    {
        id: 7,
        name: "Herringbone Fabric",
        subtitle: "Herringbone Weave Fabric",
        category: "Tweed & Herringbone",
        tag: "Modern Appeal",
        description:
            "Premium patterned fabrics featuring a refined and timeless woven appearance.",
        img: "/images/fabric/herring.jpeg",
        origin: "Varanasi, UP",
        useCase: ["Signature Weave", "Premium Look", "Modern Appeal"],
        highlight:
            "Suitable for apparel, interiors, and sophisticated fabric applications.",
    },

    {
        id: 8,
        name: "Home Textile Fabric",
        subtitle: "Decorative Furnishing Fabric",
        category: "Garments",
        tag: "Stylish Finish",
        description:
            "Quality fabrics developed for curtains, cushions, upholstery, and home décor collections.",
        img: "/images/fabric/cotton.jpeg",
        origin: "Varanasi, UP",
        useCase: ["Home Décor", "Durable Quality", "Stylish Finish"],
        highlight:
            "Designed to combine functionality with elegant visual appeal.",
    },

    {
        id: 9,
        name: "Polyester Fabric",
        subtitle: "Premium Polyester Fabric",
        category: "Garments",
        tag: "Easy Maintenance",
        description:
            "Durable and versatile polyester fabrics developed for fashion, furnishing, and multi-purpose textile applications.",
        img: "/images/fabric/cotton.jpeg",
        origin: "Varanasi, UP",
        useCase: ["Smooth Finish", "Durable Quality", "Easy Maintenance"],
        highlight:
            "Suitable for garments, home textiles, upholstery, and modern fabric collections.",
    },
];