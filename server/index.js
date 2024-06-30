import express from "express";
import cors from "cors";

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { ACCESS_TOKEN } from "./config.js";

const client = new MercadoPagoConfig({ 
    accessToken: ACCESS_TOKEN, 
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenido al server :)")
});

app.post("/create_preference", async(req, res) => {
    try{
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "MXN",
                },
            ],
            back_urls: {
                success: "https://www.youtube.com",
                failure: "https://www.google.com",
                pending: "https://www.amazon.com"
            },
            auto_return: "approved",
        };
        const preference = new Preference(client);
        const result = await preference.create( { body } );
        res.json({
            id: result.id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear preferencia"
        });
    }
});

app.listen(port, () => {
    console.log(`Server corriendo en el puerto ${port}`)
});