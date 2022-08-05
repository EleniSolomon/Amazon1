const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(STRIPE_KEY)
// - App config
const app = express();
const STRIPE_KEY = process.env.STRIPE_KEY;
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

response.status(201).send({
    clientSecret: paymentIntent.client_secret,

});

});
exports.api = functions.https.onRequest(app);
// /(http://localhost:5001/eleni-c4ff8/us-central1/api).