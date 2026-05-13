interface Data {
    src: string
    name: string
    category: string
    content?: string
    rating?: number
    link?: string
}

export const data: Data[] = [
    { src: "/images/slider/slider-1.png", name: "Cotton Fabrics", category: "Cotton", content: "Available in multiple GSM, weaves & finishes", rating: 4.5 },
    { src: "/images/slider/slider-2.png", name: "Banarasi Silk", category: "Silk", content: "Handwoven zari brocade — export grade", rating: 4 },
    { src: "/images/slider/slider-3.png", name: "Blended Georgette", category: "Blended", content: "Poly-viscose blend, 75 GSM", rating: 4 },
    { src: "/images/slider/slider-4.png", name: "Knitted Jersey", category: "Knitted", content: "Single jersey, 160–200 GSM range", rating: 4 },
    { src: "/images/slider/slider-3.png", name: "Woven Twill", category: "Woven", content: "2/2 twill, 200 GSM, export grade", rating: 4 },
    { src: "/images/slider/slider-4.png", name: "Technical Mesh", category: "Technical", content: "Breathable polyester mesh, UV-resistant", rating: 4 },
    { src: "/images/slider/slider-1.png", name: "Linen Blend", category: "Blended", content: "Cotton-linen mix, 120 GSM, natural finish", rating: 4.5 },
    { src: "/images/slider/slider-2.png", name: "Jacquard Brocade", category: "Silk", content: "Dobby Jacquard, 220 GSM, custom patterns", rating: 4 },
]
