const sortByDate = (products) => {
    return products.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });
};
const sortByPriceLow = (products) => {
    return products.sort(function (a, b) {
        return b.price - a.price;
    });
};
const sortByName = (products, key) => {
    return products.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    })
}
const Sort = (method, data) => {
   switch (method) {
       case 'nova':
           return sortByDate(data);
       case 'priceHigh':
           return sortByName(data, 'price');
       case 'priceLow':
           return sortByPriceLow(data);
       case 'model':
           return sortByName(data, 'model');
       default:
           return sortByDate(data);
   }
};

export default Sort;