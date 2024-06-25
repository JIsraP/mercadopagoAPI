import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';

export const Product = () => {
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
            </Container>
        </Grid>
    );
};