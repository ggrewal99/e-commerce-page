"use client"
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newCartItem) => {
        // Check if the item is already in the cart
        const existingItemIndex = cartItems.findIndex(item => item.id === newCartItem.id);

        // If the item is in the cart, update its quantity
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += newCartItem.quantity;
            setCartItems(updatedCartItems);
        } else {
            // If the item is not in the cart, add it
            setCartItems(prevCartItems => [...prevCartItems, newCartItem]);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevCartItems => {
            const updatedCartItems = prevCartItems.map(item => {
                if (item.id === itemId) {
                    // Decrease quantity by 1
                    const updatedQuantity = item.quantity - 1;
                    // If quantity becomes zero, remove the item
                    return updatedQuantity > 0 ? { ...item, quantity: updatedQuantity } : null;
                }
                return item;
            });
            // Remove null entries (items with quantity zero) from the array
            return updatedCartItems.filter(item => item !== null);
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
