import React from 'react';
import ProductCard from "../Banner/ProductCard"
import SectionOne from '../../MainPart/SectionOne/SectionOne';
import DiccountPart from '../../MainPart/Discount/DiccountPart';
import Products from '../../MainPart/BestSell/Products';
import DontMiss from '../../MainPart/DontMiss/DontMiss';
import LastSwiper from '../../EndPart/LastSwiper/LastSwiper';
import CustomerSupport from '../../EndPart/CustomerSupport/CustomerSupport';

const Home = () => {
    return (
        <div>
        <ProductCard/>
        <SectionOne/>
        <DiccountPart/>
        <Products/>
        <DontMiss/>
        <CustomerSupport/>
        <LastSwiper/>

        </div>
    );
};

export default Home;