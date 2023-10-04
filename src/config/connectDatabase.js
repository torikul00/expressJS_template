const mongodb = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@practice.6vpv5du.mongodb.net/?retryWrites=true&w=majority`
const mongoClient = mongodb.MongoClient
async function connectDatabase() {

    try {
        const client = await mongoClient.connect(uri)
        return client.db("practice");
    }
    catch (error) {
        
        console.log(error)
    }
}
connectDatabase()

module.exports = connectDatabase
