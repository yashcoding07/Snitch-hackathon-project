import { createContext, useState } from "react"

export const productcontext = createContext(null)

const Productcontext = (props) => {

    const [products, setProducts] = useState({
        shirts: [
            { id: 1, name: "Slim Fit Stripes 100% Cotton Luxe", img: "/public/AllProducts/Shirts/shirt11.webp", price: "₹1599",
        images: [
        "/public/AllProducts/Shirts/shirt11.webp",
        "/public/AllProducts/Shirts/shirt12.webp",
        "/public/AllProducts/Shirts/shirt13.webp",
        "/public/AllProducts/Shirts/shirt14.webp"
    ] },
            { id: 2, name: "Regular Fit Burgundy Shirt", img: "/public/AllProducts/Shirts/shirt21.webp", price: "₹1,299",
        images: [
        "/public/AllProducts/Shirts/shirt21.webp",
        "/public/AllProducts/Shirts/shirt22.webp",
        "/public/AllProducts/Shirts/shirt23.webp",
        "/public/AllProducts/Shirts/shirt24.jpg"
    ] },
            { id: 3, name: "Stripes Shirt", img: "/public/AllProducts/Shirts/shirt31.webp", price: "₹1,399",
        images: [
        "/public/AllProducts/Shirts/shirt31.webp",
        "/public/AllProducts/Shirts/shirt32.webp",
        "/public/AllProducts/Shirts/shirt33.webp",
        "/public/AllProducts/Shirts/shirt34.jpg"
    ] },
            { id: 4, name: "Quartet Green Stripe Shirt", img: "/public/AllProducts/Shirts/shirt41.webp", price: "₹1,099",
        images: [
        "/public/AllProducts/Shirts/shirt41.webp",
        "/public/AllProducts/Shirts/shirt42.webp",
        "/public/AllProducts/Shirts/shirt43.webp",
        "/public/AllProducts/Shirts/shirt44.jpg"
    ] },
            { id: 5, name: "Stripes Regular Fit Shirt", img: "/public/AllProducts/Shirts/shirt51.webp", price: "₹1,599",
        images: [
        "/public/AllProducts/Shirts/shirt51.webp",
        "/public/AllProducts/Shirts/shirt52.webp",
        "/public/AllProducts/Shirts/shirt53.webp",
        "/public/AllProducts/Shirts/shirt54.jpg"
    ] },
            { id: 6, name: "Green Button Down Slim Shirt", img: "/public/AllProducts/Shirts/shirt61.webp", price: "₹1,249",
        images: [
        "/public/AllProducts/Shirts/shirt61.webp",
        "/public/AllProducts/Shirts/shirt62.webp",
        "/public/AllProducts/Shirts/shirt63.webp",
        "/public/AllProducts/Shirts/shirt64.jpg"
    ] },
            { id: 7, name: "Lavender Button Down Slim Shirt", img: "/public/AllProducts/Shirts/shirt71.webp", price: "₹1,349",
        images: [
        "/public/AllProducts/Shirts/shirt71.webp",
        "/public/AllProducts/Shirts/shirt72.webp",
        "/public/AllProducts/Shirts/shirt73.webp",
        "/public/AllProducts/Shirts/shirt74.jpg"
    ] }
        ],
        tshirts: [
            { id: 8, name: "Slim Fit Stretch Polo T-Shirt", img: "/public/AllProducts/tshirts/tshirt11.webp", price: "₹899",
    images: [
        "/public/AllProducts/tshirts/tshirt11.webp",
        "/public/AllProducts/tshirts/tshirt12.webp",
        "/public/AllProducts/tshirts/tshirt13.webp",
        "/public/AllProducts/tshirts/tshirt14.jpg"
    ] },
            { id: 9, name: "Regular Fit Zipper Polo T-Shirt", img: "/public/AllProducts/tshirts/tshirt21.webp", price: "₹799",
    images: [
        "/public/AllProducts/tshirts/tshirt21.webp",
        "/public/AllProducts/tshirts/tshirt22.webp",
        "/public/AllProducts/tshirts/tshirt23.jpg",
        "/public/AllProducts/tshirts/tshirt24.jpg"
    ] },
            { id: 10, name: "Stay Vibrant Oversized T-Shirt", img: "/public/AllProducts/tshirts/tshirt31.webp", price: "₹849",
    images: [
        "/public/AllProducts/tshirts/tshirt31.webp",
        "/public/AllProducts/tshirts/tshirt32.webp",
        "/public/AllProducts/tshirts/tshirt33.webp",
        "/public/AllProducts/tshirts/tshirt34.webp"
    ] },
            { id: 11, name: "Regular Fit Stretch Jaquard Polo T-Shirt", img: "/public/AllProducts/tshirts/tshirt41.webp", price: "₹999",
    images: [
        "/public/AllProducts/tshirts/tshirt41.webp",
        "/public/AllProducts/tshirts/tshirt42.webp",
        "/public/AllProducts/tshirts/tshirt43.webp",
        "/public/AllProducts/tshirts/tshirt44.jpg"
    ] },
            { id: 12, name: "Slim Fit Stretch Polo T-Shirt", img: "/public/AllProducts/tshirts/tshirt51.webp", price: "₹1,199",
    images: [
        "/public/AllProducts/tshirts/tshirt51.webp",
        "/public/AllProducts/tshirts/tshirt52.webp",
        "/public/AllProducts/tshirts/tshirt53.webp",
        "/public/AllProducts/tshirts/tshirt54.webp"
    ] },
            { id: 13, name: "Regular Fit Zipper Polo T-Shirt", img: "/public/AllProducts/tshirts/tshirt61.webp", price: "₹1,099",
    images: [
        "/public/AllProducts/tshirts/tshirt61.webp",
        "/public/AllProducts/tshirts/tshirt62.webp",
        "/public/AllProducts/tshirts/tshirt63.webp",
        "/public/AllProducts/tshirts/tshirt64.jpg"
    ] },
            { id: 14, name: "Regular Fit Stretch Flat Knit Polo T-Shirt", img: "/public/AllProducts/tshirts/tshirt71.jpg", price: "₹899",
    images: [
        "/public/AllProducts/tshirts/tshirt71.jpg",
        "/public/AllProducts/tshirts/tshirt72.webp",
        "/public/AllProducts/tshirts/tshirt73.webp",
        "/public/AllProducts/tshirts/tshirt74.jpg"
    ] }
        ],
        trousers: [
            { id: 15, name: "Black Stretch Trousers", img: "/public/AllProducts/trousers/trousers11.webp", price: "₹1,499",
        images: [
        "/public/AllProducts/trousers/trousers11.webp",
        "/public/AllProducts/trousers/trousers12.webp",
        "/public/AllProducts/trousers/trousers13.webp",
        "/public/AllProducts/trousers/trousers14.webp"
    ] },
            { id: 16, name: "Straight Fit Stretch Trousers", img: "/public/AllProducts/trousers/trousers21.webp", price: "₹1,799",
        images: [
        "/public/AllProducts/trousers/trousers21.webp",
        "/public/AllProducts/trousers/trousers22.webp",
        "/public/AllProducts/trousers/trousers23.webp",
        "/public/AllProducts/trousers/trousers24.webp"
    ] },
            { id: 17, name: "Stretch Regular Fit Trousers", img: "/public/AllProducts/trousers/trousers31.webp", price: "₹1,399",
        images: [
        "/public/AllProducts/trousers/trousers31.webp",
        "/public/AllProducts/trousers/trousers32.webp",
        "/public/AllProducts/trousers/trousers33.webp",
        "/public/AllProducts/trousers/trousers34.webp"
    ] },
            { id: 18, name: "Relaxed Fit Stretch Trousers", img: "/public/AllProducts/trousers/trousers41.webp", price: "₹1,599",
        images: [
        "/public/AllProducts/trousers/trousers41.webp",
        "/public/AllProducts/trousers/trousers42.webp",
        "/public/AllProducts/trousers/trousers43.webp",
        "/public/AllProducts/trousers/trousers44.webp"
    ] },
            { id: 19, name: "Linen Blend Stripes Regular Fit Trous", img: "/public/AllProducts/trousers/trousers51.webp", price: "₹1,899",
        images: [
        "/public/AllProducts/trousers/trousers51.webp",
        "/public/AllProducts/trousers/trousers52.webp",
        "/public/AllProducts/trousers/trousers53.webp",
        "/public/AllProducts/trousers/trousers54.webp"
    ] },
            { id: 20, name: "Linen Blend Stripes Regular Fit Trous", img: "/public/AllProducts/trousers/trousers61.webp", price: "₹1,299",
        images: [
        "/public/AllProducts/trousers/trousers61.webp",
        "/public/AllProducts/trousers/trousers62.webp",
        "/public/AllProducts/trousers/trousers63.webp",
        "/public/AllProducts/trousers/trousers64.jpg"
    ] },
            { id: 21, name: "Olive Green Trousers", img: "/public/AllProducts/trousers/trousers71.webp", price: "₹1,449",
        images: [
        "/public/AllProducts/trousers/trousers71.webp",
        "/public/AllProducts/trousers/trousers72.webp",
        "/public/AllProducts/trousers/trousers73.webp",
        "/public/AllProducts/trousers/trousers74.webp"
    ] }
        ],
        jeans: [
            { id: 22, name: "Slim Fit Stretch Jeans", img: "/public/AllProducts/jeans/jeans11.webp", price: "₹2,199",images: [
        "/public/AllProducts/jeans/jeans11.webp",
        "/public/AllProducts/jeans/jeans12.webp",
        "/public/AllProducts/jeans/jeans13.webp",
        "/public/AllProducts/jeans/jeans14.webp"
    ] },
            { id: 23, name: "Washed Loose Fit Jeans", img: "/public/AllProducts/jeans/jeans21.jpg", price: "₹2,399",images: [
        "/public/AllProducts/jeans/jeans21.jpg",
        "/public/AllProducts/jeans/jeans22.webp",
        "/public/AllProducts/jeans/jeans23.webp",
        "/public/AllProducts/jeans/jeans24.jpg"
    ] },
            { id: 24, name: "Straight Fit Stretch Washed Jeans", img: "/public/AllProducts/jeans/jeans31.webp", price: "₹1,999",images: [
        "/public/AllProducts/jeans/jeans31.webp",
        "/public/AllProducts/jeans/jeans32.webp",
        "/public/AllProducts/jeans/jeans33.webp",
        "/public/AllProducts/jeans/jeans34.jpg"
    ] },
            { id: 25, name: "Enigma Black Baggy Fit Jeans", img: "/public/AllProducts/jeans/jeans41.webp", price: "₹2,799",images: [
        "/public/AllProducts/jeans/jeans41.webp",
        "/public/AllProducts/jeans/jeans42.webp",
        "/public/AllProducts/jeans/jeans43.webp",
        "/public/AllProducts/jeans/jeans44.webp"
        
    ] },
            { id: 26, name: "Trendstitch Coin Grey Baggy Fit Jeans", img: "/public/AllProducts/jeans/jeans51.webp", price: "₹2,299",images: [
        "/public/AllProducts/jeans/jeans51.webp",
        "/public/AllProducts/jeans/jeans52.webp",
        "/public/AllProducts/jeans/jeans53.jpg",
        "/public/AllProducts/jeans/jeans54.webp"
    ] },
            { id: 27, name: "Boozy Grunge Blue Baggy Fit Jeans", img: "/public/AllProducts/jeans/jeans61.webp", price: "₹2,499",images: [
        "/public/AllProducts/jeans/jeans61.webp",
        "/public/AllProducts/jeans/jeans62.webp",
        "/public/AllProducts/jeans/jeans63.jpg",
        "/public/AllProducts/jeans/jeans64.webp"
    ] },
            { id: 28, name: "Straight Fit Stretch Washed Jeans", img: "/public/AllProducts/jeans/jeans71.webp", price: "₹2,199",images: [
        "/public/AllProducts/jeans/jeans71.webp",
        "/public/AllProducts/jeans/jeans72.webp",
        "/public/AllProducts/jeans/jeans73.webp",
        "/public/AllProducts/jeans/jeans74.jpg"
    ] }
        ],
        shorts: [
            { id: 29, name: "Loose Fit Shorts", img: "/public/AllProducts/Shorts/shorts11.webp", price: "₹1,699",images: [
        "/public/AllProducts/Shorts/shorts11.webp",
        "/public/AllProducts/Shorts/shorts12.webp",
        "/public/AllProducts/Shorts/shorts13.webp",
        "/public/AllProducts/Shorts/shorts14.webp"
    ] },
            { id: 30, name: "Cotton black Shorts", img: "/public/AllProducts/Shorts/shorts21.webp", price: "₹1,199",images: [
        "/public/AllProducts/Shorts/shorts21.webp",
        "/public/AllProducts/Shorts/shorts22.webp",
        "/public/AllProducts/Shorts/shorts23.webp",
        "/public/AllProducts/Shorts/shorts24.webp"
    ] },
            { id: 31, name: "Cotton beige shorts", img: "/public/AllProducts/Shorts/shorts31.webp", price: "₹999",images: [
        "/public/AllProducts/Shorts/shorts31.webp",
        "/public/AllProducts/Shorts/shorts32.webp",
        "/public/AllProducts/Shorts/shorts33.webp",
        "/public/AllProducts/Shorts/shorts34.webp"
    ] },
            { id: 32, name: "Linen Blend Stripes Shorts", img: "/public/AllProducts/Shorts/shorts41.webp", price: "₹1,499",images: [
        "/public/AllProducts/Shorts/shorts41.webp",
        "/public/AllProducts/Shorts/shorts42.webp",
        "/public/AllProducts/Shorts/shorts43.webp",
        "/public/AllProducts/shorts/shorts44.webp"
    ] },
            { id: 33, name: "Regular Fit Navy Shorts", img: "/public/AllProducts/Shorts/shorts51.webp", price: "₹1,199",images: [
        "/public/AllProducts/Shorts/shorts51.webp",
        "/public/AllProducts/Shorts/shorts52.webp",
        "/public/AllProducts/Shorts/shorts53.webp",
        "/public/AllProducts/Shorts/shorts54.jpg"
    ] },
            { id: 34, name: "Regular Fit Stretch Cargo Shorts", img: "/public/AllProducts/Shorts/shorts61.webp", price: "₹1,399",images: [
        "/public/AllProducts/Shorts/shorts61.webp",
        "/public/AllProducts/Shorts/shorts62.webp",
        "/public/AllProducts/Shorts/shorts63.webp",
        "/public/AllProducts/Shorts/shorts64.webp"
    ] },
            { id: 35, name: "Regular Fit Stretch Cargo Shorts", img: "/public/AllProducts/Shorts/shorts71.webp", price: "₹1,399",images: [
        "/public/AllProducts/Shorts/shorts71.webp",
        "/public/AllProducts/Shorts/shorts72.webp",
        "/public/AllProducts/Shorts/shorts73.webp",
        "/public/AllProducts/Shorts/shorts74.webp"
    ] }
        ],
        hoodies: [
            { id: 36, name: "Black Oversize Hoodie", img: "/public/AllProducts/Hoodies/hoodie11.webp", price: "₹1,299",images: [
        "/public/AllProducts/Hoodies/hoodie11.webp",
        "/public/AllProducts/Hoodies/hoodie12.webp",
        "/public/AllProducts/Hoodies/hoodie13.webp",
        "/public/AllProducts/Hoodies/Hoodie14.webp"
    ] },
            { id: 37, name: "Olive green Hoodie", img: "/public/AllProducts/Hoodies/hoodie21.webp", price: "₹1,199",images: [
        "/public/AllProducts/Hoodies/hoodie21.webp",
        "/public/AllProducts/Hoodies/hoodie22.webp",
        "/public/AllProducts/Hoodies/hoodie23.webp",
        "/public/AllProducts/Hoodies/hoodie24.webp"
    ] },
            { id: 38, name: "Velvet Blue Hoodie", img: "/public/AllProducts/Hoodies/hoodie31.webp", price: "₹999",images: [
        "/public/AllProducts/Hoodies/hoodie31.webp",
        "/public/AllProducts/Hoodies/hoodie32.webp",
        "/public/AllProducts/Hoodies/hoodie33.webp",
        "/public/AllProducts/Hoodies/hoodie34.webp"
    ] },
            { id: 39, name: "Dark Blue Hoodie", img: "/public/AllProducts/Hoodies/hoodie41.webp", price: "₹1,499",images: [
        "/public/AllProducts/Hoodies/hoodie41.webp",
        "/public/AllProducts/Hoodies/hoodie42.webp",
        "/public/AllProducts/Hoodies/hoodie43.webp",
        "/public/AllProducts/Hoodies/hoodie44.webp"
    ] },
        ],
        kurtas: [
            { id: 40, name: "Mandarin Collar Kurta", img: "/public/AllProducts/Kurta/Kurta11.webp", price: "₹1,299",images: [
        "/public/AllProducts/Kurta/Kurta11.webp",
        "/public/AllProducts/Kurta/kurta12.webp",
        "/public/AllProducts/Kurta/kurta13.webp",
        "/public/AllProducts/Kurta/kurta14.jpg"
    ] },
            { id: 41, name: "Mandarin Collar Kurta", img: "/public/AllProducts/Kurta/kurta21.webp", price: "₹1,199",images: [
        "/public/AllProducts/Kurta/kurta21.webp",
        "/public/AllProducts/Kurta/kurta22.webp",
        "/public/AllProducts/Kurta/kurta23.webp",
        "/public/AllProducts/Kurta/kurta24.jpg"
    ] },
            { id: 42, name: "Blue Collar Kurta", img: "/public/AllProducts/Kurta/kurta31.webp", price: "₹999",images: [
        "/public/AllProducts/Kurta/kurta31.webp",
        "/public/AllProducts/Kurta/kurta32.webp",
        "/public/AllProducts/Kurta/kurta33.webp",
        "/public/AllProducts/Kurta/kurta34.webp"
    ] },
            { id: 43, name: "White Kurta", img: "/public/AllProducts/Kurta/kurta41.webp", price: "₹1,499",images: [
        "/public/AllProducts/Kurta/kurta41.webp",
        "/public/AllProducts/Kurta/kurta42.webp",
        "/public/AllProducts/Kurta/kurta43.webp",
        "/public/AllProducts/Kurta/kurta44.webp"
    ] },
            { id: 44, name: "Mandarin Collar Kurta", img: "/public/AllProducts/Kurta/kurta51.webp", price: "₹1,399",images: [
        "/public/AllProducts/Kurta/kurta51.webp",
        "/public/AllProducts/Kurta/kurta52.webp",
        "/public/AllProducts/Kurta/kurta53.webp",
        "/public/AllProducts/Kurta/kurta54.webp"
    ] }
        ]
    });

    return (
        <productcontext.Provider value={[products, setProducts]}>{props.children}</productcontext.Provider>
    )
}

export default Productcontext;