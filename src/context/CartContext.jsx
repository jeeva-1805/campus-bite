import { useState } from "react";

import { CartContext } from "./CartContextValue";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
 const [orders, setOrders] = useState(() => {
  const savedOrders = localStorage.getItem("orders");

  return savedOrders ? JSON.parse(savedOrders) : [];
});

  // Add food to cart
  const addToCart = (food) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === food.id
            ? {
                ...item,
                cartQuantity: item.cartQuantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...food,
          cartQuantity: 1,
        },
      ];
    });
  };

  // Remove item
  const removeFromCart = (foodId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== foodId)
    );
  };

  // Increase quantity
  const increaseQuantity = (foodId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === foodId
          ? {
              ...item,
              cartQuantity: item.cartQuantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (foodId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === foodId
            ? {
                ...item,
                cartQuantity: item.cartQuantity - 1,
              }
            : item
        )
        .filter((item) => item.cartQuantity > 0)
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Place order
  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      total: cartTotal,
      customer: orderDetails,
      status: "Confirmed",
      createdAt: new Date().toLocaleString(),
    };

   setOrders((currentOrders) => {
  const updatedOrders = [newOrder, ...currentOrders];

  localStorage.setItem(
    "orders",
    JSON.stringify(updatedOrders)
  );

  return updatedOrders;
});
    setCartItems([]);
  };

  // Cart count
  const cartCount = cartItems.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  // Cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        placeOrder,
        orders,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
