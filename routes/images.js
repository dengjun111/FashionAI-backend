const express = require('express');
const multer = require('multer');
const Image = require('../models/Image');
const { imagineImage, getProgress } = require('../controllers/aiImageController');

const router = express.Router();

router.post('/imagine', async (req, res) => {
    const { prompt, base64Image } = req.body;
    const imageInfo = imagineImage(prompt, base64Image);
    res.json({ imageInfo });
});

router.get('/progress/:id', async (req, res) => {
    const { id } = req.params;
    const progress = getProgress(id);
    res.json({ progress });
});

router.get('/', async (req, res) => {
    const images = await Image.find();
    res.json({ images });
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    res.json({ image });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Image.findByIdAndDelete(id);
    res.json({ message: 'Image deleted' });
});

module.exports = router;