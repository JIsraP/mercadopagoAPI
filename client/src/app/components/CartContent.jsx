import React, { Fragment, useEffect, useState } from 'react';
import { useCart } from '../../hooks';
import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { PUBLIC_KEY } from '../../config';
import axios from 'axios';


const CartContentContainer = styled('div')({
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%',
    width: '400px',
    backgroundColor: '#fff',
    boxShadow: '-3px 0px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    transform: 'translateX(100%)',
    '&.open': {
        transform: 'translateX(0)',
    },
});

export const CartContent = () => {
    const { items } = useCart();
    const [products, setProducts] = useState([])
    const totalPrice = items.reduce((total, product) => total + product.price, 0);
    const subtotal = totalPrice * 0.84;
    const iva = totalPrice * 0.16;

    const [preferenceID, setPreference] = useState(null);

    initMercadoPago(PUBLIC_KEY, {
        locale: 'es-MX',
    });

    const createPreference = async (items) => {
        try {
            const response = await axios.post("http://127.0.0.1:3000/create_preference", { items });
            const { id } = response.data;
            return id;
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const handleClick = async () => {
        const id = await createPreference(products);
        if (id) {
            setPreference(id);
        }
    };

    useEffect(() => {
        const updatedProducts = items.map(item => ({
            title: item.name,
            quantity: 1,
            unit_price: item.price
        }));
        
        setProducts(updatedProducts);
    }, [items])

    return (
        <CartContentContainer className="open">
            <Grid container height="100%">
                <Grid item xs={12} overflow="auto" height="65vh" padding={2}>
                    {items.map((product, index) => (
                        <Fragment key={index}>
                            <Grid container sx={{mb: 2}}>
                                <Grid item>
                                    <Box component='img' alt={product.name} src={product.img} sx={{width:'100%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={12} align='end'>
                                    <Typography variant="body1">{product.name}</Typography>
                                    <Typography variant="body2">{`Price: $${product.price}`}</Typography>
                                </Grid>
                            </Grid>
                            <Divider />
                        </Fragment>
                    ))}
                </Grid>
                <Grid item xs={12} height="20vh" padding={2}>
                    <Typography variant="subtitle1" fontWeight='bold'>Payment instruction</Typography>
                    <Divider />
                    <Typography variant="body2" fontSize='12px'>{`Quantity: ${items.length}`}</Typography>
                    <Typography variant="body2" fontSize='12px'>{`Subtotal: $${subtotal.toFixed(2)}`}</Typography>
                    <Typography variant="body2" fontSize='12px'>{`Sales Tax: $${iva.toFixed(2)}`}</Typography>
                    <Typography variant="h5">{`Total: $${totalPrice.toFixed(2)}`}</Typography>
                </Grid>
                <Grid container height='15vh' justifyContent='center' alignContent='center'>
                    <Grid item xs={12} align='center' padding={2}>
                        <Button
                            onClick={handleClick}
                            sx={{
                                textTransform: 'none',
                                bgcolor: 'primary.main',
                                color: 'App.white',
                                '&:hover': {
                                    bgcolor: 'primary.light',
                                },
                            }}
                        >
                            Pay here!
                        </Button>
                        {preferenceID && (
                            <Wallet initialization={{ preferenceId: preferenceID }} customization={{ texts: { valueProp: 'smart_option' } }} />
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </CartContentContainer>
    );
};