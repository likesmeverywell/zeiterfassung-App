const TimeCategory = require('../models/TimeCategory');

const createTimeCategory = async (req, res) => {
    const { name, description } = req.body;
    const newCategory = new TimeCategory({ name, description });

    try {
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllTimeCategories = async (req, res) => {
    try {
        const categories = await TimeCategory.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTimeCategory, getAllTimeCategories };
