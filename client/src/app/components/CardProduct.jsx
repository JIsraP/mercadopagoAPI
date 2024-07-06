import { FacebookOutlined, FavoriteBorderOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { RatingStars } from './RatingStars'
import { useCart } from '../../hooks'

export const CardProduct = ({ producto }) => {
    const { addToCart } = useCart();
    const handleaddToCart = () => {
        addToCart(producto);
    }
    return (
        <Card sx={{ maxWidth: '25em', maxHeight: '30em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '24px', bgcolor: 'transparent' }}>
            <CardContent sx={{ width: '100%', bgcolor: 'App.card_action', minHeight: '30em', display: 'flex', alignItems: 'flex-end' }}>
                <Grid container alignItems='center' justifyContent='space-between'>
                    <Grid item>
                        <Grid item xs={12} sx={{ ml: 5 }}>
                            <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', fontSize: '10px' }}>
                                Share
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item>
                                    <IconButton>
                                        <FacebookOutlined sx={{ fontSize: '20px' }} />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <FacebookOutlined sx={{ fontSize: '20px' }} />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <FacebookOutlined sx={{ fontSize: '20px' }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Button onClick={handleaddToCart} sx={{ textTransform: 'capitalize', borderRadius: '20px', border: '1px solid', width: '6vw', fontSize: '12px' }}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>

            <CardContent sx={{ width: '100%', borderRadius: '24px', bgcolor: 'App.card_data', position: 'relative', bottom: '30em', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.03)', padding: 0 }}>
                <Box sx={{ width: '100%' }}>
                    <CardMedia
                        component="img"
                        style={{ width: '100%' }}
                        image={producto.img}
                        alt={producto.name}
                    />
                </Box>
                <Grid container alignItems='center' padding={2}>
                    <Grid item xs={9}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                            {producto.name}
                        </Typography>

                    </Grid>
                    <Grid item container xs={3} justifyContent='flex-end'>
                        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                            ${producto.price.toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <Typography sx={{ fontSize: '10px' }}>
                            {producto.details}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 1 }}>
                        <RatingStars value={producto.rate} />
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}