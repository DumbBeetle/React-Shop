import * as React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import '@fontsource/roboto/400.css';
import {useCartContext} from "../../hooks/CartContext";
import "./ImgMediaCard.css"

export default function ImgMediaCard(props) {
    const cartContext = useCartContext();
    const {
        id, title, price, description, category, image, rating: {rate, count},
    } = props.item;
    const quantity = cartContext.getProductQuantity(id);
    return (

        <Card className="mui-card" sx={{maxWidth: 350}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={title}
                    image={image}
                    height="350"
                    sx={{objectFit: "contain"}}
                />
            </CardActionArea>
            <div>
                <CardContent>
                    <Typography gutterBottom variant="h5" align="center">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" align="center">
                        ${price}
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "center"}}>
                    {quantity === 0 ? (
                            <Button size="medium" variant="contained" onClick={() => cartContext.addItem(props.item)}>Add to
                                Cart</Button>) :
                        <>
                            <Button className="round-button" variant="contained"
                                    onClick={() => cartContext.incrementProduct(props.item.id)}>+</Button>
                            <Typography variant="body1" align="center">{quantity}</Typography>
                            <Button className="round-button" variant="contained"
                                    onClick={() => cartContext.decrementProduct(props.item.id)}>-</Button>
                        </>
                    }

                </CardActions>
            </div>
        </Card>

    );
}