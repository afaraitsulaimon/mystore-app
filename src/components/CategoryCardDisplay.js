import React from 'react'
import {  Card } from '../assets/styles/CategoryCardDisplayStyles'
import {CardDatas} from '../utils/CategoryCardData'
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const CategoryCardDisplay = () => {
  return (
    <Splide options={{
        perPage:5,
        arrows:true,
        pagination:false,
        drag:"free",
        gap: "2rem",
        type:'loop',
        // autoScroll: {
        //   speed: 1,
        //   pauseOnHover: true,

        // },
     
   }}
   extensions={{ AutoScroll }}

   >
        {CardDatas.map((cardData) => 
            
                <SplideSlide key={cardData.id}>
                <Card cardBg={cardData.catBgImage}>
                        <p>{cardData.categoryName}</p>
                </Card>
                </SplideSlide>

            
        )}
    </Splide>
  )
}

export default CategoryCardDisplay