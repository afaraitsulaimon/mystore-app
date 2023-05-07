import React, {useState, createContext} from "react";

import BgOneImage from '../assets/images/ladies-skirt2.jpg'
import GoldWatch1 from '../assets/images/productImage/gold-watch1.webp'
import GoldWatch2 from '../assets/images/productImage/gold-watch2.webp'
import GoldWatch3 from '../assets/images/productImage/gold-watch3.webp'
import WomenFootwear1 from '../assets/images/productImage/women-footwear1.webp'
import WomenFootwear2 from '../assets/images/productImage/women-footwear2.webp'
import WomenFootwear3 from '../assets/images/productImage/women-footwear3.webp'
import CrocsFootwear1 from '../assets/images/productImage/crocs1.webp'
import CrocsFootwear2 from '../assets/images/productImage/crocs2.webp'
import CrocsFootwear3 from '../assets/images/productImage/crocs3.webp'

import canvas1 from '../assets/images/productImage/VintageCanvas1.webp'
import canvas2 from '../assets/images/productImage/VintageCanvas2.webp'
import canvas3 from '../assets/images/productImage/VintageCanvas3.webp'

import WaterBag1 from '../assets/images/productImage/waterbag1.webp'
import WaterBag2 from '../assets/images/productImage/waterbag2.webp'
import WaterBag3 from '../assets/images/productImage/waterbag3.webp'

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState(
        [
            {
                id:1,
                title:'Ladies skirt',
                category:'Fashion',
                shortDescription:'Ankara skirt with ties ',
                description:'Ankara skirt with ties and very beautiful design',
                productImages: [`${BgOneImage}`,`${BgOneImage}`,`${BgOneImage}`,`${BgOneImage}`],
                productPrice: '904,500',
                rating: 5

            },
        
            {
                id:2,
                title:'Luxury Ladies Wrist',
                category:'Fashion',
                shortDescription:'Creativity 2023 Luxury Ladies Wrist Watch ',
                description:'Creativity 2023 Fashion Luxury Ladies Wrist Watches Top Brand Gold Steel Strap Waterproof Womens Bracelet Watch Zegarek Damski',
                productImages: [`${GoldWatch1}`,`${GoldWatch2}`,`${GoldWatch3}`],
                productPrice: '4,500',
                rating: 3


            },
        
            {
                id:3,
                title:'Sport Women Sandals',
                category:'Fashion',
                shortDescription:'High Quality Summer Sport Women Sandals ',
                description:'ENIOUSS 2023 New High Quality Summer Sport Women Sandals Plus Size 35-42 Soft Beach Shoes Fashion Flat Female Sandals Slippers',
                productImages: [`${WomenFootwear1}`,`${WomenFootwear2}`,`${WomenFootwear3}`],
                productPrice: '344,500',
                rating: 4

            },
            {
                id:4,
                title:'Clogs Women Sandals',
                category:'Fashion',
                shortDescription:'Clogs Women Sandals 2023 ',
                description:'Summer Hot Sale Fashion Clogs Women Sandals 2023 Platform Garden Casual Slippers Women Beach EVA Slippers Sandalias De Mujer',
                productImages: [`${CrocsFootwear1}`,`${CrocsFootwear2}`,`${CrocsFootwear3}`],
                productPrice: '1500',
                rating: 5

            },
            {
                id:5,
                title:'Backpack Men Shoulder Bag',
                category:'Accessories',
                shortDescription:'Vintage Canvas Backpack Men Large Capacity Travel',
                description:'Vintage Canvas Backpack Men Large Capacity Travel Shoulder Bag High Quality Fashion Students Bag Male notebook Laptop Backpack',
                productImages: [`${canvas1}`,`${canvas2}`,`${canvas3}`],
                productPrice: '700',
                rating: 2

            },
            {
                id:6,
                title:'Men travel backpack ',
                category:'Accessories',
                shortDescription:'VMen travel backpack outdoors Mountaineering bag',
                description:'large capacity 50L Men travel backpack outdoors Mountaineering bag waterproof Laptop Backpack Business Backpack With Shoe bag',
                productImages: [`${WaterBag1}`,`${WaterBag2}`,`${WaterBag3}`],
                productPrice: '22,900',
                rating: 5

            },

            {
                id:7,
                title:'Jeans skirt',
                category:'Fashion',
                shortDescription:'VCrazy jeans skirt for women',
                description:'Ankara skirt with ties and very beautiful design',
                productImages: [`${BgOneImage}`],
                productPrice: '107,900',
                rating: 4
            },
        
            {
                id:8,
                title:'Fine watch',
                category:'Watches',
                shortDescription:'Great watch to always keep you on time',
                description:'Creativity 2023 Fashion Luxury Ladies Wrist Watches Top Brand Gold Steel Strap Waterproof Womens Bracelet Watch Zegarek Damski',
                productImages: [`${GoldWatch1}`,`${GoldWatch2}`,`${GoldWatch3}`],
                productPrice: '9,900',
                rating: 3
            },
        ]
    );

    return (
        <ProductContext.Provider value={[products, setProducts]}>
                {props.children}
        </ProductContext.Provider>
    );
}