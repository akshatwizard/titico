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
    gsm: string;
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
            "Soft, breathable Jacquard fabrics woven on dobby and jacquard looms with ornate raised patterns. Available in plain, dobby and multi-colour jacquard constructions with excellent dimensional stability.",
        gsm: "120–180 GSM",
        img: "/images/fabric/img-1.jpg",
        images: ["/images/fabric/img-1.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Soft Texture", "Breathable", "Durable Quality"],
        highlight:
            "Width: 44–58 inches. Composition: Cotton / Viscose / Polyester blends. Suitable for fashion wear, upholstery accents, and premium designer collections.",
        rating: 4.5,
    },
    {
        id: 2,
        name: "Linen",
        subtitle: "Natural Linen Fabric",
        category: "Linen",
        tag: "Classic Appeal",
        description:
            "Pure natural linen fabric with characteristic slub texture and elegant matte finish. High moisture absorbency and natural temperature regulation make it ideal for all-season use in apparel and interiors.",
        gsm: "100–160 GSM",
        img: "/images/fabric/img-2.jpg",
        images: ["/images/fabric/img-2.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Natural Texture", "Lightweight", "Classic Appeal"],
        highlight:
            "Width: 44–58 inches. Composition: 100% Linen. Available finishes: Natural, Soft, Stone-washed. Suitable for apparel, curtains, upholstery, and premium lifestyle collections.",
        rating: 4,
    },
    {
        id: 3,
        name: "Linen Cotton",
        subtitle: "Linen-Cotton Blend",
        category: "Linen",
        tag: "Blended Comfort",
        description:
            "Premium linen-cotton blend combining linen's natural texture with cotton's softness. Offers improved drapability over pure linen with reduced creasing and superior breathability for year-round comfort.",
        gsm: "110–170 GSM",
        img: "/images/fabric/img-3.jpg",
        images: ["/images/fabric/img-3.jpg"],
        origin: "Varanasi & Gujarat",
        useCase: ["Smooth Finish", "Breathable", "Premium Feel"],
        highlight:
            "Width: 44–58 inches. Composition: 55% Linen / 45% Cotton. Ideal for garments, casual wear, home textiles, and lightweight applications.",
        rating: 4,
    },
    {
        id: 4,
        name: "Mulberry",
        subtitle: "Pure Mulberry Silk",
        category: "Mulberry",
        tag: "Luxury Finish",
        description:
            "Grade A pure Mulberry silk woven with traditional Varanasi craftsmanship. Features a natural protein fibre structure delivering unmatched lustre, hypoallergenic properties, and exceptional drape.",
        gsm: "60–120 GSM",
        img: "/images/fabric/img-4.jpg",
        images: ["/images/fabric/img-4.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Unique Patterns", "Rich Lustre", "Luxury Appeal"],
        highlight:
            "Width: 44–54 inches. Composition: 100% Mulberry Silk. Momme range: 8–30mm. Ideal for fashion garments, statement pieces, and decorative textile applications.",
        rating: 4,
    },
    {
        id: 5,
        name: "Mulberry Cotton",
        subtitle: "Mulberry-Cotton Blend",
        category: "Mulberry",
        tag: "Durable Luxury",
        description:
            "Engineered blend of Mulberry silk and combed cotton yarns producing a fabric that retains silk's natural sheen while gaining cotton's structural durability. Excellent for high-wash-cycle applications.",
        gsm: "90–150 GSM",
        img: "/images/fabric/img-5.jpg",
        images: ["/images/fabric/img-5.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Rich Texture", "Durable Weave", "Premium Finish"],
        highlight:
            "Width: 44–58 inches. Composition: 60% Mulberry Silk / 40% Cotton. Suitable for ethnic wear, fashion garments, and elegant furnishing fabrics.",
        rating: 4,
    },
    {
        id: 6,
        name: "Mulberry Polyester",
        subtitle: "Mulberry-Polyester Blend",
        category: "Technical",
        tag: "Easy Maintenance",
        description:
            "Technical blend combining Mulberry silk character with polyester's dimensional stability and easy-care performance. Colour-fast, wrinkle-resistant, and low-shrinkage for demanding commercial use.",
        gsm: "80–130 GSM",
        img: "/images/fabric/img-6.jpg",
        images: ["/images/fabric/img-6.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Smooth Finish", "Easy Care", "Modern Appeal"],
        highlight:
            "Width: 44–60 inches. Composition: 50% Mulberry Silk / 50% Polyester. Colorfastness: Grade 4–5. Suitable for garments, home textiles, upholstery, and modern fabric collections.",
        rating: 4,
    },
    {
        id: 7,
        name: "Polyester",
        subtitle: "Premium Polyester Fabric",
        category: "Polyester",
        tag: "Versatile Quality",
        description:
            "High-tenacity polyester fabric with excellent abrasion resistance and lasting colour vibrancy. Available in plain, twill, and satin weaves with anti-pilling and anti-static finishes on request.",
        gsm: "90–160 GSM",
        img: "/images/fabric/img-7.jpg",
        images: ["/images/fabric/img-7.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Smooth Finish", "Durable Quality", "Colour Retention"],
        highlight:
            "Width: 44–60 inches. Composition: 100% Polyester. Tensile strength: 400+ N. Suitable for garments, home textiles, upholstery, and modern fabric collections.",
        rating: 4,
    },
    {
        id: 8,
        name: "Tussar Mulberry Polyester",
        subtitle: "Triple-Blend Fabric",
        category: "Polyester",
        tag: "Signature Blend",
        description:
            "A precision-engineered three-way blend of Tussar silk, Mulberry silk, and polyester. Delivers Tussar's raw texture, Mulberry's sheen, and polyester's durability in a single balanced construction.",
        gsm: "80–140 GSM",
        img: "/images/fabric/img-8.jpg",
        images: ["/images/fabric/img-8.jpg"],
        origin: "Varanasi & Bhagalpur",
        useCase: ["Elegant Drape", "Durable Blend", "Refined Texture"],
        highlight:
            "Width: 44–54 inches. Composition: 40% Tussar / 30% Mulberry Silk / 30% Polyester. Ideal for premium ethnic garments, sarees, and designer fashion collections.",
        rating: 4,
    },
    {
        id: 9,
        name: "Tussar",
        subtitle: "Pure Tussar Silk",
        category: "Tussar",
        tag: "Earthy Elegance",
        description:
            "Wild Tussar silk sourced from Bhagalpur featuring a natural honey-gold tone, irregular slub texture, and characteristic crisp hand-feel. Naturally hypoallergenic with excellent moisture management.",
        gsm: "60–110 GSM",
        img: "/images/fabric/img-9.jpg",
        images: ["/images/fabric/img-9.jpg"],
        origin: "Bhagalpur, Bihar",
        useCase: ["Natural Grain", "Earthy Tone", "Organic Feel"],
        highlight:
            "Width: 44–54 inches. Composition: 100% Tussar Silk. Natural undyed variants available. Ideal for ethnic wear, sarees, kurtas, and artisan textile collections.",
        rating: 4,
    },
    {
        id: 10,
        name: "Tussar Mulberry",
        subtitle: "Tussar-Mulberry Blend",
        category: "Tussar",
        tag: "Heritage Craft",
        description:
            "Artisan-woven blend of wild Tussar and cultivated Mulberry silk. Tussar contributes rustic texture and body while Mulberry adds refined sheen and smoothness — a hallmark of Bhagalpur-Varanasi weaving heritage.",
        gsm: "70–120 GSM",
        img: "/images/fabric/img-10.jpg",
        images: ["/images/fabric/img-10.jpg"],
        origin: "Varanasi & Bhagalpur",
        useCase: ["Heritage Weave", "Rich Texture", "Natural Lustre"],
        highlight:
            "Width: 44–54 inches. Composition: 50% Tussar Silk / 50% Mulberry Silk. Suitable for sarees, dupattas, fashion garments, and premium home textiles.",
        rating: 4,
    },
    {
        id: 11,
        name: "Cotton Polyester",
        subtitle: "Cotton-Polyester Blend",
        category: "Tussar",
        tag: "Everyday Comfort",
        description:
            "Optimised cotton-polyester blend engineered for performance and comfort. Cotton provides breathability and softness while polyester adds dimensional stability, wrinkle resistance, and shape retention.",
        gsm: "100–180 GSM",
        img: "/images/fabric/img-11.jpg",
        images: ["/images/fabric/img-11.jpg"],
        origin: "Varanasi & Gujarat",
        useCase: ["Breathable", "Wrinkle Resistant", "Everyday Wear"],
        highlight:
            "Width: 44–60 inches. Composition: 60% Cotton / 40% Polyester. Shrinkage: <3%. Designed for casual garments, uniforms, home textiles, and modern lifestyle fabrics.",
        rating: 4,
    },
    {
        id: 12,
        name: "Embroidery",
        subtitle: "Artisan Embroidery Fabric",
        category: "Embroidery",
        tag: "Handcrafted Detail",
        description:
            "Base fabric with intricate hand and machine embroidery using silk, metallic, and cotton threads. Available on net, organza, georgette, and velvet base fabrics with varied stitch densities.",
        gsm: "150–250 GSM",
        img: "/images/fabric/img-12.jpg",
        images: ["/images/fabric/img-12.jpg"],
        origin: "Varanasi, UP",
        useCase: ["Intricate Threadwork", "Artisan Craft", "Statement Fabric"],
        highlight:
            "Width: 44–54 inches. Thread: Silk / Metallic / Cotton. Base: Georgette / Net / Velvet. Perfect for bridal wear, couture collections, ethnic garments, and luxury décor applications.",
        rating: 4.5,
    },
];
