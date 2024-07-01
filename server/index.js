import express from "express";
import cors from "cors";
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
    res.send("Bienvenido al server :)");
});

app.post("/create_preference", async (req, res) => {
    try {
        const { items } = req.body;
        const preferenceData = {
            items: items.map(item => ({
                title: item.title,
                quantity: Number(item.quantity),
                unit_price: Number(item.unit_price),
                currency_id: "MXN",
            })),
            back_urls: {
                success: "https://www.youtube.com",
                failure: "https://www.google.com",
                pending: "https://www.amazon.com",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body: preferenceData });
        res.json({
            id: result.id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear preferencia",
        });
    }
});

app.listen(port, () => {
    console.log(`Server corriendo en el puerto ${port}`);
});