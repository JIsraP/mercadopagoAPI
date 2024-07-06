import React, { Fragment } from 'react';
import { useCart } from '../../hooks';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

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
    const totalPrice = items.reduce((total, product) => total + product.price, 0);
    const totalDiscountPrice = items.reduce((total, product) => total + (product.discount_price), 0);
    const subtotal = totalPrice * 0.84;
    const iva = totalPrice * 0.16;


    return (
        <CartContentContainer className="open">
            <Grid container direction="column" justifyContent="space-between" height="100%">
                <Grid item overflow="auto" height="80vh" padding={2}>
                    {items.map((product, index) => (
                        <Fragment key={index}>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Avatar alt={product.name} src={product.img} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">{product.name}</Typography>
                                    <Typography variant="body2">{`${product.details}`}</Typography>
                                    <Typography variant="body2">{`Precio: $${product.price}`}</Typography>
                                </Grid>
                            </Grid>
                            <Divider />
                        </Fragment>
                    ))}
                </Grid>
                <Grid item height="20vh" padding={2}>
                    <Typography variant="subtitle1" fontWeight='bold'>Desglose del Cobro</Typography>
                    <Divider />
                    <Typography variant="body2" fontSize='12px'>{`Productos: ${items.length}`}</Typography>
                    <Typography variant="body2" fontSize='12px'>{`Subtotal: $${subtotal.toFixed(2)}`}</Typography>
                    <Typography variant="body2" fontSize='12px'>{`Impuestos: $${iva.toFixed(2)}`}</Typography>
                    {totalDiscountPrice > 0 && (
                        <Typography variant="body2" fontSize='12px'>{`Usted está ahorrando: $${totalDiscountPrice.toFixed(2)}`}</Typography>
                    )}
                    <Typography variant="h5">{`Total: $${totalPrice.toFixed(2)}`}</Typography>
                </Grid>
            </Grid>
        </CartContentContainer>
    );
};