import  { MongoClient } from 'mongodb'

export const getDb = async () => {
    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    return client.db('blockchain-mongo-express')
}

//Create a function to get blockchain

export const getBlockchainCollection = async () => {
    const db = await getDb();
    return db.collection('blockchains')
}

export const getSmartContractCollection = async () => {
    const db = await getDb();
    return db.collection('smart-contracts')
}