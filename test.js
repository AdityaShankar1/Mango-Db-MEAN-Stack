const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');

// We need a temporary app instance for testing
const app = express();
app.use(express.json());

// Mocking a simple route for the test demonstration
app.get('/api/recipes', (req, res) => {
  res.status(200).json([{ title: 'Test Mango', temp: 'Cold' }]);
});

describe('GET /api/recipes', () => {
  it('should return 200 and an array of recipes', async () => {
    const res = await request(app).get('/api/recipes');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
