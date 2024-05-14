const mongodb = require("mongodb");

const uri = `${process.env.MONGO_URI}`;
const mongoClient = mongodb.MongoClient;

let dbPromise = null;

function connectDatabase() {
    if (!dbPromise) {
        console.log('Connected to db');
        dbPromise = new Promise(async (resolve, reject) => {
            try {
                const client = await mongoClient.connect(uri);
                const db = client.db("logify");
                resolve(db);
            } catch (error) {
                reject(error);
            }
        });
    }
    return dbPromise;
}

async function getDB() {
    try {
        const db = await connectDatabase();
        return db;
    } catch (error) {
        throw new Error("Error getting database connection: " + error.message);
    }
}
module.exports = getDB

