import React from 'react';
import {useSelector} from "react-redux";
import FilterSidebar from "../filterSidebar/filterSidebar";
const Tv = () => {
    const products = useSelector((store) => store.products.products);
    const tvProducts = products.filter(pr => pr.category === 'tv');
    return (
        <div>
            <FilterSidebar products={tvProducts}/>
        </div>
    );
};

export default Tv;