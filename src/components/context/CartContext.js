import {createContext} from "react"
const cart = [
    {
        img: "https://demo.phlox.pro/shop-furniture-2/wp-content/uploads/sites/258/2020/12/Group-8075-637x637.jpg",
        price: "123",
        star: 2,
        name: "laptop",
    }
]
// intiailizing context with  creatcontext  and cart as default value
const CartContext = createContext({ cart, setCarts: () => { } })
export default CartContext