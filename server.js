const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();

// Port configuration - Infomaniak will set the PORT environment variable
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for inline scripts if needed
}));

// Compression middleware for better performance
app.use(compression());

// Serve static files from the root directory
app.use(express.static(__dirname, {
  maxAge: '1d', // Cache static files for 1 day
  etag: true
}));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Catch-all route for SPA-like behavior (optional)
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Social Pay Office server is running on port ${PORT}`);
  console.log(`🌐 Local: http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${__dirname}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
  });
});
