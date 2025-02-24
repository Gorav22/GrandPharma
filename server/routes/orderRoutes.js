const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Get user orders
router.get('/', auth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('medicines');
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Place a new order
router.post('/', auth, async (req, res) => {
    const { medicines, totalAmount } = req.body;
    try {
        const newOrder = new Order({ user: req.user.id, medicines, totalAmount });
        const order = await newOrder.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
