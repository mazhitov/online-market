
let initialState = {
    products: [
        {
            id: "1",
            category: "tv",
            company: "Samsung",
            model: "G2105",
            price: "1000",
            date: "2021-01-12",
            description: "Good stuff",
        },
        {
            id: "2",
            category: "cutter",
            company: "Samsung",
            model: "Insaneone",
            price: "250.26",
            date: "2022-01-10",
            description: "Good stuff",
        },
        {
            id: "3",
            category: "fridge",
            company: "Samsung",
            model: "SuperPuper",
            price: "999.99",
            date: "2022-01-8",
            description: "Good stuff",
        },

    ],
};
const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default products;