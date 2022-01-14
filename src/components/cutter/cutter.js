import React from 'react';
import {useSelector} from "react-redux";
import FilterSidebar from "../filterSidebar/filterSidebar";

const Cutter = () => {
    const products = useSelector((store) => store.products.products);
    const cutterProducts = products.filter(pr => pr.category === 'cutter');
    return (
        <div>
            <FilterSidebar products={cutterProducts}/>
        </div>
    );
};

export default Cutter;