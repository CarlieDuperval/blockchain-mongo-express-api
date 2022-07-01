import { getSmartContractCollection } from "../gateway/mongo.js";

export const createSmartContract = async (blockchain)=> {
    const Col = await getSmartContractCollection();
    const { insertedId } = await Col.insertOne(blockchain)
    return insertedId
}

export const getSmartContract = async (name) => {
    const col = await getSmartContractCollection();
    const smartContract = await col.findOne({ name })
    return smartContract
}

export const getAllSmartContract = async ()=> {
    const col = await getSmartContractCollection();
    const allSmartContracts = await col.find({ }).toArray();
    return allSmartContracts;
}

export const updateSmartContract = async (name, updateObj) => {
    const col = await getSmartContractCollection();
    await col.updateOne({ name}, {$set: updateObj})
}