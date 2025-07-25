import React from 'react';
import FirstSection from '../components/FirstSection';
import coverpic from "../assets/coverimage.jpg";
import ShopImages from '../components/ShopImages';
import coral1 from "../assets/shop/coral1.jpg"
import blue from "../assets/shop/blue.jpg"
import royall from "../assets/shop/royall.jpg"
const Shop = () => {
    return (
        <div>
            <FirstSection text1="SHOP" bgImg={coverpic}/>
           <ShopImages image1={coral1} image2={blue} image3={royall}/>
        </div>
    );
};

export default Shop;