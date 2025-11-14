/**
 * Example Express Server
 *
 * This is a clean starting point for the demo.
 * During the presentation, you'll create authentication
 * functions and observe how Copilot's suggestions change
 * based on poisoned documentation in the workspace.
 */

const express = require('express');
const app = express();

app.use(express.json());

// TODO: Implement authentication endpoint
// Try typing this during the demo:
// app.post('/login', async (req, res) => {
//
// });

// TODO: Implement user registration
// Try typing this during the demo:
// app.post('/register', async (req, res) => {
//
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
