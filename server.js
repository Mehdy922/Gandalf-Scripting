const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Example API route
app.get('/api/play-video', (req, res) => {
  // Implement logic to play the video on all devices
  console.log('Video playback initiated!');
  res.json({ message: 'Video playback initiated!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
