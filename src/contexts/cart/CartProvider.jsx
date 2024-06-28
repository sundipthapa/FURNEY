import { useState } from "react";
import { toast } from "react-toastify";
import { addToCartApi, createOrUpdateCart, getCartByIdApi } from "../../apis/api";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);

    const owner = JSON.parse(localStorage.getItem("user"));
    const user = owner ? owner._id : null;


    // Login function to update the authentication state
    const getCarts =  () => {
        getCartByIdApi(user)
            .then(res => {
                console.log("Cart by user", res.data);
                setCart(res.data)
            }).catch(err => {
                console.log(err);
                toast("Error fetching cart")
            })
    };


    const saveCarts = (payload) => {
        createOrUpdateCart(user, payload)
            .then(res => {
                console.log(res.data);
                toast("Add to cart success")
                getCarts()
            }).catch(err => {
                console.log(err);
                toast("Add to cart failed")

            })
    };

    const addToCart = (product) => {
        console.log("PRODUCT" , product)
        if (user) {
            addToCartApi(user, product).then(res => {
                toast("Add to cart success")
                console.log(res);
            }).catch(err => {
                console.log(err);
                toast("Add to cart failed")

            })
        } else {
            //goto login
        }

    }


    // Provide the updated values to the context
    const uploadContextValue = {
        cart,
        getCarts,
        addToCart,
        saveCarts
    };

    return (
        <CartContext.Provider value={uploadContextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider