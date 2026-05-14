/* ─── Process Steps ─── */
export const steps = [
    {
        number: "01",
        phase: "Raw Input",
        icon: "🧵",
        title: "Yarn Sourcing",
        body: "Long-staple cotton, viscose, silk, and blended yarns are sourced exclusively from certified mills. Every lot is tested for tenacity, twist per inch, and moisture content before entering the facility. We maintain relationships with the same five spinning mills we have used since 2001.",
        tags: ["Long-staple cotton", "Lot certified", "Moisture tested"],
        detail: "We reject approximately 8% of incoming yarn on quality grounds. That number tells you everything about the finished fabric.",
    },
    {
        number: "02",
        phase: "Preparation",
        icon: "⚙️",
        title: "Warping",
        body: "Thousands of ends are wound in perfect parallel tension — this determines the uniformity of the eventual weave. We use both sectional and beam warping, with 100% per-beam tension monitoring. Inconsistent tension is the single biggest source of quality failure in weaving; our monitoring eliminates it.",
        tags: ["Beam warping", "Tension monitor", "Reed count verification"],
        detail: "A single warp beam for a 120cm-wide fabric may carry over 4,000 individual ends — each at identical tension.",
    },
    {
        number: "03",
        phase: "Production",
        icon: "🪢",
        title: "Weaving",
        body: "Our 120-loom floor runs Jacquard, rapier, and dobby constructions simultaneously. Real-time pick density and stop-motion monitoring ensure that no defect passes the loom undetected. Traditional pit looms operate alongside power looms — handwoven cloth for heritage orders, power-woven for commercial export.",
        tags: ["Jacquard", "Rapier looms", "120 active looms", "Pit looms"],
        detail: "Our Jacquard looms can execute patterns of up to 10,000 hooks — enabling the intricate brocade work Varanasi is known for.",
    },
    {
        number: "04",
        phase: "Treatment",
        icon: "💧",
        title: "Dyeing & Finishing",
        body: "Yarn dyeing precedes weaving for our Ikat range; piece dyeing follows weaving for most other constructions. We use reactive dyes for cotton and acid dyes for silk — both REACH-compliant and tested for fastness against ISO standards. Finishing includes mercerising, calendering, and sanforising as required.",
        tags: ["Reactive dyes", "Acid dyes", "REACH-compliant", "ISO fastness"],
        detail: "Colour fastness to washing is tested at grades 4–5 on the ISO scale before any fabric leaves our finishing unit.",
    },
    {
        number: "05",
        phase: "Inspection",
        icon: "🔍",
        title: "Quality Control",
        body: "Every piece is inspected under standard D65 lighting against a 4-point grading system. Defect density per 100 linear metres determines grade — A-grade is our only export grade. Our QC team of twelve inspectors works independently of the production floor and reports directly to management.",
        tags: ["4-point system", "D65 lighting", "12 QC inspectors", "A-grade only"],
        detail: "We use the American 4-point system: a penalty point for each defect, with the piece graded by total penalty per 100 yards.",
    },
    {
        number: "06",
        phase: "Dispatch",
        icon: "📦",
        title: "Packing & Export",
        body: "Fabric is rolled on PVC cores, wrapped in acid-free tissue, and packed in moisture-resistant polyethylene bags before cartonning. Documentation — including mill test reports, country-of-origin certificates, and composition declarations — is prepared to destination-country import requirements.",
        tags: ["Acid-free packing", "Mill test reports", "COO certificates"],
        detail: "We have dispatched to 20+ countries. Every carton carries a unique lot code that traces back to the original warp beam.",
    },
];

/* ─── Stats ─── */
export const stats = [
    { val: "120", unit: "Looms", desc: "Jacquard, rapier, dobby & pit" },
    { val: "300+", unit: "Artisans", desc: "Weavers, dyers, QC staff" },
    { val: "12,000", unit: "Sq ft", desc: "Manufacturing floor area" },
    { val: "8%", unit: "Rejection", desc: "Incoming yarn refused on quality" },
    { val: "4–5", unit: "ISO grade", desc: "Colour fastness target" },
    { val: "7–10", unit: "Days", desc: "Sample development turnaround" },
];

/* ─── Materials ─── */
export const materials = [
    {
        name: "Pure Silk",
        origin: "Varanasi sericulture",
        props: ["GI-tagged", "Twist-tested", "Wild & cultivated"],
        img: "/images/fabric/silk.jpeg",
    },
    {
        name: "Long-Staple Cotton",
        origin: "Gujarat & Maharashtra",
        props: ["Certified mills", "400 thread count", "Reactive-dye ready"],
        img: "/images/fabric/cotton.jpeg",
    },
    {
        name: "Natural Linen",
        origin: "Europe (processed India)",
        props: ["Zero synthetic blend", "Slub-preserved", "GOTS compliant"],
        img: "/images/fabric/linen.jpeg",
    },
    {
        name: "Ikat Yarn",
        origin: "Pochampally & Patan",
        props: ["Resist-dyed", "Hand-aligned", "Warp & weft"],
        img: "/images/fabric/ikat.jpeg",
    },
];