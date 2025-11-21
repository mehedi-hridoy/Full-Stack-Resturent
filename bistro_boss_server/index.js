const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

// database connection setup would go here
const username = encodeURIComponent(process.env.DB_USER);
const password = encodeURIComponent(process.env.DB_PASS);

const uri = `mongodb+srv://${username}:${password}@cluster0.ar9nb8e.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    

    // Get the database and collection on which to run the operation
    const menuCollection = client.db("bistroDb").collection("menu");

    const reviewsCollection = client.db("bistroDb").collection("reviews");
    const cartCollection = client.db("bistroDb").collection("cart");

    app.get("/menu", async (req, res) => {
      const menuItems = await menuCollection.find().toArray();
      res.send(menuItems);
    })

     app.get("/reviews", async (req, res) => {
      const reviewItems = await reviewsCollection.find().toArray();
      res.send(reviewItems);
    })

    // carts collection 
    app.post("/carts", async (req, res) => {
      const item = req.body;
      console.log(item);
      const result = await cartCollection.insertOne(item);
      res.send(result);
    })

    
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Resturent is live Now");
});

app.listen(port, () => {
  console.log(`Website is running on ${port}`);
});

/**
 * ------------------------
 * Naming Conventions
 * ------------------------
 * app.get('/users') 
 * app.get('/users/:id')
 * app.post('/users')
 * app.put('/users/:id')
 * app.delete('/users/:id')
 * ------------------------
 */