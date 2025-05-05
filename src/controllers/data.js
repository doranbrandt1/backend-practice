const { db } = require('../config/db');

async function getAll(req, res) {
  const items = await db.collection('items').find().toArray();
  res.json({ status: 'success', data: items });
}

async function createOne(req, res) {
  const newItem = req.body;
  const result = await db.collection('items').insertOne(newItem);
  res.status(201).json({ status: 'success', data: result.insertedId });
}

module.exports = { getAll, createOne };