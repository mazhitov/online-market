import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addProduct, editProduct} from "../../redux/products-reducer";
import {useNavigate} from "react-router";

const getDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let newMonth = month.toString();
    if (month < 10) newMonth = '0' + month.toString();
    let newDay = day.toString();
    if (day < 10) newDay = '0' + day;
    return year + '-' + newMonth + '-' + newDay;
};

const Add = () => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
        setValue,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            myFormData: {
                category: '',
                company: '',
                model: '',
                price: 0,
                date: getDate(),
                description: '',
                imgUrl: '',
            }
        }
    });
    const products = useSelector((store) => store.products.products);
    const categories = useSelector((store) => store.products.categories);
    const companies = useSelector((store) => store.products.companies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productId = useParams().id;
    useEffect(() => {
        if (productId) {
            const product = products.find(pr => pr.id === productId);
            setValue('myFormData', {
                category: product.category,
                company: product.company,
                model: product.model,
                price: product.price,
                date: product.date,
                description: product.description,
                imgUrl: product.imgUrl,
            })
        } else {
            reset();
        }
    }, [productId]);
    const onSubmit = (data) => {
        const id = productId || (parseInt(products[products.length - 1].id) + 1).toString();
        const body = {
            id,
            ...data.myFormData,
            price: parseInt(data.myFormData.price),
        }
        if(productId) {
            dispatch(editProduct(body));

        }else {
            dispatch(addProduct(body));
        }
        navigate('/product/' + id);
        reset();
    }
    return (
        <div className="p-3">
            <h3>{productId? '???????????????? ??????????' : '???????????????? ??????????'}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="category">??????????????????</label>
                    <select
                        className="form-control"
                        {...register("myFormData.category", {
                            required: "???????????????? ??????????????????",
                        })}
                    >
                        <option value="">???????????????? ??????????????????</option>
                        {
                            categories.map(category => (
                                <option value={category.value}
                                        key={category.value}>{category.name}</option>
                            ))
                        }
                    </select>
                    <span className="border-danger text-danger">{errors?.myFormData?.category &&
                        <p>{errors?.myFormData?.category?.message || 'Error!'}</p>
                    }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="company">????????????????</label>
                    <select
                        className="form-control"
                        id="company"
                        {...register("myFormData.company", {
                            required: "???????????????? ????????????????",
                        })}
                    >
                        <option value="">???????????????? ????????????????</option>
                        {
                            companies.map(company => (
                                <option value={company.value}
                                        key={company.value}>{company.name}</option>
                            ))
                        }
                    </select>
                    <span className="border-danger text-danger">{errors?.myFormData?.company &&
                        <p>{errors?.myFormData?.company?.message || 'Error!'}</p>
                    }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="model">????????????????</label>
                    <input type="text"
                           id="model"
                           className="form-control"
                           {...register("myFormData.model", {
                               required: '?????????????? ???????????????? ????????????',
                           })}
                    />
                    <span className="border-danger text-danger">{errors?.myFormData?.model &&
                        <p>{errors?.myFormData?.model?.message || 'Error!'}</p>
                    }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="price">????????</label>
                    <input type="number"
                           id="price"
                           className="form-control"
                           {...register("myFormData.price", {
                               required: '?????????????? ???????? ????????????',
                               validate: value => parseInt(value) > 0,
                           })}
                    />
                    <span className="border-danger text-danger">{errors?.myFormData?.price &&
                        <p>{errors?.myFormData?.price?.type === "required" && errors?.myFormData?.price?.message}</p>
                    }</span>
                    <span className="border-danger text-danger">{
                        <p>{errors?.myFormData?.price?.type === "validate" && '???????? ???????????? ???????? ???????????? ????????!'}</p>
                    }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="date">????????</label>
                    <input type="date"
                           id="date"
                           className="form-control"
                           {...register("myFormData.date", {
                               max: {
                                   value: getDate(),
                                   message: '???????????? ?????????????? ???????? ????????????????'
                               }
                           })}
                           defaultValue={getDate()}
                    />
                    <span className="border-danger text-danger">{errors?.myFormData?.date &&
                        <p>{errors?.myFormData?.date?.message || 'Error!'}</p>
                    }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="description">???????????????? ????????????</label>
                    <textarea className="form-control"
                              {...register("myFormData.description", {
                                  maxLength: {
                                      value: 100,
                                      message: '???????????????? ???? ???????????? ?????????????????? ???????????? 100 ????????????????',
                                  }
                              })}
                    />
                    <span className="border-danger text-danger">{errors?.myFormData?.description &&
                        <p>{errors?.myFormData?.description?.message || 'Error!'}</p>
                    }</span>
                </div>
                <div className="form-group">
                    <label htmlFor="imgUrl">???????????? ???? ????????????????</label>
                    <input type="text" id="imgUrl" className="form-control"
                              {...register("myFormData.imgUrl", {
                                  required: '???????????????? ???????????? ???? ????????????????',
                              })}
                    />
                    <span className="border-danger text-danger">{errors?.myFormData?.imgUrl &&
                        <p>{errors?.myFormData?.imgUrl?.message || 'Error!'}</p>
                    }</span>
                </div>
                <button type="submit"
                        className="btn btn-success"
                        disabled={!isValid}
                >{productId? '??????????????????' : '??????????????'}</button>
            </form>
        </div>
    );
};

export default Add;