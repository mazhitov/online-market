import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        apiKey: "AIzaSyDpJeytlxWo5Re6Drh0N_Ju4d8VtsX4oIE",
        authDomain: "market-5504b.firebaseapp.com",
        databaseURL: "https://market-5504b-default-rtdb.firebaseio.com",
        projectId: "market-5504b",
        storageBucket: "market-5504b.appspot.com",
        messagingSenderId: "642402521261",
        appId: "1:642402521261:web:bf0bb3124f8d6e5fe37624"
    }
})

export const productsAPI = {
    getProducts() {
        return instance.get('https://market-5504b-default-rtdb.firebaseio.com/products.json')
            .then(response => response.data);
    }
};