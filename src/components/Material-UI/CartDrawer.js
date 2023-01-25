import React, {useState} from 'react';
import {Box, Button, Drawer, Typography} from '@mui/material';
import {useCartContext} from "../../hooks/CartContext";
import CartProduct from "../Cart/CartProduct";

export const CartDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const cartContext = useCartContext();
    const cartProducts = cartContext.cartItems.map((item) => {
        return (
            <CartProduct
                key={item.id}
                productData={item}
                subtractButton={cartContext.decrementProduct}
                addButton={cartContext.incrementProduct}
            />
        );
    });
    return (
        <>
            <Button onClick={()=> setIsDrawerOpen(true)} aria-label="Cart Button">
                Cart
            </Button>
            <Drawer aria-label="Cart Area" anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box width="450px" role="presentation">
                    {cartProducts}
                </Box>
            </Drawer>
        </>
    );
};
