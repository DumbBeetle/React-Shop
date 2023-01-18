import React, {useState} from 'react';
import {Box, Button, Drawer, Typography} from '@mui/material';
import {useCartContext} from "../../hooks/CartContext";

export const CartDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <Button onClick={()=> setIsDrawerOpen(true)} aria-label="Cart Button">
                Cart
            </Button>
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box width="300px" role="presentation">
                </Box>
            </Drawer>
        </>
    );
};
