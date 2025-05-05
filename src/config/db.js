const { MongoClient } = require('mongodb');

async function connectDB(uri) {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('✅ MongoDB connected');
    module.exports.db = client.db(); // default to DB in URI
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

module.exports = { connectDB };