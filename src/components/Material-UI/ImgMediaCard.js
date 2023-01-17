import * as React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import '@fontsource/roboto/400.css';
import {useCartContext} from "../../hooks/CartContext";
import CustomTheme from "./CustomTheme";
import {RoundButton} from "./RoundButton";

export default function ImgMediaCard(props) {
    const cartContext = useCartContext();
    const {
        id, title, price, description, category, image, rating: {rate, count},
    } = props.item;
    const quantity = cartContext.getProductQuantity(id);
    const theme = CustomTheme();
    return (

        <Card sx={{maxWidth: 350}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={title}
                    image={image}
                    height="350"
                    sx={{objectFit: "contain"}}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" align="center">
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center">
                    ${price}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center"}}>
                {quantity === 0 ? (<Button size="medium" variant="contained" onClick={() => cartContext.addItem(props.item)}>Add to Cart</Button>) :
                    <>
                        <RoundButton variant="contained" onClick={() => cartContext.incrementProduct(props.item.id)}>+</RoundButton>
                        <Typography variant="body1" align="center">{quantity}</Typography>
                        <RoundButton variant="contained" onClick={() => cartContext.decrementProduct(props.item.id)}>-</RoundButton>
                    </>
                }

            </CardActions>
        </Card>
        // <Card sx={{maxWidth: 350}}>
        //     <CardActionArea>
        //         <CardMedia
        //             component="img"
        //             alt={title}
        //             height="250"
        //             image={image}
        //         />
        //     </CardActionArea>
        //     <CardContent>
        //         <Typography gutterBottom variant="h5" align="center">
        //             {title}
        //         </Typography>
        //         <Typography variant="body1" color="text.secondary" align="center">
        //             ${price}
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small" >Share</Button>
        //         <Button size="small">Learn More</Button>
        //     </CardActions>
        // </Card>
    );
}