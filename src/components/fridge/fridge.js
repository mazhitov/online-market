import React from 'react';
import {useSelector} from "react-redux";
import FilterSidebar from "../filterSidebar/filterSidebar";

const Fridge = () => {
    const products = useSelector((store) => store.products.products);
    const fridgeProducts = products.filter(pr => pr.category === 'fridge');
    return (
        <div>
            <FilterSidebar products={fridgeProducts}/>
        </div>
    );
};

export default Fridge;