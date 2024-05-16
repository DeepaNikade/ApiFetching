import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 4000;
const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;
const NINJA_API_KEY = process.env.NINJA_API_KEY;

const app = express();

app.use(express.json());

// Route to fetch random images from Unsplash
app.get('/randomImages', async (req, res) => {
  try {
    const url = 'https://api.unsplash.com/photos/random';
    const response = await axios.get(url, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching the image');
  }
});

// Route to fetch random jokes from Ninja API
app.get('/randomJokes', async (req, res) => {
  try {
    const url = 'https://api.api-ninjas.com/v1/jokes';
    const response = await axios.get(url, {
      headers: {
        'X-Api-Key': `${NINJA_API_KEY}`
      }
    });
    const joke = response.data[0].joke; 
    res.send(joke);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching the joke');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
