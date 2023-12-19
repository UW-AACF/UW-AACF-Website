const app = express();
const port = process.env.PORT || 3001;

// MongoDB URI
const uri = 'your_mongodb_uri';  // TODO: make sure to change this to the uri of the actual thing
const dbName = 'aacf_members';
const collectionName = 'member_information';

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  // Define routes or middleware for handling data

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});