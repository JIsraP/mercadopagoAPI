import { Box, Button, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { PUBLIC_KEY } from '../../config';

export const Product = () => {
    const [preferenceID, setPreference] = useState(null);
    initMercadoPago(PUBLIC_KEY, {
        locale: 'es-MX'
    });

    const createPreference = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:3000/create_preference", {
                title: 'Mustang',
                quantity: 1,
                price: 100,
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const handleClick = async () => {
        const id = await createPreference();
        if (id) {
            setPreference(id);
        }
    };

    return (
        <Grid container height='100vh' justifyContent='center' alignItems='center'>
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    component="img"
                    src="./mustang.jpeg"
                    alt="Product"
                    sx={{
                        marginBottom: 2,
                        width: '100%',
                        maxWidth: '300px'
                    }}
                />
                <Button
                    onClick={handleClick}
                    sx={{
                        textTransform: 'none',
                        bgcolor: 'primary.main',
                        color: 'App.white',
                        '&:hover': {
                            bgcolor: 'primary.light',
                        }
                    }}
                >
                    Buy here!
                </Button>

                {preferenceID && (
                    <Wallet initialization={{ preferenceId: preferenceID }} customization={{ texts: { valueProp: 'smart_option' } }} />
                )}
            </Container>
        </Grid>
    );
};