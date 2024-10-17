import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart,setCart] = useState([])
    
    function addToCart (item){
        const arr = cart
        const itemIndex = cart.findIndex((data) => data.id === item.id)
      if(itemIndex === -1){
        arr.push({...item, quantity:1})
      }
      setCart([...arr])
    }

     function increaseQuantity(id) {
       const arr = cart;
       const itemIndex = cart.findIndex((data) => data.id === id);
       if (itemIndex != -1) {
         arr[itemIndex].quantity++;
       }
       setCart([...arr]);
     }

    
    function decreaseQuantity(id) {
      const arr = cart;
      const itemIndex = cart.findIndex((data) => data.id === id);
      if (itemIndex != -1) {
        if (arr[itemIndex].quantity > 1) {
          arr[itemIndex].quantity--;
        } else if (arr[itemIndex].quantity === 1) {
          arr.splice(itemIndex, 1);
        }
        setCart([...arr]);
      }
    }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
