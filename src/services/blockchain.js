import { getBlockchainCollection } from "../gateway/mongo.js";

export const createBlockchain = async (blockchain)=> {
    const Col = await getBlockchainCollection();
    const { insertedId } = await Col.insertOne(blockchain)
    return insertedId
}

export const getBlockchain = async (name) => {
    const col = await getBlockchainCollection();
    const blockchain = await col.findOne({ name })
    return blockchain
}

export const getAllBlockchains = async ()=> {
    const col = await getBlockchainCollection();
    const allBlockchains = await col.find({ }).toArray();
    return allBlockchains;
}

export const updateBlockchain = async (name, updateObj) => {
    const col = await getBlockchainCollection();
    await col.updateOne({ name}, {$set: updateObj})
}