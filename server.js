// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');
const axios = require('axios');

// Create an instance of an Express application
const app = express();
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Route to handle API requests to get video details from YouTube
app.get('/api/videos', async (req, res) => {
    const videoId = req.query.id;
    const apiKey = process.env.YOUTUBE_API_KEY;

    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
            params: {
                part: 'snippet',
                id: videoId,
                key: apiKey
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching video details:', error);
        res.status(500).send('Error fetching video details');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
