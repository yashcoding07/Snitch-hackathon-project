import { createContext, useState } from "react"

export const productcontext = createContext(null)

const Productcontext = (props) => {

    const [products, setProducts] = useState({
        shirts: [
            { id: 1, name: "Slim Fit Stripes 100% Cotton Luxe", img: "/AllProducts/Shirts/shirt11.webp", price: "₹1599",
        images: [
        "/AllProducts/Shirts/shirt11.webp",
        "/AllProducts/Shirts/shirt12.webp",
        "/AllProducts/Shirts/shirt13.webp",
        "/AllProducts/Shirts/shirt14.webp"
    ] },
            { id: 2, name: "Regular Fit Burgundy Shirt", img: "/AllProducts/Shirts/shirt21.webp", price: "₹1,299",
        images: [
        "/AllProducts/Shirts/shirt21.webp",
        "/AllProducts/Shirts/shirt22.webp",
        "/AllProducts/Shirts/shirt23.webp",
        "/AllProducts/Shirts/shirt24.jpg"
    ] },
            { id: 3, name: "Stripes Shirt", img: "/AllProducts/Shirts/shirt31.webp", price: "₹1,399",
        images: [
        "/AllProducts/Shirts/shirt31.webp",
        "/AllProducts/Shirts/shirt32.webp",
        "/AllProducts/Shirts/shirt33.webp",
        "/AllProducts/Shirts/shirt34.jpg"
    ] },
            { id: 4, name: "Quartet Green Stripe Shirt", img: "/AllProducts/Shirts/shirt41.webp", price: "₹1,099",
        images: [
        "/AllProducts/Shirts/shirt41.webp",
        "/AllProducts/Shirts/shirt42.webp",
        "/AllProducts/Shirts/shirt43.webp",
        "/AllProducts/Shirts/shirt44.jpg"
    ] },
            { id: 5, name: "Stripes Regular Fit Shirt", img: "/AllProducts/Shirts/shirt51.webp", price: "₹1,599",
        images: [
        "/AllProducts/Shirts/shirt51.webp",
        "/AllProducts/Shirts/shirt52.webp",
        "/AllProducts/Shirts/shirt53.webp",
        "/AllProducts/Shirts/shirt54.jpg"
    ] },
            { id: 6, name: "Green Button Down Slim Shirt", img: "/AllProducts/Shirts/shirt61.webp", price: "₹1,249",
        images: [
        "/AllProducts/Shirts/shirt61.webp",
        "/AllProducts/Shirts/shirt62.webp",
        "/AllProducts/Shirts/shirt63.webp",
        "/AllProducts/Shirts/shirt64.jpg"
    ] },
            { id: 7, name: "Lavender Button Down Slim Shirt", img: "/AllProducts/Shirts/shirt71.webp", price: "₹1,349",
        images: [
        "/AllProducts/Shirts/shirt71.webp",
        "/AllProducts/Shirts/shirt72.webp",
        "/AllProducts/Shirts/shirt73.webp",
        "/AllProducts/Shirts/shirt74.jpg"
    ] }
        ],
        tshirts: [
            { id: 8, name: "Slim Fit Stretch Polo T-Shirt", img: "/AllProducts/tshirts/tshirt11.webp", price: "₹899",
    images: [
        "/AllProducts/tshirts/tshirt11.webp",
        "/AllProducts/tshirts/tshirt12.webp",
        "/AllProducts/tshirts/tshirt13.webp",
        "/AllProducts/tshirts/tshirt14.jpg"
    ] },
            { id: 9, name: "Regular Fit Zipper Polo T-Shirt", img: "/AllProducts/tshirts/tshirt21.webp", price: "₹799",
    images: [
        "/AllProducts/tshirts/tshirt21.webp",
        "/AllProducts/tshirts/tshirt22.webp",
        "/AllProducts/tshirts/tshirt23.jpg",
        "/AllProducts/tshirts/tshirt24.jpg"
    ] },
            { id: 10, name: "Stay Vibrant Oversized T-Shirt", img: "/AllProducts/tshirts/tshirt31.webp", price: "₹849",
    images: [
        "/AllProducts/tshirts/tshirt31.webp",
        "/AllProducts/tshirts/tshirt32.webp",
        "/AllProducts/tshirts/tshirt33.webp",
        "/AllProducts/tshirts/tshirt34.webp"
    ] },
            { id: 11, name: "Regular Fit Stretch Jaquard Polo T-Shirt", img: "/AllProducts/tshirts/tshirt41.webp", price: "₹999",
    images: [
        "/AllProducts/tshirts/tshirt41.webp",
        "/AllProducts/tshirts/tshirt42.webp",
        "/AllProducts/tshirts/tshirt43.webp",
        "/AllProducts/tshirts/tshirt44.jpg"
    ] },
            { id: 12, name: "Slim Fit Stretch Polo T-Shirt", img: "/AllProducts/tshirts/tshirt51.webp", price: "₹1,199",
    images: [
        "/AllProducts/tshirts/tshirt51.webp",
        "/AllProducts/tshirts/tshirt52.webp",
        "/AllProducts/tshirts/tshirt53.webp",
        "/AllProducts/tshirts/tshirt54.webp"
    ] },
            { id: 13, name: "Regular Fit Zipper Polo T-Shirt", img: "/AllProducts/tshirts/tshirt61.webp", price: "₹1,099",
    images: [
        "/AllProducts/tshirts/tshirt61.webp",
        "/AllProducts/tshirts/tshirt62.webp",
        "/AllProducts/tshirts/tshirt63.webp",
        "/AllProducts/tshirts/tshirt64.jpg"
    ] },
            { id: 14, name: "Regular Fit Stretch Flat Knit Polo T-Shirt", img: "/AllProducts/tshirts/tshirt71.jpg", price: "₹899",
    images: [
        "/AllProducts/tshirts/tshirt71.jpg",
        "/AllProducts/tshirts/tshirt72.webp",
        "/AllProducts/tshirts/tshirt73.webp",
        "/AllProducts/tshirts/tshirt74.jpg"
    ] }
        ],
        trousers: [
            { id: 15, name: "Black Stretch Trousers", img: "/AllProducts/trousers/trousers11.webp", price: "₹1,499",
        images: [
        "/AllProducts/trousers/trousers11.webp",
        "/AllProducts/trousers/trousers12.webp",
        "/AllProducts/trousers/trousers13.webp",
        "/AllProducts/trousers/trousers14.webp"
    ] },
            { id: 16, name: "Straight Fit Stretch Trousers", img: "/AllProducts/trousers/trousers21.webp", price: "₹1,799",
        images: [
        "/AllProducts/trousers/trousers21.webp",
        "/AllProducts/trousers/trousers22.webp",
        "/AllProducts/trousers/trousers23.webp",
        "/AllProducts/trousers/trousers24.webp"
    ] },
            { id: 17, name: "Stretch Regular Fit Trousers", img: "/AllProducts/trousers/trousers31.webp", price: "₹1,399",
        images: [
        "/AllProducts/trousers/trousers31.webp",
        "/AllProducts/trousers/trousers32.webp",
        "/AllProducts/trousers/trousers33.webp",
        "/AllProducts/trousers/trousers34.webp"
    ] },
            { id: 18, name: "Relaxed Fit Stretch Trousers", img: "/AllProducts/trousers/trousers41.webp", price: "₹1,599",
        images: [
        "/AllProducts/trousers/trousers41.webp",
        "/AllProducts/trousers/trousers42.webp",
        "/AllProducts/trousers/trousers43.webp",
        "/AllProducts/trousers/trousers44.webp"
    ] },
            { id: 19, name: "Linen Blend Stripes Regular Fit Trous", img: "/AllProducts/trousers/trousers51.webp", price: "₹1,899",
        images: [
        "/AllProducts/trousers/trousers51.webp",
        "/AllProducts/trousers/trousers52.webp",
        "/AllProducts/trousers/trousers53.webp",
        "/AllProducts/trousers/trousers54.webp"
    ] },
            { id: 20, name: "Linen Blend Stripes Regular Fit Trous", img: "/AllProducts/trousers/trousers61.webp", price: "₹1,299",
        images: [
        "/AllProducts/trousers/trousers61.webp",
        "/AllProducts/trousers/trousers62.webp",
        "/AllProducts/trousers/trousers63.webp",
        "/AllProducts/trousers/trousers64.jpg"
    ] },
            { id: 21, name: "Olive Green Trousers", img: "/AllProducts/trousers/trousers71.webp", price: "₹1,449",
        images: [
        "/AllProducts/trousers/trousers71.webp",
        "/AllProducts/trousers/trousers72.webp",
        "/AllProducts/trousers/trousers73.webp",
        "/AllProducts/trousers/trousers74.webp"
    ] }
        ],
        jeans: [
            { id: 22, name: "Slim Fit Stretch Jeans", img: "/AllProducts/jeans/jeans11.webp", price: "₹2,199",images: [
        "/AllProducts/jeans/jeans11.webp",
        "/AllProducts/jeans/jeans12.webp",
        "/AllProducts/jeans/jeans13.webp",
        "/AllProducts/jeans/jeans14.webp"
    ] },
            { id: 23, name: "Washed Loose Fit Jeans", img: "/AllProducts/jeans/jeans21.jpg", price: "₹2,399",images: [
        "/AllProducts/jeans/jeans21.jpg",
        "/AllProducts/jeans/jeans22.webp",
        "/AllProducts/jeans/jeans23.webp",
        "/AllProducts/jeans/jeans24.jpg"
    ] },
            { id: 24, name: "Straight Fit Stretch Washed Jeans", img: "/AllProducts/jeans/jeans31.webp", price: "₹1,999",images: [
        "/AllProducts/jeans/jeans31.webp",
        "/AllProducts/jeans/jeans32.webp",
        "/AllProducts/jeans/jeans33.webp",
        "/AllProducts/jeans/jeans34.jpg"
    ] },
            { id: 25, name: "Enigma Black Baggy Fit Jeans", img: "/AllProducts/jeans/jeans41.webp", price: "₹2,799",images: [
        "/AllProducts/jeans/jeans41.webp",
        "/AllProducts/jeans/jeans42.webp",
        "/AllProducts/jeans/jeans43.webp",
        "/AllProducts/jeans/jeans44.webp"
        
    ] },
            { id: 26, name: "Trendstitch Coin Grey Baggy Fit Jeans", img: "/AllProducts/jeans/jeans51.webp", price: "₹2,299",images: [
        "/AllProducts/jeans/jeans51.webp",
        "/AllProducts/jeans/jeans52.webp",
        "/AllProducts/jeans/jeans53.jpg",
        "/AllProducts/jeans/jeans54.webp"
    ] },
            { id: 27, name: "Boozy Grunge Blue Baggy Fit Jeans", img: "/AllProducts/jeans/jeans61.webp", price: "₹2,499",images: [
        "/AllProducts/jeans/jeans61.webp",
        "/AllProducts/jeans/jeans62.webp",
        "/AllProducts/jeans/jeans63.jpg",
        "/AllProducts/jeans/jeans64.webp"
    ] },
            { id: 28, name: "Straight Fit Stretch Washed Jeans", img: "/AllProducts/jeans/jeans71.webp", price: "₹2,199",images: [
        "/AllProducts/jeans/jeans71.webp",
        "/AllProducts/jeans/jeans72.webp",
        "/AllProducts/jeans/jeans73.webp",
        "/AllProducts/jeans/jeans74.jpg"
    ] }
        ],
        shorts: [
            { id: 29, name: "Loose Fit Shorts", img: "/AllProducts/Shorts/shorts11.webp", price: "₹1,699",images: [
        "/AllProducts/Shorts/shorts11.webp",
        "/AllProducts/Shorts/shorts12.webp",
        "/AllProducts/Shorts/shorts13.webp",
        "/AllProducts/Shorts/shorts14.webp"
    ] },
            { id: 30, name: "Cotton black Shorts", img: "/AllProducts/Shorts/shorts21.webp", price: "₹1,199",images: [
        "/AllProducts/Shorts/shorts21.webp",
        "/AllProducts/Shorts/shorts22.webp",
        "/AllProducts/Shorts/shorts23.webp",
        "/AllProducts/Shorts/shorts24.webp"
    ] },
            { id: 31, name: "Cotton beige shorts", img: "/AllProducts/Shorts/shorts31.webp", price: "₹999",images: [
        "/AllProducts/Shorts/shorts31.webp",
        "/AllProducts/Shorts/shorts32.webp",
        "/AllProducts/Shorts/shorts33.webp",
        "/AllProducts/Shorts/shorts34.webp"
    ] },
            { id: 32, name: "Linen Blend Stripes Shorts", img: "/AllProducts/Shorts/shorts41.webp", price: "₹1,499",images: [
        "/AllProducts/Shorts/shorts41.webp",
        "/AllProducts/Shorts/shorts42.webp",
        "/AllProducts/Shorts/shorts43.webp",
        "/AllProducts/Shorts/shorts44.webp"
    ] },
            { id: 33, name: "Regular Fit Navy Shorts", img: "/AllProducts/Shorts/shorts51.webp", price: "₹1,199",images: [
        "/AllProducts/Shorts/shorts51.webp",
        "/AllProducts/Shorts/shorts52.webp",
        "/AllProducts/Shorts/shorts53.webp",
        "/AllProducts/Shorts/shorts54.jpg"
    ] },
            { id: 34, name: "Regular Fit Stretch Cargo Shorts", img: "/AllProducts/Shorts/shorts61.webp", price: "₹1,399",images: [
        "/AllProducts/Shorts/shorts61.webp",
        "/AllProducts/Shorts/shorts62.webp",
        "/AllProducts/Shorts/shorts63.webp",
        "/AllProducts/Shorts/shorts64.webp"
    ] },
            { id: 35, name: "Regular Fit Stretch Cargo Shorts", img: "/AllProducts/Shorts/shorts71.webp", price: "₹1,399",images: [
        "/AllProducts/Shorts/shorts71.webp",
        "/AllProducts/Shorts/shorts72.webp",
        "/AllProducts/Shorts/shorts73.webp",
        "/AllProducts/Shorts/shorts74.webp"
    ] }
        ],
        hoodies: [
            { id: 36, name: "Black Oversize Hoodie", img: "/AllProducts/Hoodies/hoodie11.webp", price: "₹1,299",images: [
        "/AllProducts/Hoodies/hoodie11.webp",
        "/AllProducts/Hoodies/hoodie12.webp",
        "/AllProducts/Hoodies/hoodie13.webp",
        "/AllProducts/Hoodies/Hoodie14.webp"
    ] },
            { id: 37, name: "Olive green Hoodie", img: "/AllProducts/Hoodies/hoodie21.webp", price: "₹1,199",images: [
        "/AllProducts/Hoodies/hoodie21.webp",
        "/AllProducts/Hoodies/hoodie22.webp",
        "/AllProducts/Hoodies/hoodie23.webp",
        "/AllProducts/Hoodies/hoodie24.webp"
    ] },
            { id: 38, name: "Velvet Blue Hoodie", img: "/AllProducts/Hoodies/hoodie31.webp", price: "₹999",images: [
        "/AllProducts/Hoodies/hoodie31.webp",
        "/AllProducts/Hoodies/hoodie32.webp",
        "/AllProducts/Hoodies/hoodie33.webp",
        "/AllProducts/Hoodies/hoodie34.webp"
    ] },
            { id: 39, name: "Dark Blue Hoodie", img: "/AllProducts/Hoodies/hoodie41.webp", price: "₹1,499",images: [
        "/AllProducts/Hoodies/hoodie41.webp",
        "/AllProducts/Hoodies/hoodie42.webp",
        "/AllProducts/Hoodies/hoodie43.webp",
        "/AllProducts/Hoodies/hoodie44.webp"
    ] },
        ],
        kurtas: [
            { id: 40, name: "Mandarin Collar Kurta", img: "/AllProducts/Kurta/Kurta11.webp", price: "₹1,299",images: [
        "/AllProducts/Kurta/Kurta11.webp",
        "/AllProducts/Kurta/kurta12.webp",
        "/AllProducts/Kurta/kurta13.webp",
        "/AllProducts/Kurta/kurta14.jpg"
    ] },
            { id: 41, name: "Mandarin Collar Kurta", img: "/AllProducts/Kurta/kurta21.webp", price: "₹1,199",images: [
        "/AllProducts/Kurta/kurta21.webp",
        "/AllProducts/Kurta/kurta22.webp",
        "/AllProducts/Kurta/kurta23.webp",
        "/AllProducts/Kurta/kurta24.jpg"
    ] },
            { id: 42, name: "Blue Collar Kurta", img: "/AllProducts/Kurta/kurta31.webp", price: "₹999",images: [
        "/AllProducts/Kurta/kurta31.webp",
        "/AllProducts/Kurta/kurta32.webp",
        "/AllProducts/Kurta/kurta33.webp",
        "/AllProducts/Kurta/kurta34.webp"
    ] },
            { id: 43, name: "White Kurta", img: "/AllProducts/Kurta/kurta41.webp", price: "₹1,499",images: [
        "/AllProducts/Kurta/kurta41.webp",
        "/AllProducts/Kurta/kurta42.webp",
        "/AllProducts/Kurta/kurta43.webp",
        "/AllProducts/Kurta/kurta44.webp"
    ] },
            { id: 44, name: "Mandarin Collar Kurta", img: "/AllProducts/Kurta/kurta51.webp", price: "₹1,399",images: [
        "/AllProducts/Kurta/kurta51.webp",
        "/AllProducts/Kurta/kurta52.webp",
        "/AllProducts/Kurta/kurta53.webp",
        "/AllProducts/Kurta/kurta54.webp"
    ] }
        ]
    });

    return (
        <productcontext.Provider value={[products, setProducts]}>{props.children}</productcontext.Provider>
    )
}

export default Productcontext;