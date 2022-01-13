import React from 'react';
import {useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";

const Product = () => {
    const products = useSelector((store) => store.products.products);
    const currentProductId = useParams().id;
    const product = products.find(product => product.id === currentProductId);
    return (
        <div className="card mb-2 p-4">
            <div className="p-5 w-75">
                <img src={product.imgUrl}
                     className="card-img-top"
                     alt={product.model}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.company}</h5>
                <p className="card-text small">{product.model}</p>
                <p className="card-text"><strong>Описание: </strong> {product.description}</p>
                <p className="card-text small"><strong>Дата поступления на склад: </strong> {product.date}</p>
                <div className="card-text">Цена: {product.price} USD</div>
            </div>
            <div className="p-3 text-right">
                <NavLink to={`/product/${product.id}/edit`}
                         className="btn btn-primary mr-3">Изменить</NavLink>
                <button className="btn btn-danger">Удалить</button>
            </div>
        </div>
    );
};

export default Product;