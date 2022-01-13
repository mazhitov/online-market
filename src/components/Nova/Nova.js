import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const sortByDate = (products) => {
    return products.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
};
const Nova = () => {
    const products = useSelector((store) => store.products.products);
    const novaProducts = sortByDate(products);

    return (
        <div className="p-3 card">
            <h3>Новинки</h3>
            <div className="list-group">
                {novaProducts.map(product => (
                    <NavLink to={'/product/' + product.id}
                             key={product.id.toString()}
                             className="text-left btn"
                             >
                        <div className="list-group-item">
                            <span className="mr-3">{product.category}</span>
                            <span className="mr-3">{product.company}</span>
                            <span className="mr-3">{product.model}</span>
                            <span className="mr-3">{product.price}$</span>
                        </div>
                    </NavLink>
                ))
                }
            </div>
        </div>
    );
};

export default Nova;