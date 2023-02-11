const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", async(req, res) => {
  console.log("payment backend")
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd',
    automatic_payment_methods: {enabled: true},
  });
  console.log(paymentIntent)
  res.status(200).json(paymentIntent)
  // stripe.charges.create(
  //   {
  //     source: req.body.tokenId,
  //     amount: req.body.amount,
  //     currency: "INR",
  //   },
  //   (stripeErr, stripeRes) => {
  //     if (stripeErr) {
  //       res.status(500).json(stripeErr);
  //     } else {
  //       res.status(200).json(stripeRes);
  //     }
  //   }
  // );
});

module.exports = router;
