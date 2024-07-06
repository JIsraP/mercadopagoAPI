import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CardProduct, NavBar } from '../components';

export const Product = () => {

    const productos = {
        "001": {
            "name": "Mustang Boss 1969",
            "price": 407,
            "details": "V8 engine | 815 HP",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 228,
            "rate": 3.5,
            "img": "https://images.hgmsites.net/hug/1969-classic-recreations-ford-mustang-boss-429_100677932_h.jpg"
        },
        "002": {
            "name": "Camaro SS 1969",
            "price": 599,
            "details": "V8 engine | 475 HP",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 1000,
            "rate": 4.4,
            "img": "https://cdn.dealeraccelerate.com/noreserve/1/685/29977/790x1024/1969-chevrolet-camaro-ss-ls2-pro-touring-restomod"

        },
        "003": {
            "name": "BMW 120i",
            "price": 769,
            "details": "4 cyl | 300 HP",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 90,
            "rate": 2.5,
            "img": "https://r44performance.com/cdn/shop/articles/BMW-1-Series-Gloss-Black-Styling-Parts.jpg?v=1694160745"
        },
        "004": {
            "name": "Mercedes CLA 200",
            "price": 999,
            "details": "4 cyl | 500 HP",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 86,
            "rate": 5,
            "img": "https://www.mercedes-fans.de/thumbs/lib/04/31/08/o_wide/83104.jpg"
        },
        "005": {
            "name": "Mclaren Senna",
            "price": 259,
            "details": "V8 engine | 789 HP",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 10,
            "rate": 2.5,
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/McLaren_Senna_Genf_2018.jpg/1200px-McLaren_Senna_Genf_2018.jpg"
        },
        "006": {
            "name": "Ford Raptor",
            "price": 349,
            "details": "V8 engine | 405 HP",
            "discount_percentage": 0,
            "discount_price": 0,
            "likes": 127,
            "rate": 3,
            "img": "https://e0.pxfuel.com/wallpapers/480/1022/desktop-wallpaper-ford-f-150-raptor-black-ford-raptor.jpg"
        }
    }

    const [productQuery, setProductQuery] = useState("");
    const [dataFiltered, setFilter] = useState([]);

    const pages = [
        { name: 'Test', route: '/products' },
        { name: 'About Us', route: '/aboutus' },
    ]

    const filterData = (productQuery, products) => {
        if (!productQuery) {
            return products;
        } else {
            return Object.values(products).filter((d) => {
                return (
                    (productQuery && d.name.toLowerCase().includes(productQuery.toLowerCase()))
                );
            });
        }
    };

    useEffect(() => {
        const filteredData = filterData(productQuery, productos);
        setFilter(filteredData);
    }, [productQuery]);


    return (
        <Grid container height='100vh' justifyContent='center' alignItems='center'>
            <NavBar pages={pages} setSearchQuery={setProductQuery} placeholder="Search"/>
            {/* <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    src="./mustang.jpeg"
                    alt="Product"
                    sx={{
                        marginBottom: 2,
                        width: '100%',
                        maxWidth: '300px',
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
                        },
                    }}
                >
                    Buy here!
                </Button>

                {preferenceID && (
                    <Wallet initialization={{ preferenceId: preferenceID }} customization={{ texts: { valueProp: 'smart_option' } }} />
                )}

            </Container> */}
            <Container
                maxWidth='xl'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: '13vh',
                    padding: 2,
                }}
            >
                <Grid container spacing={2} justifyContent='space-around'>
                    {dataFiltered && Object.values(dataFiltered).length > 0 ? (
                        Object.values(dataFiltered).map((product, index) => (
                            <Grid item key={index}>
                                <CardProduct producto={product} />
                            </Grid>
                        ))) : (
                        <Grid item container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Typography>No hay coincidencias con tu búsqueda</Typography>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Grid>
    );
};