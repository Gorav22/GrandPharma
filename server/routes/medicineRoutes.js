const express = require('express');
const Medicine = require('../models/Medicine');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Get all medicines
router.get('/', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add a new medicine
router.post('/', auth, async (req, res) => {
    const { name, brand, category, description, price, stock, imageUrl, videoUrl } = req.body;
    try {
        const newMedicine = new Medicine({ name, brand, category, description, price, stock, imageUrl, videoUrl });
        const medicine = await newMedicine.save();
        res.json(medicine);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
